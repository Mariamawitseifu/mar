import Link from "next/link";
import Home from "@/app/page";
import Groupcards from "./Groupcards";
import Faqaccord from "@/app/Faqaccord/page";
import { ChevronRightIcon } from '@heroicons/react/solid';

export default function Footer(){

    return <>
<footer className="bg-dro_yellow dark:bg-gray-900">
<div className="mx-auto w-full max-w-screen-xl p-5 py-10 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
      <a href="/home" className="flex items-center">
      <img 
      src="/image/dro.png" 
      width={100} 
      height={100} 
      alt="droga logo"/>
      <div className="flex flex-col items-center">
    </div>
    </a>
    <div>
    <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">Follow Us</span>
    <div className="flex py-3 gap-2">
      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
              </svg>
            <span className="sr-only">Facebook page</span>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.25 20.25h-16.5v-16.5h16.5v16.5zm-8.25-14.25c-3.294 0-5.985 2.691-5.985 6 0 3.31 2.691 6 5.985 6s5.985-2.69 5.985-6c0-3.309-2.691-6-5.985-6zm-1.5 9h-2v-6h2v6zm-1.125-6.75c-.663 0-1.125-.54-1.125-1.125 0-.585.462-1.125 1.125-1.125s1.125.54 1.125 1.125c0 .585-.462 1.125-1.125 1.125zm7.125 6.75h-2v-3.375c0-.234-.186-.375-.375-.375s-.375.141-.375.375v3.375h-2.25v-6h2.25v.938c.64-.703 1.646-1.313 3-1.313 2.454 0 4.125 1.681 4.125 5.25v6z" />
          </svg>
          <span className="sr-only">LinkedIn account</span>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 0c6.628 0 12 5.372 12 12s-5.372 12-12 12S0 18.628 0 12 5.372 0 12 0zm5.657 7.343c.38.379.372.986-.015 1.363l-4.657 4.657 4.657 4.657c.387.378.395.986.015 1.364-.38.379-.987.387-1.364.015l-4.657-4.657-4.657 4.657c-.378.387-.986.395-1.364.015-.379-.38-.387-.987-.015-1.364l4.657-4.657-4.657-4.657c-.387-.378-.379-.986.015-1.364.38-.379.987-.387 1.364-.015l4.657 4.657 4.657-4.657c.378-.387.986-.395 1.364-.015.379.38.387.987.015 1.364l-4.657 4.657 4.657 4.657z" clip-rule="evenodd"/>
          </svg>
          <span className="sr-only">Twitter account</span>
        </a>
      </div>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
              <h2 className="py-3 text-sm font-semibold uppercase dark:text-white">Quick Links</h2>
              <ul className="text-xs font-medium">
              <div className="flex py-1 items-center">
    <ChevronRightIcon className="w-4 h-4 mr-1 text-gray-500" />
    <a href="/home" className="hover:underline">Home</a>
  </div>
                  <div className="flex py-1 items-center">
    <ChevronRightIcon className="w-4 h-4 mr-1 text-gray-500" />
    <a href="https://flowbite.com/" className="hover:underline">Services</a>
  </div>

  <div className="flex py-1 items-center">
    <ChevronRightIcon className="w-4 h-4 mr-1 text-gray-500" />
    <a href="https://flowbite.com/" className="hover:underline">Resources</a>
  </div>
  <div className="flex py-1 items-center">
    <ChevronRightIcon className="w-4 h-4 mr-1 text-gray-500" />
    <a href="https://flowbite.com/" className="hover:underline">Contact Us</a>
  </div>
              </ul>
          </div>
          <div>
              <h2 className=" py-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Droga Groups</h2>
              <ul className="font-medium text-xs">
              <div className="flex py-1 items-center">
    <ChevronRightIcon className="w-4 h-4 mr-1 text-gray-500" />
    <a href="https://flowbite.com/" className="hover:underline">Droga Pharma PLC</a>
  </div>
  <div className="flex py-1 items-center">
    <ChevronRightIcon className="w-4 h-4 mr-1 text-gray-500" />
    <a href="https://flowbite.com/" className="hover:underline">Ema Ethiopia PLC </a>
  </div>
  <div className="flex py-1 items-center">
    <ChevronRightIcon className="w-4 h-4 mr-1 text-gray-500" />
    <a href="https://flowbite.com/" className="hover:underline">Droga Physiotherapy</a>
  </div>
  <div className="flex py-1 items-center">
    <ChevronRightIcon className="w-4 h-4 mr-1 text-gray-500" />
    <a href="https://flowbite.com/" className="hover:underline">Droga Pharmacy</a>
  </div>
              </ul>
          </div>
          <div>
              <h2 className="py-3 text-sm font-semibold uppercase">Support</h2>
              <ul className="font-medium text-xs">
              <div className="flex py-1 items-center">
    <ChevronRightIcon className="w-4 h-4 mr-1 text-gray-500" />
    <a href="https://flowbite.com/" className="hover:underline">Tel +2511 90 804 8404</a>
  </div>
  <div className="flex py-1 items-center">
    <ChevronRightIcon className="w-4 h-4 mr-1 text-gray-500" />
    <a href="https://flowbite.com/" className="hover:underline">Phone +251 90 804 8404</a>
  </div>
  <div className="flex py-1 items-center">
    <ChevronRightIcon className="w-4 h-4 mr-1 text-gray-500" />
    <a href="https://flowbite.com/" className="hover:underline">Email: helpdesk@drogapharma.com</a>
  </div>
  <div className="flex py-1 items-center">
    <ChevronRightIcon className="w-4 h-4 mr-1 text-gray-500" />
    <a href="https://flowbite.com/" className="hover:underline">View Knowledge Base</a>
  </div>
              </ul>
          </div>
      </div>
  </div>
</div>
</footer>
         </>
}