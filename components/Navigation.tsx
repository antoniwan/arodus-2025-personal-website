"use client";
import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const pathname = usePathname();
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

  const linkItemClassNames = `flex rounded-full text-center text-white font-bold hover:text-stone-950 transition-all`;

  return (
    <nav className="container mx-auto px-2 py-4 mb-12">
      <ul className="navigation-bar flex flex-wrap justify-between md:justify-start md:space-x-4 mx-2">
        <li>
          <Link
            className={`${linkItemClassNames} ${
              pathname === "/" ? "grayscale" : ""
            }`}
            href="/"
          >
            <span>🏠</span>
          </Link>
        </li>

        <li>
          <Link
            className={`${linkItemClassNames} ${
              pathname === "/projects" ? "active" : ""
            }`}
            href="/projects"
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            className={`${linkItemClassNames} ${
              pathname === "/about-me" ? "active" : ""
            }`}
            href="/about-me"
          >
            About Me
          </Link>
        </li>

        <li>
          <a
            className={linkItemClassNames}
            href="https://medium.com/@wizards777"
            rel="noreferrer noopener"
            target="_blank"
          >
            <span>
              Blog <sub>🔗</sub>
            </span>
          </a>
        </li>

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
