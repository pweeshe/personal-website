import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "../utils/api";
import Image from "next/image";
import cn from "classnames";
import GradientCard from "../components/GradientCard";
import ContactMe from "../components/ContactMe";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dalem Nazim Abdelaziz</title>
        <meta
          name="description"
          content="Dalem Nazim Abdelaziz personal website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000010] to-[#000000] p-16 text-white">
        <div>
          <div className="mb-4 block md:hidden">
            <Image
              src="/my-pic.jpg"
              alt="my picture"
              className="rounded-full"
              width={128}
              height={128}
            />
          </div>
          <div className="flex flex-row justify-between gap-x-16">
            <div className="pr-100 flex flex-col gap-y-2">
              <h1 className="text-5xl font-bold">Dalem Nazim Abdelaziz</h1>
              <div className="flex flex-col">
                <span>
                  Software engineer at{" "}
                  <span className="font-bold">Lasting Dynamics</span>.
                </span>
                <span>
                  UI/UX enthusiast 🥳 -
                  <Link
                    href="https://www.behance.net/ede5e"
                    className="underline"
                    target="_blank"
                  >
                    Find additional visual works on Behance!
                  </Link>
                </span>

                {/* <p className="text-gray-600 mb-16">
                Developing with a Madchester beat.
              </p> */}
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/my-pic.jpg"
                alt="my picture"
                className="rounded-full"
                width={128}
                height={128}
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="width-1500 flex w-full flex-row gap-x-16">
              <h2 className="justify-self-start text-4xl font-bold">
                Featured Works
              </h2>
            </div>
            <div className="mt-8 flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
              <GradientCard
                gradient="from-[#8888] to-[#6666] hover:from-[#eeee] hover:to-[#8888]"
                title="Feed Background"
                href="/feed-background"
                desc="Content creation social platform"
              />
              <GradientCard
                gradient="from-[#0F6393] to-[#65163C] hover:from-[#E9FEFF] hover:to-[#FF6CB3]" //65163C
                title="Wedding Planner"
                href="/wedding-planner"
                desc="A planner app for managing wedding events"
              />
              <GradientCard
                gradient="from-[#1D190A] to-[#1D190A] hover:from-[#B80454] hover:to-[#B175FF]" //1D190A 1D190A B175FF B80454
                title="Musicwand"
                href="/music-wand"
                desc="Music for advertising, marketing and film"
              />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-900 dark:text-gray-100 text-lg font-bold md:text-xl">
              Contact me
            </p>
            <p className="text-gray-800 dark:text-gray-200 my-1">
              Get in touch to hire me on your next project or just to say hi 👋
              at <span className="font-bold">aziznazim96@gmail.com</span>.
            </p>
            {/* <ContactMe /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
