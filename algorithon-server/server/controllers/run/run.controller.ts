import { LanguagesTable } from '../../util/languages/languages.util';

export const runCompiler = (req, res) => {
  console.log('POST: \'/run\'');
  res.status(200).send({ langs: LanguagesTable });
}