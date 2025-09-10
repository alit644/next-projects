import React from "react";
import { Button } from "./ui/button";
import { ListTodo } from "lucide-react";
import { ModeToggle } from "./Mode-toggle";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-black  w-full border-b border-input">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* logo */}
          <div>
           <Link href="/">
            <ListTodo className="size-10 text-indigo-500"/>
           </Link>
          </div>
          <div className="flex md:order-2 space-x-3  rtl:space-x-reverse">
            <Button variant="outline">Login</Button>
            <ModeToggle />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            {/* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white  rounded-sm md:bg-transparent "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-300  rounded-sm md:bg-transparent "
                  aria-current="page"
                >
                  About
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
