import React from "react";

const ContactPage = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-40 lg:mt-48 px-14 gap-5 flex flex-col justify-center items-center">
      <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
        <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
          Got a Idea? We've got the skills.{" "}
          <span className="bg-gradient-to-b from-[#f14a9d] via-[#125bfa] to-[#7ab2f3] text-transparent bg-clip-text font-bold">
            Let's team up
          </span>
        </h1>
        <p className="text-md">
          Tell us more about yourself and what you're got in mind.
        </p>

        <form className="flex flex-col gap-7 mt-4">
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="firstname" className="lable-style">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter first name"
                className="shadow-md px-4 py-1 border-2 border-gray-200 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="lastname" className="lable-style">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter last name"
                className="shadow-md px-4 py-1 border-2 border-gray-200 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="lable-style">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              className="shadow-md px-4 py-1 border-2 border-gray-200 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="lable-style">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={7}
              placeholder="Enter your message here"
              className="shadow-md px-4 py-1 border-2 border-gray-200 rounded-md "
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-md bg-blue-400 px-6 py-3 text-center text-[13px] font-bold text-white  hover:shadow-none  disabled:bg-gray-400 sm:text-[16px] "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
