interface Project {
  id: number;
  image: string;
  description: string;
  link: string;
}

export const portfolioData: Project[] = [
  {
    id: 1,
    image: "/img/skilledpalshot.png",
    description: "Skilled Pal",
    link: "https://www.skilledpal.com",
  },

  {
    id: 2,
    image: "/img/ace.png",
    description: "Consult Ace",
    link: "https://consultace.netlify.app/",
  },

  {
    id: 3,
    image: "/img/img4.png",
    description: "Calculator",
    link: "https://jua-calculator.netlify.app/",
  },
];
