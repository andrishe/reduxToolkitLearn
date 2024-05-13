import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="value">
        <span>{count}</span>
      </div>
      <button onClick={() => dispatch(increment())}>Incremented</button>
      <button onClick={() => dispatch(decrement())}>Decremented</button>
    </div>
  );
};

export default Counter;
