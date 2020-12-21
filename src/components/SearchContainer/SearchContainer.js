import React, { useRef, useState, useEffect } from "react";
import SearchResults from '../SearchResults/SearchResults';

const wikiApiUrl = 'https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=';

const SearchContainer = () => {

  const [results, setResults] = useState([]);
  const getData = (query) => {
    fetch(wikiApiUrl+query)
      .then((response) => response.json())
      .then(data => {
        console.log("Got something");
        if (data.query) { setResults(data.query.search); }
      });
  };

  useEffect(() => {
    getData("");
  }, []);

  const inputEl = useRef(null);
  const searchClick = () => {
    getData(inputEl.current.value);
  };

  return(
    <div>
      <input ref={inputEl} type="text" placeholder="Search Wikipedia"></input>
      <button type="button" onClick={searchClick}>Search</button>
      <SearchResults results={results}/>
    </div>
  );
};

export default SearchContainer;
