import { useRef } from "react";

import useInput from "./hooks/useInput";
import useTabs from "./hooks/useTabs";
import useTitle from "./hooks/useTitle";
import useClick from "./hooks/useClick";
import useConfirm from "./hooks/useConfirm";
import usePreventLeave from "./hooks/usePreventLeave";
import useBeforeLeave from "./hooks/useBeforeLeave";
import useFadeIn from "./hooks/useFadeIn";
import useNetwork from "./hooks/useNetwork";

const contents = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

function App() {
  const maxLen = (value) => value.length <= 10; // validator function
  const inputObj = useInput("picpal", maxLen);

  const { currentItem, changeItem } = useTabs(0, contents);

  const titleUpdator = useTitle("Loading...");

  /* useTitle example
   * 브라우저 상단 탭의 title명 변경
   */
  setTimeout(() => titleUpdator("Home"), 500);

  // useClick
  const titleClick = (event) => {
    console.log(event.target);
    console.log(title.current);
  };
  const inputItemClick = () => {
    console.log();
  };
  const title = useClick(titleClick);
  const inputItem = useClick(inputItemClick);

  // useConfirm
  const deleteConfirm = () => {
    console.log("delete confirm");
  };
  const rejection = () => {
    console.log("rejection confirm");
  };

  const confirmDelete = useConfirm(
    "삭제 하시겠습니까?",
    deleteConfirm,
    rejection
  );

  // usePreventLeave
  const { protect, unprotect } = usePreventLeave();

  // useBeforeLeave
  const begForLife = () => console.log("마우스가 벗어났어요.");
  useBeforeLeave(begForLife);

  // useFadeIn
  const fadeInH1 = useFadeIn(5, 1);
  const fadeInP = useFadeIn(8, 2);

  // useNetwork
  const handleNetworkChange = (online) => {
    console.log(online ? "A" : "B");
  };
  
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div className="App">
      {/* useInput example */}
      <div>
        <input type="text" placeholder="Name" {...inputObj} />
      </div>

      {/* useTabs example */}
      <div style={{ marginTop: "20px" }}>
        {contents.map((section, index) => (
          <button key={index} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
        <div>{currentItem.content}</div>
      </div>

      {/* useClick example */}
      <div style={{ marginTop: "20px" }}>
        <h2 ref={title}>Title</h2>
        <input ref={inputItem} type="text" placeholder="input.." />
      </div>

      {/* useConfirm example */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={confirmDelete}>Delete Confirm</button>
      </div>

      {/* useConfirm example */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={protect}>Protect</button>
        <button onClick={unprotect}>UnProtect</button>
      </div>

      {/* useFadeIn example */}
      <div style={{ marginTop: "20px" }}>
        <h1 {...fadeInH1}>FadeInHead1</h1>
        <p {...fadeInP}>Lorem</p>
      </div>

      {/* useFadeIn example */}
      <div style={{ marginTop: "20px" }}>
        <h1>{onLine ? "Online" : "Offline"}</h1>
      </div>
    </div>
  );
}

export default App;
