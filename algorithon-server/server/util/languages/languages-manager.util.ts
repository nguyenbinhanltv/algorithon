import {
  LanguagesMap,
  LanguagesTable,
} from "./languages-table.util";
import { Language } from "../../models/languages/language.model";

export class LanguagesManager {
  private static languagesMap: LanguagesMap = new Map<string, Language[]>(
    LanguagesTable
  );

  public static getLanguageVersionIndex(
    lang: string,
    version: string
  ): string | undefined {
    if (this.isLangSupported(lang, version)) {
      const langEntrys = this.languagesMap.get(lang);
      const entry = langEntrys.find((lang) => lang.version == version);
      if (entry) {
        return entry.index;
      }
    }
  }

  public static isLangSupported(lang: string, version: string): boolean {
    if (this.languagesMap.has(lang)) {
      const langEntrys = this.languagesMap.get(lang);
      return langEntrys.some((lang) => lang.version == version);
    } else {
      return false;
    }
  }

  public static getLanguagesMap() {
    return this.languagesMap;
  }
}
