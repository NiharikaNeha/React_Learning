import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-center justify-center"
      >
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Enter Your Name"
          className="px-3 py-2 rounded-lg text-xl font-semibold bg-amber-50 m-5"
        />
        <button className="px-3 py-2 rounded-lg bg-red-500 text-xl font-semibold text-white m-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
