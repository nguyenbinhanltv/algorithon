import { app } from "../server";
import { LanguageTable, LanguagesTable } from "../utils/languages/languages-table";
import { expect } from "chai";
import * as request from "supertest";

describe("GET : /langs", function () {
  it("should respond with 200 & body with languages table (2D array).", function (done) {
    request(app) // require the app instance
      .get("/langs") // calling GET : /lang API route
      .set("Accept", "application/json") // setting 'Accept' header
      .expect("Content-Type", /json/) // asserting 'Content-Type' header
      .expect(200) // asserting 200 status code
      .end((err, res) => {
        // on the actual response object - asserting that :
        expect(res.body).to.have.property("langs"); // response body contains a 'lang' property
        const langs = res.body.langs as LanguageTable;
        expect(langs).to.not.be.empty; // 'lang' object is not empty
        expect(langs).eql(LanguagesTable); // 'lang' object is deeply equal to 'languagesTable' object
        done(err); // calling done passing any errors.
      });
  });
});

describe("POST : /run", function () {
  it("should respond with 200 and successful result object", function (done) {
    request(app)
      .post("/run")
      .send({
        lang: "python3",
        version: "3.6.5",
        program: "a = 7\nb = 3\nsum = a + b\nprint(sum)",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.have.property("runResult");
        expect(res.body.runResult).to.have.all.keys([
          "output",
          "statusCode",
          "memory",
          "cpuTime",
        ]);
        done(err);
      });
  });

  it("should respond with 400 for unsupported lang", function (done) {
    request(app)
      .post("/run")
      .send({
        lang: "pyn3",
        version: "3.6.5",
        program: "a = 7\nb = 3\nsum = a + b\nprint(sum)",
      })
      .set("Accept", "application/json")
      .expect(400, done);
  });

  it("should respond with 400 for empty program", function (done) {
    request(app)
      .post("/run")
      .send({
        lang: "python3",
        version: "3.6.5",
        program: "",
      })
      .set("Accept", "application/json")
      .expect(400, done);
  });

  it("should respond with 400 for undefined version", function (done) {
    request(app)
      .post("/run")
      .send({
        lang: "python3",
        program: "a = 7\nb = 3\nsum = a + b\nprint(sum)",
      })
      .set("Accept", "application/json")
      .expect(400, done);
  });
});
