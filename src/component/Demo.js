import React from "react";

import { useState } from "react";

const Demo = () => {
  const [name, setName] = useState({
    country: "Bangladesh",
  });

  const changeName = () => {
    setName({ country: "India" });
  };

  return (
    <div>
      <p>{name.country}</p>
      {/* <button
        onClick={() =>
          setName({
            country: "America",
          })
        }
      ></button> */}
      <button onClick={changeName}>Change</button>
    </div>
  );
};

export default Demo;
