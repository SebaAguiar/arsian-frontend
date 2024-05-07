export interface ISideSlice {
  isSideActive: boolean;
  toggleSide: () => void;
}

export interface IMiddleTexts {
  work: string;
  download: string;
}

export interface ISkill {
  name: string;
  image: string;
}

export interface IExperience {
  title: string;
  company: string;
  companyUrl?: string;
  from: string;
  to: string;
  description: string;
  certificateUrl?: string;
}

export interface ICertificate {
  name: string;
  company: string;
  companyUrl: string;
  image: string;
  date: string;
}

export type TLang = 'es' | 'en';
