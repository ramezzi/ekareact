import { useState, useEffect } from "react";

const useLoginForm = (callback) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (name, text) => {
    setInputs((inputs) => {
      return {
        ...inputs,
        [name]: text,
      };
    });
  };
  return {
    handleInputChange,
    inputs,
  };
};

export default useLoginForm;
