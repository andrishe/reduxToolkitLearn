import { useSelector, useDispatch } from "react-redux";

import { changeName } from "../redux/nameSlice";

const NameInput = () => {
  const name = useSelector((state) => state.name.value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(changeName(e.target.elements.name.value));
  };

  return (
    <div>
      <form onSubmit={handleChange}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>

      <p>{name}</p>
    </div>
  );
};

export default NameInput;
