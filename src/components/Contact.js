import React from "react";

const Contact = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-5 m-auto bg-white rounded-sm shadow-xl shadow-rose-600/40 ring-2 ring-orange-400 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center">
          Contact Us
        </h1>
        <form action="https://formspree.io/f/mvonlzzw" method="POST" className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Your name</span>
              <input
                type="text"
                name="name"
                className="

            w-full
            block px-6 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Name"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                className="
            block
            w-full
            mt-2 px-6 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Email"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span class="text-gray-700">Message</span>
              <textarea
                name="message"
                placeholder="Your Message ..."
                className="
            block
            w-full
            mt-2 px-6 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-orange-400
            focus:ring
            focus:ring-orange-400
            focus:ring-opacity-50
          "
                rows="5"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-orange-400
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-orange-500
          "
            >
              Submit
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
