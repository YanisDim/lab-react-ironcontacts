import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [stars, updateStars] = useState(contacts.slice(0, 5));

  const handleSort = () => {
    let clonedStars = JSON.parse(JSON.stringify(stars));
    clonedStars.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    updateStars(clonedStars);
  };

  const handleSortByPop = () => {
    let clonedStars = JSON.parse(JSON.stringify(stars));
    clonedStars.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (a.popularity < b.popularity) {
        return 1;
      } else {
        return 0;
      }
    });
    updateStars(clonedStars);
  };

  const handleAdd = () => {
    let randomIndex = Math.floor(Math.random() * contacts.length);
    let elem = contacts[randomIndex];

    updateStars([elem, ...stars]);
  };

  const handleDelete = (someId) => {
    
    let filteredStars = stars.filter((singleStar) => {
      
      return stars.indexOf(singleStar) !== someId;
    });
    updateStars(filteredStars);
  };

  return (
    <div className="App">
      <button onClick={handleSortByPop}>Sort by popularity</button>
      <button onClick={handleSort}>Sort by name</button>
      <button onClick={handleAdd}>add</button>
      {stars.map((e, i) => {
        return (
          <ul key={i}>
            <li>
              <img src={e.pictureUrl} width="20%" /> {e.name} {e.popularity}
            </li>
            <button
              onClick={() => {
                handleDelete(i);
              }}
            >
              Delete
            </button>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
