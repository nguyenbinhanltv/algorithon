import { Language } from '../../models/languages/language.model';

export type LanguagesTable = Iterable<[string, Language[]]>;

export type LanguagesMap = Map<string, Language[]>;