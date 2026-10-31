interface PublishedArticle {
  id: number;
  title: string;
  publication: string;
  url: string;
}

export const publishedArticles: PublishedArticle[] = [
  {
    id: 1,
    title: "What is Human Augmentation?",
    publication: "Verpex",
    url: "https://verpex.com/blog/what-is-human-augmentation",
  },
  {
    id: 2,
    title: "Add Interactive 3D models to a website using Three.js",
    publication: "Verpex",
    url: "https://verpex.com/blog/add-interactive-3d-models-to-a-website-using-threejs",
  },
  {
    id: 3,
    title: "Symmetrical and Asymmetrical Balance in Web Design",
    publication: "Verpex",
    url: "https://verpex.com/blog/symmetrical-and-asymmetrical-balance-in-web-design",
  },
  {
    id: 4,
    title: "We Are Obsessing Over VS Angel ELSA HOSK’s Street Style",
    publication: "StyleRave",
    url: "https://www.stylerave.com/we-are-obsessing-over-victorias-secret-angel-elsa-hosk/",
  },
];
