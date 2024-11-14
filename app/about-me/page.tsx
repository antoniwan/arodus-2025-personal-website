import Image from "next/image";
import { headingFont } from "@/utility/fonts";
import profilePicture from "@/assets/profile-picture-2024.avif";
import SocialIcons from "@/components/SocialIcons";

export default function AboutMe() {
  return (
    <div className="flex flex-wrap md:flex-nowrap flex-row">
      <div className="md:basis-1/4 mr-12 mb-8">
        <Image
          className="rounded-full"
          src={profilePicture}
          alt="Picture of the Author, Antonio Rodriguez, hispanic handsome man that looks like Vegeta the Saiyan Prince"
        />
      </div>

      <div className="">
        <h1 className={`text-4xl font-black ${headingFont.className}`}>
          More About Me...
        </h1>
        <p>
          Hi, my name is Antonio, and I enjoy building things: web applications,
          software development teams, prototypes, documents, products,
          abstractions, songs, cooking recipes, instructionals, anything. I
          genuinely enjoy my work; it truly blows my mind that I get paid to
          learn and build things all day.
        </p>
        <p>
          Some years ago, as a college student, a friend and I founded a web
          software development company that a marketing firm later acquired.
          Unfortunately, this entrepreneurship experience was more educational
          than lucrative. The good news is that this venture helped me define
          how I want to work and what I need to facilitate for my
          coworkers—integrity, empathy, ethics, compassion, kindness,
          transparency, inclusion, diversity, tolerance, and respect. We are
          most productive and efficient when diverse and healthy in mind, body,
          and spirit. We need to care for each other if we work so hard daily. I
          see you. You are all working so hard.
        </p>
        <p>
          The marketing agency life was enjoyable and appealing to me. I will
          miss all the variability of the projects, their scope, and their
          features. The people you work with are brilliant, too. The wild client
          feedback and how quick turnarounds were. We&apos;d have to learn a
          language, library, framework, or protocol (!!) on the go because the
          client wanted us to do X, Y, and Z. What?! I loved that feeling, and
          delivering felt even more remarkable. I learned to love learning.
        </p>
        <p>
          Throughout my career, I&apos;ve held many responsibilities: Individual
          Contributor, Architect, Chief Technology Officer, Engineering Manager,
          and Director to a few teams, projects, and products with various
          levels of effort and impact. Nowadays, I&apos;m enjoying my work as a
          Technical Program Manager for the digital marketing technologies core
          group in a fantastic Global tool and hardware company.
        </p>
        <p>
          Aside from work, I focus on being conscious and present. I enjoy
          bringing my family together with home-cooked food, weightlifting,
          playing basketball, reading, and working hard to be a loving, mindful,
          and involved parent. I also enjoy working on creative projects,
          writing on my philosophy blog, writing and coding e-books for my
          daughter and nephew, and, most recently, attempting to record a
          thrash/death metal album with a close friend.
        </p>
        <p>Thanks for visiting!</p>

        <SocialIcons />
      </div>
    </div>
  );
}
