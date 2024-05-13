import "./App.css";
import Counter from "./component/Counter";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { randomColor } from "./redux/colorSlice";
import NameInput from "./component/NameInput";

function App() {
  const color = useSelector((state) => state.color.value);
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector("body").style.backgroundColor = color;
  }, [color]);
  return (
    <>
      <div>
        <h1>Redux Toolkit</h1>
        <button
          onClick={() => {
            dispatch(randomColor());
          }}
        >
          Change Color
        </button>
        <Counter />
        <NameInput />
      </div>
    </>
  );
}

export default App;
