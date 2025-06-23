export type ProjectTypes = {
  projectName: string;
  projectBuName: string;
  tag: string[];
  dates: string;
  infos: string;
  infos2: string;
  character: string[];
  usedLanguage: UsedLanguage[];
};

export type UsedLanguage = {
  name: string;
  details: string;
};
