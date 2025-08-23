export const techLevel = {
  expert: 'expert',
  experienced: 'experienced',
  amateur: 'amateur'
} as const

export const numberToTechLevel = {
  1: techLevel.expert,
  2: techLevel.experienced,
  3: techLevel.amateur
} as const

export type NumberToTechLevel = keyof typeof numberToTechLevel


export const chipStatus = {
  expert: 'success',
  experienced: 'info',
  amateur: 'warning'
} as const

export type TechLevel = typeof techLevel[keyof typeof techLevel]

export type Tech = {
  name: string
  level: TechLevel
}

export const linkTypes = {
  github: 'github',
  web: 'web',
  npm: 'npm',
  android: 'android',
  ios: 'ios',
}

export type LinkType = typeof linkTypes[keyof typeof linkTypes]

export type Link = {
  link: string
  linkType: LinkType
}

export type Project = {
  title: string;
  image: string;
  description: string;
  frontend: string[];
  backend: string[];
  type: string[];
  links: {
    web?: string;
    android?: string;
    ios?: string;
    github?: string;
    npm?: string;
  };
};

export type MyTool = {
  title: string
  techs: Tech[]
}

export type WorkHistory = {
  companyName: string
  employmentDate: string
  cover: string
  position: string
  description: string
  techs: Tech[]
}


/* sheet results */
export type ToolsRowData = {
  Title: string
  Techs: string
}

export type PortfolioRowData = {
  ['Project Name']: string
  Links: string
  Tools: string
  Description: string
  ['Cover Image']: string
}

export type ResumeRowData = {
  ['Company Name']: string
  ['Employment Date']: string
  ['Cover Image']: string
  Position: string
  Responsibility: string
  Tools: string 
}