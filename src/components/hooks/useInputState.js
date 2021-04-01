import { useState } from "react";
import moment from "moment";
// eslint-disable-next-line import/no-anonymous-default-export
export default (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
