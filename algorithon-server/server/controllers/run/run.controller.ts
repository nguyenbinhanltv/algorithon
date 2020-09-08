import { LanguagesTable } from '../../util/languages/languages-table.util';
import { LanguagesManager } from '../../util/languages/languages-manager.util';
import * as _ from 'lodash';
import * as request from 'request';

// your client request scheme
type ClientRunRequestBody = {
  lang: string,
  version: string,
  program: string,
}

// Jdoodle response body scheme
type JdoodleResponseBody = {
  output: string,
  statusCode: number,
  memory: string,
  cpuTime: string
}

const validatePostRun = (reqBody: ClientRunRequestBody): boolean => {
  return !_.some(reqBody, (value) => _.isNil(value)) // all reqBody properties != undifined & null 
      && _.isString(reqBody.lang) // must be a string
      && _.isString(reqBody.version) // must be a string
      && _.isString(reqBody.program) // must be a string
      && !_.isEqual(reqBody.program, '') // program must not be as empty string
      // are lang & version supported ?
      && LanguagesManager.isLangSupported(reqBody.lang, reqBody.version)
}

export const runCompiler = (req, res) => {
  console.log('POST: \'/run\'');
  
  const body = _.pick(req.body, ['lang', 'version', 'program']) as ClientRunRequestBody;

  if(!validatePostRun(body)) {
    console.log('invalid body parameters');
    return res.status(400).send('invalid body parameters');
  }

  try {
    const langEntrys = LanguagesTable[body.lang];
    const entry = _.find(langEntrys, body.version);
    const index = LanguagesManager.getLanguageVersionIndex(body.lang, body.version);

    const runRequestBody = {
      script: body.program,
      language: body.lang,
      versionIndex: index,
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET
    };

    request.post({
      url: process.env.JDOODLE_ENDPOINT_EXECUTE,
      json: runRequestBody
    })
    .on('error', error => {
      console.log('request.post error', error);
      return res.status(400).send(error);  
    })
    .on('data', (data: Buffer) => {
      const parseData = JSON.parse(data.toString());
      if(parseData.error) {
        return res.tatus(400).send(parseData);
      } else {
        return res.status(200).send({runResult: parseData});
      }
    });

  } catch (err) {
    console.log('request fail');
    return res.status(400).send('request fail');
  }
}