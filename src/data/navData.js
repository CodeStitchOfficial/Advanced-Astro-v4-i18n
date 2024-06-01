const navData = {
  en: [
    {
      key: "Home",
      url: "/",
      children: []
    },
    {
      key: "About Us",
      url: "/about/",
      children: []
    },
    {
      key: "Projects",
      url: "/projects/",
      children: [
        {
          key: "Project 1",
          url: "/projects/project-1/"
        },
        {
          key: "Project 2",
          url: "/projects/project-2/"
        }
      ]
    }
  ],
  fr: [
    {
      key: "Accueil",
      url: "/",
      children: []
    },
    {
      key: "À propos",
      url: "/about/",
      children: []
    },
    {
      key: "Portfolio",
      url: "/projects/",
      children: [
        {
          key: "Projet 1",
          url: "/projects/project-1/"
        },
        {
          key: "Projet 2",
          url: "/projects/project-2/"
        }
      ]
    }
  ]
}

export default navData