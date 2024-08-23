import TeachingSection from "./components/NewsSection";

export const personalInfo = {
  name: 'Yongtong Wu | 吴永彤',
  profilePicture: '/profile.jpg', //optional
  role: 'Undergraduate Student',
  university: 'Peking University',
  universityWebsite: 'https://english.pku.edu.cn/',
  socialMedia: [
    { name: 'Email', url: 'mailto:wuyongtong@stu.pku.edu.cn' },
    // { name: 'Twitter', url: 'https://twitter.com/anxndsgn' },
    {
      name: 'GitHub',
      url: 'https://github.com/jokerwyt',
    },
    // { name: 'LinkedIn', url: 'https://linkedin.com' },
    // { name: 'ORCID', url: 'https://orcid' },
    // { name: 'Google Scholar', url: 'https://scholar.google.com' },
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: 'Researcher homepage',
  // teaserImage: "/teaser.jpg",
};

export const navigations = [
  // { name: 'Projects', route: '/projects' },
  // { name: 'Publications', route: '/publications' },
  // { name: 'Life', route: '/life' },
  // { name: 'CV', route: '/cv.pdf' },
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: true,
  ExperienceSection: true,
  TeachingSection: true,
  SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle = 'lato'; // "sans" | "serif" | "mono" | "lato"
