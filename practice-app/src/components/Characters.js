import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const Characters = props => {
  const [searchChar, setSearchChar] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("http://hp-api.herokuapp.com/api/characters").then(response => {
      const char = response.data.filter(character => {
        return character.name.toLowerCase().includes(query.toLowerCase());
      });
      setSearchChar(char);
    });
  }, [query]);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleChange}
          value={query}
          name="name"
          placeholder="Search for Characters"
          autoComplete="off"
        />
      </form>
      <div>
        {searchChar.map(info => {
          return (
            <CharacterCard
              key={info.name}
              name={info.name}
              house={info.house}
              core={info.wand.core}
              patronus={info.patronus}
              image={info.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
