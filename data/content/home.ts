type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};


export const skills: Skill[] = [
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    title: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    title: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    title: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },
  {
    title: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    title: "SQLite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
  },
  {
    title: "SQLServer",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
  },
  {
    title: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Wilson Bright",
    job: "Co-Founder of BlockSurvey",
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Philip Imperato",
    job: "CEO of VisualBonus",
  },
  {
    quote:
      "My vision was executed perfectly. The quality and speed of the work was excellent.",
    name: "Zach Green",
    job: "Founder of Hangxiety Shrink",
  },
];
