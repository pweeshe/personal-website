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
        <title>Wedding Planner | Dalem Nazim Abdelaziz</title>
        <meta
          name="description"
          content="Dalem Nazim Abdelaziz - Wedding Planner"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackButton />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#100000] to-[#050000] py-32 text-white">
        <div className="w-3/4">
          <div className="flex flex-row gap-x-16">
            <div className="pr-100 flex flex-col gap-y-2">
              <h3 className="text-md"> Case Study:</h3>
              <h1 className="text-5xl font-bold">Wedding Planner</h1>
            </div>
          </div>
          <div className="flex flex-col gap-8 xl:px-24">
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
                    href="https://www.figma.com/file/Fu6xGXOVwhxtckCdCm8pkL/Untitled?node-id=123%3A4467&t=xYU2MSGc9RMEcciX-1"
                    className="underline"
                  >
                    Click here
                  </Link>
                  &nbsp;to view high-fidelity{" "}
                  <span className="font-bold">mockups</span> for Wedding
                  Planner, or{" "}
                  <Link
                    target="_blank"
                    href="https://www.figma.com/proto/Fu6xGXOVwhxtckCdCm8pkL/Untitled?node-id=105%3A3660&scaling=min-zoom&page-id=105%3A3588&starting-point-node-id=105%3A3660"
                    className="underline"
                  >
                    here
                  </Link>
                  &nbsp;for high-fidelity{" "}
                  <span className="font-bold">prototypes</span>.<br />
                </div>
              </div>
            </div>
            {/* SECTION */}
            <div className="mt-8">
              <div className="flex w-full flex-row gap-x-16">
                <h2 className="mb-4 justify-self-start text-4xl font-bold">
                  Case study
                </h2>
              </div>
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
                  href="https://coursera-assessments.s3.amazonaws.com/assessments/1660908877082/602a2b58-18b5-4b4e-c683-5a16be390bb4/WeddingPlanner-caseStudy.pdf"
                  className="underline"
                >
                  Click here
                </Link>{" "}
                for case study.
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
