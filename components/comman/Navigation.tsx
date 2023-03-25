const navigationData = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

import { useRouter } from "next/router";

function Navigation() {
  const router = useRouter();
  const path = router.pathname
  return (
    <>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <h1>
              UpConstruction<span>.</span>
            </h1>
          </a>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" className="navbar">
            <ul>
              {navigationData.map((navItem,index) => {
                return (
                  <li key={navItem.id}>
                    <a href={navItem.link} className={navItem.link===path ? "active" : ""}>
                      {navItem.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navigation;
