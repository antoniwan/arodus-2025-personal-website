import Link from "next/link";
import { headingFont } from "@/utility/fonts";

export default function Home() {
  return (
    <div>
      <h1 className={`text-4xl font-black ${headingFont.className}`}>
        Antonio Rodriguez
      </h1>
      <p>
        <em>
          Enjoyer of Learning and Getting Things Done, Parent<sup>2</sup>,
          Technical Program Manager, Web Developer, Product Leader, Amateur
          Philosopher, Striving for Health, Consciousness, Strength, and
          Self-Transcendence ✨
        </em>
      </p>
      <p>
        Dive into my work, interests, and background through the links below. I
        invite you to connect with me for potential projects, consultations,
        mentorship, or collaborations—I&apos;m eager to contribute and make a
        positive impact. Thanks for visiting!
      </p>

      <ul className="link-list">
        <li>
          <Link href="https://www.linkedin.com/in/antoniwan/" target="_blank">
            Work Profile @ LinkedIn
          </Link>
        </li>
        <li>
          <Link href="https://github.com/antoniwan" target="_blank">
            GitHub Profile
          </Link>
        </li>
        <li>
          <Link href="https://codepen.io/antoniwan/#" target="_blank">
            CodePen Examples
          </Link>
        </li>
        <li>
          <Link href="mailto:antonio@builds.software" target="_blank">
            Contact Me via Email
          </Link>
        </li>
        <li>
          <Link href="/projects">See Recent Projects</Link>
        </li>
        <li>
          <Link href="https://medium.com/@wizards777" rel="noreferrer noopener">
            Blog (@Medium)
          </Link>
        </li>
        <li>
          <Link
            href="https://www.goodreads.com/antoniwan"
            rel="noreferrer noopener"
          >
            Check out what I&apos;m reading!
          </Link>
        </li>
        <li>
          <Link href="/about-me">Learn More About Me</Link>
        </li>
      </ul>
    </div>
  );
}
