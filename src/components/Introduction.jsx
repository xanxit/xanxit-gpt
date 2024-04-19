const Introduction = () => {
  return (
    <div className="absolute top-20 flex flex-col items-center justify-center left-10 md:left-[400px] lg:left-[640px] 2xl:left-[850px]">
      <h1 className="text-2xl lg:text-4xl font-bold">Welcome to XanXiT GPT</h1>
      <p className="flex gap-x-2 text-lg max-w-2xl mt-4">
        <img
          src="https://static.cdnlogo.com/logos/c/38/ChatGPT.svg"
          className="h-7 w-auto"
          alt="ChatGPT Logo"
        />
        <span>How can I help you today?</span>
      </p>
    </div>
  );
};
export default Introduction;
