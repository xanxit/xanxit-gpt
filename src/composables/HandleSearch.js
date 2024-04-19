const handleSearch = (
  prompt,
  setPrompt,
  setChatHistory,
  setShowQnA,
  setQnAPrompt,
  result
) => {
  const options = {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const todaysDate = new Date()
    .toLocaleDateString("en-IN", options)
    .split("/")
    .reverse()
    .join("-")
    .slice(0, 10);
  let newObj = {
    prompt: prompt,
    result: `${
      result ||
      "While the application provides a simulated environment for testing frontend components, it does not possess the capacity to furnish accurate answers akin to those provided by APIs integrated with comprehensive datasets. Thus, users engaging with this test app should approach it with an understanding of its purpose, acknowledging its limitations, and focusing on frontend evaluations rather than seeking precise data-driven responses."
    }`,
    date: todaysDate,
  };
  setChatHistory((prev) => [...prev, newObj]);
  setPrompt("");
  setShowQnA((prev) => !prev);
  setQnAPrompt(newObj);
};

export default handleSearch;
