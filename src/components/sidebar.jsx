/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

const SideBar = ({ structuredChatHistory, setQnAPrompt, setShowQnA }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <button
        onClick={() => toggleNav()}
        type="button"
        className="inline-flex items-center z-10 p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none md:hidden focus:ring-2 focus:ring-gray-200"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 w-3/4 md:w-64 h-screen transition-transform text-white ease-in-out duration-300 md:block ${
          showNav ? "block" : "hidden"
        }`}
      >
        <div
          className="h-full px-3 py-4 flex flex-col overflow-y-auto"
          style={{ background: "#1E2640" }}
        >
          <button
            className="md:hidden absolute -right-10 bg-gray-500 rounded-full p-4 h-8 w-8 flex items-center justify-center font-bold"
            onClick={() => toggleNav()}
          >
            {" "}
            X{" "}
          </button>
          <button className="flex items-center gap-x-3 px-1 mb-5 p-2 border border-gray-600 rounded-md">
            <div className="relative">
              <span className="inline-block ml-2 mt-[5px] ">
                <BsPlusLg fontStyle={""} />
              </span>
            </div>
            <div
              className="self-center flex flex-col gap-1"
              onClick={() => {
                console.log("clicked");
                setTimeout(
                  () => document.getElementById("searchbar").focus(),
                  100
                );
              }}
            >
              <p className="text-base">New Chat</p>
            </div>
          </button>
          <div className="p-2 lg:-mt-4">
            {Object.entries(structuredChatHistory || {}).map(([key, value]) => (
              <div className="flex flex-col py-2" key={key}>
                <h1 className="text-md text-white mb-2">{`${key}`}</h1>
                {value.map((ele, idx) => (
                  <p
                    onClick={() => {
                      setQnAPrompt((prev) => [...prev, ele]);
                      setShowQnA(true);
                    }}
                    key={idx}
                    className="text-sm mb-2 px-2 line-clamp-1 cursor-pointer hover:border hover:border-gray-50 hover:bg-gray-50 hover:opacity-60 hover:text-black hover:rounded min-h-max"
                  >
                    {ele.prompt}
                  </p>
                ))}
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center items-end mt-40">
            <div
              className="bottom-0 fixed w-52 h-16 rounded my-2 p-4 mx-2 flex flex-row gap-x-4 items-center"
              style={{ background: "#353C53" }}
            >
              <img
                src="https://static.cdnlogo.com/logos/c/38/ChatGPT.svg"
                className="h-10 w-auto"
                alt="ChatGPT Logo"
              />
              <div className="flex flex-col gap-y-1">
                <p style={{ fontSize: "13px" }} className="text-gray-200">
                  GPT-TEST
                </p>
                <p
                  style={{ fontSize: "16px" }}
                  className="font-semibold text-gray-100"
                >
                  v1
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </aside>
    </>
  );
};

export default SideBar;
