import React from "react";
import { useSelector } from "react-redux";

const Greeting = () => {
  const { messages, isLoading } = useSelector((store) => store.messageStore); // Make sure the key matches the one used in the store configuration

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Messages</h1>
      <h2>{messages.message}</h2>
    </>
  );
};

export default Greeting;
