import { useState, useRef } from "react";

const LoadingSpinner = () => <></>;
export default function ContactMe() {
  return (
    <div className="border-blue-200 dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque my-4 w-full rounded border p-6">
      <p className="text-gray-900 dark:text-gray-100 text-lg font-bold md:text-xl">
        Contact me
      </p>
      <p className="text-gray-800 dark:text-gray-200 my-1">
        Get in touch to hire me on your next project or just to say hi 👋.
      </p>
      <form className="relative my-4" onSubmit={() => {}}>
        <input
          //   ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="tim@apple.com"
          type="email"
          autoComplete="email"
          required
          className="focus:ring-blue-500 focus:border-blue-500 border-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 mt-1 block w-full rounded-md bg-white px-4 py-2 pr-32"
        />
        <button
          className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 absolute right-1 top-1 flex h-8 w-28 items-center justify-center rounded px-4 pt-1 font-medium"
          type="submit"
        >
          {true ? <LoadingSpinner /> : "Send"}
        </button>
      </form>
    </div>
  );
}
