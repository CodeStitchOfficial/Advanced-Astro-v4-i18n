const navData = [
  {
    key: "home",
    url: "/",
    children: []
  },
  {
    key: "about",
    url: "/about/",
    children: []
  },
  {
    key: "projects",
    url: "/projects/",
    children: [
      {
        key: "project-1",
        url: "/projects/project-1/"
      },
      {
        key: "project-2",
        url: "/projects/project-2/"
      }
    ]
  },
  {
    key: "blog",
    url: "/blog/",
    children: []
  },
  {
    key: "contact",
    url: "/contact/",
    children: []
  },
]
export default navData