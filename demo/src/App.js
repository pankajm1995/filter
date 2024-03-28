import React, { useState } from "react";

import "./App.css";

function App() {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    "kiwi",
    "graps",
    "Strawberry",
    "Blueberry",
    "Raspberry",
    "Blackcurrant",
    "Cherry",
    "Plum",
    "peach",
    "pinepollen",
    "Polypore Mushroom",
    "Amanita muscaria",
    "Hepaticaria cyclopira",
    "Tricholoma foetidum",
    "Galerina marginata",
    "Coprinus comatus",
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {

    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div className="App">
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
    </div>
  );
}

export default App;