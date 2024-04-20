/* eslint-disable react/prop-types */
import { TypeAnimation } from "react-type-animation";
import { FaUserCircle } from "react-icons/fa";

const QnAPanel = ({ qnaPrompt }) => {
  return (
    <div className="mb-20 mt-20 p-4 flex md:mt-10 lg:ml-20">
      {qnaPrompt.map((ele, idx) => (
        <div className="mb-10" key={idx}>
          <div className="flex gap-x-4 items-center">
            <FaUserCircle className="h-8 w-auto" />
            <p className="text-lg">{ele.prompt}</p>
          </div>
          <div className="mt-10 max-w-md lg:max-w-5xl flex gap-x-4 items-start">
            <img
              src="https://static.cdnlogo.com/logos/c/38/ChatGPT.svg"
              className="h-8 w-auto"
              alt="ChatGPT Logo"
            />
            <p className="text-lg block">
              <TypeAnimation
                key={ele.prompt}
                speed={70}
                sequence={[`${ele.result}`, 1000]}
              />
            </p>
          </div>
        </div>
      ))}
      {/* <div className="fixed bottom-20 text-center hidden lg:flex flex-col justify-center gap-y-8 max-w-md lg:max-w-5xl 2xl:max-w-7xl mt-32 text-md md:text-xl font-bold">
        <img
          src="https://static.cdnlogo.com/logos/c/38/ChatGPT.svg"
          className="h-10 md:h-20 w-auto"
          alt="ChatGPT Logo"
        />
        The application at hand serves as a testing platform without any
        connection to OpenAI API. It functions exclusively for frontend
        purposes, devoid of any link to external databases or APIs for data
        retrieval.
      </div> */}
    </div>
  );
};
export default QnAPanel;
