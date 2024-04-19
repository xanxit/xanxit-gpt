/* eslint-disable react/prop-types */
import suggestionCards from "../data/SuggestionCardData";
const SuggestionCards = ({
  setQnAPrompt,
  setShowQnA,
  setRecentPrompt,
  setChatHistory,
  handleSearch,
}) => {
  return (
    <div className="hidden lg:block absolute bottom-24 left-1/3">
      <div className="grid grid-cols-2 gap-6">
        {suggestionCards.map((ele, idx) => (
          <div
            key={idx}
            className="border border-[#1E2640] cursor-pointer hover:bg-gray-50 py-4 pr-8 pl-4  flex flex-col gap-1 rounded"
            onClick={() => {
              handleSearch(
                ele.prompt,
                setRecentPrompt,
                setChatHistory,
                setShowQnA,
                setQnAPrompt,
                ele.result
              );
            }}
          >
            <h1 className="text-xl text-gray-700 max-w-xs">{ele.prompt}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SuggestionCards;
