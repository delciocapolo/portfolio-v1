export interface InterfaceHeaderHomePageNameIcons {
  nameIcon: string;
  url: string;
  name: string;
}

export interface InterfaceSkillCard {
  content: string;
  iconName: string;
}

export interface InterfaceExperienceList {
  companyLogo: string;
  companyName: string;
  companyLink: string;
  start_period: string;
  ends_period: string | null;
  textExperience: string;
}

export interface InterfaceProjectsCard {
  urlImage: string;
  titleProject: string;
  description: string;
  urlCase: string; // this url navigate user to implemented project
}
