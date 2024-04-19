import { useEffect, useState } from "react";
import SideBar from "./components/sidebar";
import SearchBar from "./components/SearchBar";
import SuggestionCards from "./components/SuggestionCards";
import Introduction from "./components/Introduction";
import unStructuredData from "./data/UnStructuredData";
import handleSearch from "./composables/HandleSearch";
import QnAPanel from "./components/QnAPanel";

function App() {
  // const [count, setCount] = useState(0);
  const [chatHistory, setChatHistory] = useState(unStructuredData);
  const [structuredChatHistory, setStructuredChatHistory] = useState({
    Today: [],
    Yesterday: [],
    "Last Week": [],
    "Older Chats": [],
  });
  const [recentPrompt, setRecentPrompt] = useState("");
  const [showQnA, setShowQnA] = useState(false);
  const [qnaPrompt, setQnAPrompt] = useState([]);
  useEffect(() => {
    const currentDate = new Date().getDate();
    const updatedChatHistory = {
      Today: [],
      Yesterday: [],
      "Last Week": [],
      "Older Chats": [],
    };

    chatHistory.forEach((ele) => {
      const messageDate = new Date(ele.date).getDate();
      if (currentDate - messageDate === 0) {
        updatedChatHistory["Today"].push(ele);
      } else if (currentDate - messageDate === 1) {
        updatedChatHistory["Yesterday"].push(ele);
      } else if (currentDate - messageDate <= 7) {
        updatedChatHistory["Last Week"].push(ele);
      } else {
        updatedChatHistory["Older Chats"].push(ele);
      }
    });

    setStructuredChatHistory(updatedChatHistory);
  }, [chatHistory]); // Added chatHistory to the dependency array

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch(
        recentPrompt,
        setRecentPrompt,
        setChatHistory,
        setShowQnA,
        setQnAPrompt
      );
    }
  };
  console.log(qnaPrompt);

  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="w-min md:w-64">
          <SideBar
            structuredChatHistory={structuredChatHistory}
            setQnAPrompt={setQnAPrompt}
            setShowQnA={setShowQnA}
          />
        </div>
        {!showQnA ? (
          <div>
            <Introduction />
            <SuggestionCards
              setQnAPrompt={setQnAPrompt}
              setShowQnA={setShowQnA}
              setRecentPrompt={setRecentPrompt}
              setChatHistory={setChatHistory}
              handleSearch={handleSearch}
            />
          </div>
        ) : (
          <QnAPanel qnaPrompt={qnaPrompt} />
        )}
        <SearchBar
          setChatHistory={setChatHistory}
          recentPrompt={recentPrompt}
          setRecentPrompt={setRecentPrompt}
          handleSearch={handleSearch}
          handleEnter={handleEnter}
          setShowQnA={setShowQnA}
          setQnAPrompt={setQnAPrompt}
        />
      </div>
    </>
  );
}

export default App;
