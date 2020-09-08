import { LanguagesTable } from "../../util/languages/languages-table";

export const getLanguages = (req, res) => {
  console.log("GET: '/langs'");
  res.status(200).send({ langs: LanguagesTable });
};
