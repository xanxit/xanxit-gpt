# Xanxit GPT

This is a frontend web app at hand serves as a testing platform without any connection to OpenAI API. It functions exclusively for frontend purposes, devoid of any link to external databases or APIs for data retrieval.

## System Design

- ### Requirement Gathering

This app needs to look and feel exactly like chat GPT, provided we have all the APIs available in accordance with the frontend needs.

  - #### System Components
  
  This web app consists of 3 major component structures:
  1. Input Field: All the prompts for the GPT will be taken from this search bar at the bottom.

  2. Chat History: It would include all the conversational history of a user, which is further segregated into today, yesterday, last week and older chats.

  3. QnA Panel: This is the main question and answer screen facilitating the whole prompt engineering experience in a chained conversational manner.

  - #### Further Breakdown of the Components

  1. ##### Input Field: 
    - When a user types a prompt in the input field and presses enter, ideally it should call a POST API to the backend server, which would then give a response back to the given prompt.

    - But Since this is an FE-only application, the action after pressing enter slightly changes, as when pressed it would show the QnAPanel to give a chained prompt and result screen.

    - At the same time, the prompt also gets added to the chat history in today's sub-category of the chat history
  
  2. ##### Chat History:

    - In ideal case when the app should mount, it should fetch the chat history from a GET API from the backend server.

    - But here, we fetch dummy data stored in `src/data/UnStructuredData.js` when the app mounts and sort it for mapping purposes.
    
    - Then we make an object with different keys depicting the recentness of the chat, and push the prompt and result to their respective keys. We filter the prompts using `date` parameter.

    Piece of code for populating the object.
    ```
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
    
    ```
    - We also provide a search-on-click feature, when someone clicks on the chat history prompts, it gives back the prompt and their result on the QnA Panel, and one can also search other stuff under the same prompt.


  3. #### QnAPanel:

    - When searched or clicked on a prompt from chat history, the screen that shows the conversation between the AI and the user is depicted in this panel.

    - We have used an array of qnAPrompts to facilitate the chaining of prompts conversationally to give a pretty good look and feel of chat GPT.

  ### Component System Design (FigJam)

  Here I have created a component connection system design on figjam, please feel free to have a look:
  https://www.figma.com/file/hgRlDZbzEMJkjvldpcqY0W/Xanxit-GPT-System-Design?type=whiteboard&node-id=0%3A1&t=Tev3XVPSd1geXcBZ-1

- ### Scalability

  This app is not scalable enough right now but can be made scalable using certain parameters.

  1. Authorization and authentication: We can authenticate and authorize different users when trying to access data so that their data can be distinct.
  
  2. Less re-rendering: We have already optimized a lot using useEffect and other react hooks in an optimized manner but we can use other hooks like useMemo and useCallback for memoized (cached) data and limit the functional re-render once API is connected.

  3. Component-state management: We need to find a suitable component-state management system following the depth of the application. If needed to maintain a global state, we can use redux to facilitate global state management, or context API in terms of the scope of the app. We can even persist the state on refresh to enhance scalability.

  4. Performance measuring: We need to find proper ways to measure the performance via First contentful paint, Speed index, Time to interact metrics.

- ### Maintainability

  1. Use a consistent coding style: By using a consistent coding style, you can improve the readability, quality, and collaboration of your code. You can use tools like ESLint, Prettier, or Stylelint to enforce and automate your coding style.

  2. Organize your files and folders: A good file and folder structure can help you find, reuse, and update your code easily. 

  3. Adopt a component-based architecture: A component-based architecture is a design pattern that divides your front-end code into reusable and isolated units called components. Components can have their own state, logic, and presentation, and can communicate with each other through props and events.  By adopting a component-based architecture, you can scale your front-end code by composing complex interfaces from simple components.

  4. Write unit tests and integration tests: Testing is an essential practice for ensuring the quality and reliability of your front-end code. Testing can help you detect and prevent bugs, refactor and improve your code, and document your functionality.

