import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "../utils/api";
import Image from "next/image";
import cn from "classnames";
import GradientCard from "../components/GradientCard";
import ContactMe from "../components/ContactMe";
import BackArrowIcon from "../components/BackArrowIcon";
import BackButton from "../components/BackButton";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Feed Background | Dalem Nazim Abdelaziz</title>
        <meta
          name="description"
          content="Dalem Nazim Abdelaziz - Feed Background"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackButton />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#100000] to-[#050000] py-32 text-white">
        <div className="w-3/4">
          <div className="flex flex-row gap-x-16">
            <div className="pr-100 flex flex-col gap-y-2">
              <h3 className="text-md"> Case Study:</h3>
              <h1 className="text-5xl font-bold">Feed Background</h1>
            </div>
          </div>
          <div className="flex flex-col gap-8 xl:px-24">
            {/* SECTION */}
            <div className="mt-8">
              <div className="flex w-full flex-row gap-x-16">
                <h2 className="mb-4 justify-self-start text-4xl font-bold">
                  Project goals
                </h2>
              </div>
              <div className="flex flex-col">
                <span>
                  Feed Background (feedbg) Is a social platform cenetered around
                  gathering
                  <span className="font-bold"> content creators </span>
                  to share insights, collaborate, and discuss content creations
                  on various platforms. <br />* Project period: October 2022 -
                  December 2022
                </span>
              </div>
            </div>
            {/* SECTION */}
            <div className="mt-8">
              <div className="flex w-full flex-row gap-x-16">
                <h2 className="mb-4 justify-self-start text-4xl font-bold">
                  Target audience
                </h2>
              </div>
              <div className="flex flex-col">
                <span className="text-justify">
                  The target audience for feedbg constitutes established
                  creators and other individuals who create content for a
                  variety of different mediums, such as writers, artists,
                  photographers, videographers, and others. The platform could
                  be useful for anyone looking to improve their skills and learn
                  from others in the industry, as well as for those who are just
                  starting out and looking for guidance and support.
                  Additionally, the platform could be attractive to
                  professionals who are looking to network with others in the
                  industry and stay up-to-date on the latest trends and best
                  practices.
                </span>
              </div>
            </div>
            {/* SECTION */}
            <div className="mt-8">
              <div className="flex w-full flex-row gap-x-16">
                <h2 className="mb-4 justify-self-start text-4xl font-bold">
                  Challenges and constraints
                </h2>
              </div>
              <div className="flex flex-col">
                <ul className=" list-disc ">
                  <li>
                    <span className="text-justify">
                      Attracting and retaining users: It can be difficult to get
                      content creators (especially big ones) to sign up for and
                      regularly use a new platform considering their often busy
                      schedule
                    </span>
                  </li>
                  <li>
                    <span className="text-justify">
                      Ensuring quality and relevance of content: The platform
                      will need to have a system in place for ensuring that the
                      insights and information shared by users is accurate,
                      helpful, and relevant to other content creators.
                    </span>
                  </li>
                  <li>
                    <span className="text-justify">
                      Competition: There are other platforms that offer similar
                      services, so the platform will need to differentiate
                      itself and offer unique value to users in order to
                      compete.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* SECTION */}
            <div className="mt-8">
              <div className="flex w-full flex-row gap-x-16">
                <h2 className="mb-4 justify-self-start text-4xl font-bold">
                  Research and study details
                </h2>
              </div>
              <div className="flex flex-col">
                <span className="text-justify">
                  There are a lot of people who face various issues getting
                  through and with understanding various platforms. The ideation
                  was to examine what a user of such website would focus on and
                  need. it is important to understand aspects of the digital
                  content creation landscape such as: Audience: Understanding
                  the needs, interests, and preferences of your target audience
                  is crucial in creating relevant and engaging content.
                  Platforms: Knowing which platforms to use for sharing and
                  distributing your content is important, as different platforms
                  have different features and audiences. SEO: Optimizing your
                  content for search engines can help increase visibility and
                  drive traffic to your content. Marketing: Promoting your
                  content through various channels, such as social media, email,
                  and paid advertising, can help increase visibility and
                  engagement. Analytics: Using tools to track the performance of
                  your content can help you understand what is working and what
                  is not, and make informed decisions about future content.
                  Legal issues: It is important to understand and comply with
                  copyright and intellectual property laws, as well as any
                  relevant regulations or guidelines related to your content.
                  Ethics: Creating content that is accurate, fair, and
                  respectful is essential in building trust and credibility with
                  your audience.
                </span>
              </div>
            </div>
            {/* SECTION */}
            <div className="mt-8">
              <div className="flex w-full flex-row gap-x-16">
                <h2 className="mb-4 justify-self-start text-4xl font-bold">
                  Initial design concepts
                </h2>
              </div>
              <div className="flex flex-col gap-16  lg:flex-row">
                <div className="flex flex-col gap-4">
                  <span className="text-justify">
                    From a desire to create a supportive and collaborative
                    community for individuals in the content creation space, we
                    were inspired to focus on centering the identity around a
                    few simple concepts that allow for setting up the platform
                    as a place for expression, rather than forcing an identity.
                  </span>
                  <li>
                    <span className="text-justify">
                      After three iterations of the logo, we decided to go with
                      the third one as it was the most simple and clean. The
                      logo is minimization of the platform name to its essential
                      focus. The logo is also a play on the idea of
                      encapsulating an ever-changing background, which is the
                      main focus of the platform.
                    </span>
                  </li>
                  <li>
                    <span className="text-justify">
                      Grayscale theme: Black and white is a classic color
                      combination that is easy on the eye and can convey a sense
                      of simplicity and sophistication. It is also a good choice
                      for that the focus of the platform is on the content and
                      not the design. The color scheme is also easy to implement
                      and maintain.
                    </span>
                  </li>
                  <li>
                    <span className="text-justify">
                      The Grayscale theme presents an opportunity to enrich the
                      content with color and draw focus to effects and CTAs.
                    </span>
                  </li>
                  <Image
                    src="/feedbg-colors.png"
                    alt="feedbg-colors"
                    width={1976 / 2}
                    height={128}
                  />
                </div>
                <Image
                  src="/feedbg-logo-iterations.png"
                  alt="feedbg-logo-iterations"
                  width={332}
                  height={968}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            {/* SECTION */}
            <div className="mt-8">
              <div className="flex w-full flex-row gap-x-16">
                <h2 className="mb-4 justify-self-start text-4xl font-bold">
                  Sketches and wireframes
                </h2>
              </div>
              <div className="flex flex-col gap-8">
                <span className="text-justify">
                  With the focus of a content-centric platform that is not
                  pushing its own branding, but instead, letting the user
                  explore and enrich their experience.
                </span>
                <Image
                  src="/feedbg-wireframes.png"
                  alt="feedbg-logo-wireframes"
                  width="1028"
                  height="968"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            {/* SECTION */}
            <div className="mt-8">
              <div className="flex w-full flex-row gap-x-16">
                <h2 className="mb-4 justify-self-start text-4xl font-bold">
                  User testing results
                </h2>
              </div>
              <div className="flex flex-col">
                Research was conducted to understand the needs, interests, and
                preferences of would-be feedbg users, and primarily their
                impression on home page and premise.
                <br />
                The research resulted in the following insights:
                <ul className="list-disc">
                  <li>
                    <span className="text-justify">
                      Users were interested in simplicity and focus.
                    </span>
                  </li>
                  <li>
                    <span className="text-justify">
                      Users care about platform values.
                    </span>
                  </li>
                  <li>
                    <span className="text-justify">
                      Users care about accessibility.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* SECTION */}
            <div className="mt-8">
              <div className="flex w-full flex-row gap-x-16">
                <h2 className="mb-4 justify-self-start text-4xl font-bold">
                  Mockups and high-fidelity prototypes
                </h2>
              </div>
              <div className="flex flex-col">
                <div>
                  <Link
                    target="_blank"
                    href="https://www.figma.com/file/1OmTGFHJwivr1lo2AnTqUH/Feedback-ground?node-id=117%3A442&t=6PIXqWnTQ3Ib2EOz-1"
                    className="underline"
                  >
                    Click here
                  </Link>
                  &nbsp;to view high-fidelity{" "}
                  <span className="font-bold">mockups</span> for feedbg, or{" "}
                  <Link
                    target="_blank"
                    href="https://www.figma.com/proto/1OmTGFHJwivr1lo2AnTqUH/Feedback-ground?node-id=137%3A49&scaling=min-zoom&page-id=117%3A442&starting-point-node-id=137%3A49"
                    className="underline"
                  >
                    here
                  </Link>
                  &nbsp;for high-fidelity{" "}
                  <span className="font-bold">prototypes</span>.<br />
                  <br />
                  <div>
                    The following case study document contains:{" "}
                    <ul className=" list-disc ">
                      <li> - The designer’s role in the project</li>
                      <li>- Project goal</li>
                      <li>- Target audience</li>
                      <li>- Key challenges or constraints</li>
                      <li>- Research study details</li>
                      <li>- Initial design concepts</li>
                      <li>- Sketches or wireframes</li>
                      <li>- User testing results</li>
                      <li>
                        - Mockups or high-fidelity prototypes of final, polished
                        designs
                      </li>
                      <li>
                        - Conclusion noting what was learned through the design
                        process and possible next steps
                      </li>
                    </ul>
                    <Link
                      target="_blank"
                      href="https://coursera-assessments.s3.amazonaws.com/assessments/1671368961517/348135ad-a000-468d-bc14-d9b6841825d4/feedbg%20case%20study.pdf"
                      className="underline"
                    >
                      Click here
                    </Link>{" "}
                    for case study.
                  </div>
                </div>
              </div>
            </div>
            {/* SECTION */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
