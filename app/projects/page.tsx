import { headingFont } from "@/utility/fonts";
import ProjectItem from "@/components/ProjectItem";
import kids_ebook_desktop from "@/assets/projects/ebook_kids-desktop.avif";
import kids_ebook_tablet from "@/assets/projects/ebook_kids-ipad.avif";
import kids_ebook_mobile from "@/assets/projects/ebook_kids-iphone.avif";

export default function Home() {
  return (
    <div className="">
      <h1 className={`text-4xl font-black ${headingFont.className} mb-12`}>
        Recent Projects
      </h1>

      <ProjectItem
        title="AbogadaJulia.com"
        type="Immigration Lawyer CMS Website"
        url="https://www.abogadajulia.com"
        desktopScreenshot={kids_ebook_desktop}
        mobileScreenshot={kids_ebook_mobile}
        tabletScreenshot={kids_ebook_tablet}
      >
        <p>
          I used the{" "}
          <a
            href="https://create-react-app.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            create-react-app
          </a>{" "}
          React starter to create a simple e-book website. It uses{" "}
          <a
            href="https://styled-components.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styled Components
          </a>
          , React hooks, and context to manage state and local storage to save
          the chosen language and the last page the user browsed. I made the
          illustrations using multiple AI generators, and writing the content
          was the most challenging part. The design is simple, although entirely
          responsive.
        </p>
      </ProjectItem>

      <ProjectItem
        title="Mia, the Sun, and the Moon"
        type="Children's E-book in English and Spanish"
        url="http://mia-the-sun-and-the-moon.antoniorodriguez.us/"
        desktopScreenshot={kids_ebook_desktop}
        mobileScreenshot={kids_ebook_mobile}
        tabletScreenshot={kids_ebook_tablet}
      >
        <p>
          I used the{" "}
          <a
            href="https://create-react-app.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            create-react-app
          </a>{" "}
          React starter to create a simple e-book website. It uses{" "}
          <a
            href="https://styled-components.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styled Components
          </a>
          , React hooks, and context to manage state and local storage to save
          the chosen language and the last page the user browsed. I made the
          illustrations using multiple AI generators, and writing the content
          was the most challenging part. The design is simple, although entirely
          responsive.
        </p>
      </ProjectItem>
    </div>
  );
}
