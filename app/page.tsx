import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-xl">Antonio Rodriguez</h1>
      <p>
        Enjoyer of Learning and Getting Things Done, Parent<sup>2</sup>,
        Technical Program Manager, Web Developer, Product Leader, Amateur
        Philosopher, Striving for Health, Consciousness, Strength, and
        Self-Transcendence
      </p>

      <ul>
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
            Check out what I'm reading!
          </Link>
        </li>
        <li>
          <Link href="/about-me">Learn More About Me</Link>
        </li>
      </ul>
    </div>
  );
}
