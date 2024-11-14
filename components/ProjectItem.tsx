import Image from "next/image";
import { headingFont } from "@/utility/fonts";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const ProjectItem = ({
  title,
  type,
  url,
  children,
  desktopScreenshot,
  mobileScreenshot,
  tabletScreenshot,
}: {
  title: string;
  type: string;
  url: string;
  children: React.JSX.Element;
  desktopScreenshot: StaticImport;
  mobileScreenshot: StaticImport;
  tabletScreenshot: StaticImport;
}) => {
  return (
    <div className="flex flex-row flex-wrap bg-gray-100 dark:bg-stone-900 rounded-lg mb-8">
      <div className="flex flex-row flex-wrap p-8 border-solid border-b border-gray-300 dark:border-gray-700">
        <h2
          className={`${headingFont.className} font-black text-2xl mb-0 basis-full`}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>

        <h3
          className={`${headingFont.className} text-stone-700 dark:text-stone-200 font-bold text-xl basis-full`}
        >
          {type}
        </h3>
        {children}
        <h4 className="font-bold">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m:h-80 p-8 overflow-hidden">
        <Image
          className="object-scale-down rounded-lg"
          src={desktopScreenshot}
          alt="Desktop Screenshot of a children's ebook"
        />
        <Image
          className="object-scale-down rounded-lg"
          src={mobileScreenshot}
          alt="Mobile Screenshot of a children's ebook"
        />
        <Image
          className="object-scale-down rounded-lg"
          src={tabletScreenshot}
          alt="Tablet Screenshot of a children's ebook"
        />
      </div>
    </div>
  );
};

export default ProjectItem;
