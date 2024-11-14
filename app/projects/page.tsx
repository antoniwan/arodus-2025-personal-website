import { headingFont } from "@/utility/fonts";
import ProjectItem from "@/components/ProjectItem";
import kids_ebook_desktop from "@/assets/projects/ebook_kids-desktop.avif";
import kids_ebook_tablet from "@/assets/projects/ebook_kids-ipad.avif";
import kids_ebook_mobile from "@/assets/projects/ebook_kids-iphone.avif";
import lawyer_cms_desktop from "@/assets/projects/abogadajulia-desktop.avif";
import lawyer_cms_tablet from "@/assets/projects/abogadajulia-ipad.avif";
import lawyer_cms_mobile from "@/assets/projects/abogadajulia-iphone.avif";

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
        desktopScreenshot={lawyer_cms_desktop}
        mobileScreenshot={lawyer_cms_mobile}
        tabletScreenshot={lawyer_cms_tablet}
      >
        <p>
          This site was designed in{" "}
          <a
            href="https://www.figma.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Figma
          </a>{" "}
          and built with{" "}
          <a
            href="https://wordpress.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            WordPress
          </a>{" "}
          using a branch of the WordPress{" "}
          <a
            href="https://wordpress.org/themes/twentytwentyfour/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twenty-Twenty-Four Theme
          </a>{" "}
          and is fully responsive. The client&apos;s objectives were to
          construct a performant, beautiful, legible, and accessible website in
          multiple languages with thorough content-authoring capabilities. SEO
          was also an important consideration. At go-live, this site had an
          average of{" "}
          <a
            href="https://pagespeed.web.dev/analysis/https-www-abogadajulia-com/jyyyix3lk5?form_factor=mobile"
            target="_blank"
            rel="noopener noreferrer"
          >
            92 Google PageSpeed Insights
          </a>{" "}
          on the four pillars.
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

      <ProjectItem
        title="Word Game (Practice Exercise)"
        type="Wordle Game Clone"
        url="https://wordle-clone-arm.netlify.app/"
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
