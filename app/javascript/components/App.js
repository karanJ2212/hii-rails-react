import "../redux/store";
import React from "react";
import Greetings from "./Greetings";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMessages } from "../redux/messages/messagesSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);
  return (
    <div>
      <Greetings />
    </div>
  );
};

export default App;
