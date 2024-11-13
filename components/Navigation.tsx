"use client";
import { useLayoutEffect, useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const element = document.documentElement;
    if (element.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");
    setIsDarkMode((previousState) => !previousState);
  };

  const linkItemClassNames = `flex py-2 px-4 rounded-full text-white font-bold hover:bg-gray-300 hover:text-stone-950 transition-all`;

  return (
    <nav className="container mx-auto px-2 py-4 mb-12">
      <ul className="navigation-bar flex justify-between md:justify-start md:space-x-4 mx-2">
        {[
          [`🏠`, "/"],
          ["About Me", "/about-me"],
          ["Projects", "/projects"],
          ["Blog", "/blog"],
        ].map(([title, url]) => (
          <li key={title}>
            <Link className={linkItemClassNames} href={url}>
              {title}
            </Link>
          </li>
        ))}
        <li>
          <button className={linkItemClassNames} onClick={toggleDarkMode}>
            {!isDarkMode ? <span>🌒</span> : <span>🌞</span>}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
