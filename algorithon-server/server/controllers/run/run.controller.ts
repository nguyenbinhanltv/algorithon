import { LanguagesTable } from "../../util/languages/languages-table";
import { LanguagesManager } from "../../util/languages/languages-manager";
import { RequestHandler } from "../../util/jdoodle-request-handler/request-handler";

import * as _ from "lodash";
import * as request from "request";

// your client request scheme
type ClientRunRequestBody = {
  lang: string;
  version: string;
  program: string;
};

// Jdoodle response body scheme
type JdoodleResponseBody = {
  output: string;
  statusCode: number;
  memory: string;
  cpuTime: string;
};

const validatePostRun = (reqBody: ClientRunRequestBody): boolean => {
  return (
    !_.some(reqBody, (value) => _.isNil(value)) && // all reqBody properties != undifined & null
    _.isString(reqBody.lang) && // must be a string
    _.isString(reqBody.version) && // must be a string
    _.isString(reqBody.program) && // must be a string
    !_.isEqual(reqBody.program, "") && // program must not be as empty string
    // are lang & version supported ?
    LanguagesManager.isLangSupported(reqBody.lang, reqBody.version)
  );
};

export const runCompiler = (req, res) => {
  console.log("POST: '/run'");

  const body = _.pick(req.body, [
    "lang",
    "version",
    "program",
  ]) as ClientRunRequestBody;

  if (!validatePostRun(body)) {
    console.log("invalid body parameters");
    return res.status(400).send("invalid body parameters");
  }

  try {
    const index = LanguagesManager.getLanguageVersionIndex(
      body.lang,
      body.version
    );

    RequestHandler.postRunRequest(body.lang, index, body.program)
      .on("error", (error) => {
        console.log("postRunRequest on error", error);
        return res.status(400).send(error);
      })
      .on("jdoodle-error", (error) => {
        console.log("postRunRequest on jdoodle-error", error);
        return res.status(400).send(error);
      })
      .on("jdoodle-success", (result: JdoodleResponseBody) => {
        return res.status(200).send({ runResult: result });
      });

      
  } catch (err) {
    console.log("request fail");
    return res.status(400).send("request fail");
  }
};
