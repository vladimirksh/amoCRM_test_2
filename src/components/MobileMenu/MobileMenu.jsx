import React from "react";
import { Link } from "react-router-dom";

const menuLinks = [
  { tittle: "Услуги", link: "/services" },
  { tittle: "Виджеты", link: "/widgets" },
  { tittle: "Интеграции", link: "/integrations" },
  { tittle: "Кейсы", link: "/cases" },
];

function MobileMenu(props) {
  return (
    <nav className="mob-menu">
      <ul className="mob-menu__list">
        {menuLinks.map(({ tittle, link }, index) => (
          <li className="mob-menu__item" key={index}>
            <Link to={link} className="mob-menu__link">
              {tittle}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileMenu;
