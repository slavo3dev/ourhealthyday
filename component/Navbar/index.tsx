import React from "react";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <div className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center text-teal-800 hover:text-blue-500 transition-colors text-lg"
        >
          Sources
        </a>
      </div>
      <div className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center text-teal-800 hover:text-blue-500 transition-colors text-lg"
        >
          Blog
        </a>
      </div>
      <div className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center text-teal-800 hover:text-blue-500 transition-colors text-lg"
        >
          Account
        </a>
      </div>
      <div className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center text-teal-800 hover:text-blue-500 transition-colors text-lg"
        >
          Sign up
        </a>
      </div>
    </ul>
  );
}

export default function Navigation() {
  return (
    <nav className="mx-auto max-w-screen-xl px-6 py-3 bg-green-200 border-solid border-2 border-teal-800 rounded-full">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="mr-4 cursor-pointer py-1.5 text-teal-800 text-3xl">
          Our Healthy Day
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
      </div>
    </nav>
  );
}
