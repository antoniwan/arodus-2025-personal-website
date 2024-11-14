import { headingFont } from "@/utility/fonts";
import ProjectItem from "@/components/ProjectItem";
import kids_ebook_desktop from "@/assets/projects/ebook_kids-desktop.avif";
import kids_ebook_tablet from "@/assets/projects/ebook_kids-ipad.avif";
import kids_ebook_mobile from "@/assets/projects/ebook_kids-iphone.avif";
import lawyer_cms_desktop from "@/assets/projects/abogadajulia-desktop.avif";
import lawyer_cms_tablet from "@/assets/projects/abogadajulia-ipad.avif";
import lawyer_cms_mobile from "@/assets/projects/abogadajulia-iphone.avif";
import wordle_desktop from "@/assets/projects/wordle-desktop.avif";
import wordle_tablet from "@/assets/projects/wordle-ipad.avif";
import wordle_mobile from "@/assets/projects/wordle-iphone.avif";
import ja_desktop from "@/assets/projects/ja-desktop.avif";
import ja_tablet from "@/assets/projects/ja-ipad.avif";
import ja_mobile from "@/assets/projects/ja-iphone.avif";

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
        desktopScreenshot={wordle_desktop}
        mobileScreenshot={wordle_tablet}
        tabletScreenshot={wordle_mobile}
      >
        <p>
          This Wordle Word game clone is a practice exercise from{" "}
          <a
            href="https://www.joyofreact.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            The Joy of React
          </a>{" "}
          by <em>Josh W Comeau</em>, and it had me practice creating dynamic
          user interfaces and bundling the React web application with{" "}
          <a
            href="https://parceljs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Parcel&apos;s
          </a>{" "}
          minimum build tooling. Throughout the exercise, I practiced React
          hooks, flexbox CSS, data bindings, form submissions, regular
          expressions, state hooks, cool JavaScript syntax tricks (object
          destructuring, spread operators, others), utility &apos;library&apos;
          files organization, conditional rendering, event handlers, and other
          goodies. Please give it a spin; it should be fun!
        </p>
      </ProjectItem>

      <ProjectItem
        title="JuanAngustia.com"
        type="Professional Personal Portfolio"
        url="https://juanangustia.com/"
        desktopScreenshot={ja_desktop}
        mobileScreenshot={ja_tablet}
        tabletScreenshot={ja_mobile}
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
          React starter to create a vivid portfolio website for my Googler
          friend. He designed every visual aspect of the site. I developed the
          components, layouts, and necessary JavaScript and React hooks to
          calculate and animate all transitions and particle effects using the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.framer.com/motion/animation/"
          >
            Framer Motion
          </a>{" "}
          animation libraries for mobile, tablet, and desktop breakpoints—this
          was particularly challenging.
        </p>
      </ProjectItem>

      <div className="flex flex-row flex-wrap">
        <h2 className="text-center text-3xl font-black mr-2">
          Ready to work with me?
        </h2>
        <a href="mailto:antonio@builds.software" className="text-3xl font-bold">
          Let's talk!
        </a>
      </div>
    </div>
  );
}
