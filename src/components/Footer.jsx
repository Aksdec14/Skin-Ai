import React from 'react';

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-100">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="SkinCheck"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-indigo-600"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M15 12H9" />
              <path d="M12 15V9" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              SkinCheck
            </span>
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Your trusted platform for skin health awareness, expert advice, and connecting with dermatologists.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              Empowering you with tools to monitor, learn, and consult on skin conditions for better self-care.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Resources</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/articles"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="/guidelines"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Guidelines
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/tools"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Skin Tools
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Community</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/forums"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Forums
                </a>
              </li>
              <li>
                <a
                  href="/support-groups"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Support Groups
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">For Professionals</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/doctors"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Find Doctors
                </a>
              </li>
              <li>
                <a
                  href="/consult"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Online Consultations
                </a>
              </li>
              <li>
                <a
                  href="/research"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Contact</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="mailto:support@skincheck.com"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  +91 12345 67890
                </a>
              </li>
              <li>
                <a
                  href="/locations"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Our Locations
                </a>
              </li>
              <li>
                <a
                  href="/feedback"
                  className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
                >
                  Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600">
          © 2025 SkinCheck. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <a
            href="https://twitter.com"
            className="text-gray-500 transition-colors duration-300 hover:text-indigo-600"
            aria-label="Twitter"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M24 4.557a9.834 9.834 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.379 4.482A13.933 13.933 0 0 1 1.671 3.149 4.917 4.917 0 0 0 3.195 9.723a4.903 4.903 0 0 1-2.228-.616v.062a4.916 4.916 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.085 4.917 4.917 0 0 0 4.588 3.417 9.867 9.867 0 0 1-6.102 2.105c-.396 0-.787-.023-1.175-.068A13.933 13.933 0 0 0 7.548 21c9.142 0 14.307-7.721 14.307-14.426 0-.22-.004-.439-.014-.657A10.22 10.22 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-500 transition-colors duration-300 hover:text-indigo-600"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10 C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            className="text-gray-500 transition-colors duration-300 hover:text-indigo-600"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,12c0-5.523-4.477-10-10-10S2,6.477,2,12c0,4.991,3.657,9.128,8.438,9.878v-6.987h-2.54v-2.89h2.54v-2.21 c0-2.507,1.492-3.89,3.777-3.89c1.094,0,2.238,0.195,2.238,0.195v2.46h-1.26c-1.243,0-1.63,0.772-1.63,1.562v1.884h2.773l-0.443,2.89 h-2.33v6.987C18.343,21.128,22,16.991,22,12z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
