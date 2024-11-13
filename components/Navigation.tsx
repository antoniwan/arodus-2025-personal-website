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

  return (
    <>
      <ul className="px-4 py-4 flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-me">About Me</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <button onClick={toggleDarkMode}>
            {!isDarkMode ? <span>🌒</span> : <span>☀️</span>}
          </button>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
