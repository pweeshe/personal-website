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
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Musicwand | Dalem Nazim Abdelaziz</title>
        <meta name="description" content="Dalem Nazim Abdelaziz - Musicwand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/home">
        <div className="fixed left-24 top-12 flex items-center gap-2 rounded-xl bg-white-half px-4 py-2 font-medium hover:fill-white hover:text-white">
          <BackArrowIcon />
          Back home
        </div>
      </Link>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000010] to-[#000000] py-32 text-white">
        <div className="w-3/4">
          <div className="flex flex-row gap-x-16">
            <div className="pr-100 flex flex-col gap-y-2">
              <h3 className="text-md"> Case Study:</h3>
              <h1 className="text-5xl font-bold">Musicwand</h1>
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
                    href="https://coursera-assessments.s3.amazonaws.com/assessments/1663924058431/2db75103-5e17-4ef2-8223-9f2ca1974fa8/Music%20site.pdf"
                    className="underline"
                  >
                    Click here
                  </Link>
                  &nbsp;to view high-fidelity{" "}
                  <span className="font-bold">mockups</span> for Musicwand, or{" "}
                  <Link
                    target="_blank"
                    href="https://www.figma.com/proto/KdhOpoTStTrSRSGCRk6pdK/Music-wand?node-id=13%3A40&scaling=min-zoom&page-id=13%3A39&starting-point-node-id=33%3A1536&hide-ui=1"
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
                  href="https://coursera-assessments.s3.amazonaws.com/assessments/1671368961517/348135ad-a000-468d-bc14-d9b6841825d4/feedbg%20case%20study.pdf"
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
