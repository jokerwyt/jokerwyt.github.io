export const personalInfo = {
  name: { en: 'Wynton Wu', zh: '吴永彤' },
  profilePicture: '/profile.jpg', //optional
  affiliations: [
    {
      name: { en: 'DeepSeek-AI', zh: 'DeepSeek-AI' },
      website: 'https://www.deepseek.com/',
    },
    {
      name: { en: 'Peking University', zh: '北京大学' },
      website: {
        en: 'https://english.pku.edu.cn/',
        zh: 'https://www.pku.edu.cn/',
      },
    },
  ],
  socialMedia: [
    { name: 'Email', url: 'mailto:ytwu776@foxmail.com' },
    {
      name: 'GitHub',
      url: 'https://github.com/jokerwyt',
    },
    // { name: 'Twitter', url: 'https://twitter.com/anxndsgn' },
    // { name: 'LinkedIn', url: 'https://linkedin.com' },
    // { name: 'ORCID', url: 'https://orcid' },
    // { name: 'Google Scholar', url: 'https://scholar.google.com' },
  ],
};

export const websiteInfo = {
  // Root layout metadata is the English page; /zh overrides it per-route.
  title: personalInfo.name.en,
  description: 'Researcher homepage',
  // teaserImage: "/teaser.jpg",
};

export const navigations = [
  // { name: 'CV', route: '/cv.pdf' },
];

export const homepageSection = {
  AboutSection: true,
  ExperienceSection: true,
  TeachingSection: true,
  TalksSection: true,
  SelectedPublicationsSection: true,
};

export const fontStyle = 'lato'; // "sans" | "serif" | "mono" | "lato"
