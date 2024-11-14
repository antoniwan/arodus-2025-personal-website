import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaCodepen,
  FaLinkedin,
  FaThreads,
  FaGoodreads,
  FaMedium,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const SocialIcons = () => {
  const listItemClasses = `flex justify-center items-center align-middle contnet-center text-4xl m-2`;

  return (
    <ul className="flex flex-wrap justify-around align-middle content-center items-center list-none m-0 p-0 mt-12 gap-8">
      <li className={listItemClasses}>
        <a
          href="https://github.com/antoniwan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
      </li>

      <li className={listItemClasses}>
        <a
          href="https://www.linkedin.com/in/antoniwan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </li>

      <li className={listItemClasses}>
        <a
          href="https://codepen.io/antoniwan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaCodepen />
        </a>
      </li>

      <li className={listItemClasses}>
        <a
          href="https://www.threads.net/@antoniwan777"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaThreads />
        </a>
      </li>

      <li className={listItemClasses}>
        <a
          href="https://wizards777.medium.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaMedium />
        </a>
      </li>

      <li className={listItemClasses}>
        <a
          href="http://instagram.com/antoniwan777"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </li>

      <li className={listItemClasses}>
        <a
          href="https://www.facebook.com/antoniwan777"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebook />
        </a>
      </li>

      <li className={listItemClasses}>
        <a
          href="https://www.goodreads.com/antoniwan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGoodreads />
        </a>
      </li>

      <li className={listItemClasses}>
        <a href="mailto:antonio@builds.software">
          <IoIosMail />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
