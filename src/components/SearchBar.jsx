/* eslint-disable react/prop-types */
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
const SearchBar = ({
  setChatHistory,
  recentPrompt,
  setRecentPrompt,
  handleSearch,
  handleEnter,
  setShowQnA,
  setQnAPrompt
}) => {
  return (
    <div
      style={{ background: "#1E2640" }}
      className="fixed bottom-0 md:left-64  left-0 right-0 py-3 px-4"
    >
      <input
        type="text"
        id="searchbar"
        value={recentPrompt}
        onChange={(e) => setRecentPrompt(e.target.value)}
        onKeyDown={handleEnter}
        placeholder="Search..."
        className="w-full h-10 px-3 text-white  rounded-md focus:outline-none"
        style={{ background: "#353C53" }}
      />
      <div
        onClick={() =>
          handleSearch(recentPrompt, setRecentPrompt, setChatHistory,setShowQnA,
            setQnAPrompt)
        }
        className="absolute bg-white p-1.5 cursor-pointer rounded right-6 bottom-[18px]"
      >
        <HiMiniArrowUturnLeft />
      </div>
    </div>
  );
};

export default SearchBar;
