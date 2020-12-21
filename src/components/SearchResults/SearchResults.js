import React, { useState, useEffect } from "react";

const wikiApiUrl = 'https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=Nelson Mandela&format=json';

function SearchResults() {
  // const [title, setTitle] = useState(null);
  // const [snippet, setSnippet] = useState(null);
  const [results, setResults] = useState([]);


  useEffect(() => {
    fetch(wikiApiUrl)
      .then((response) => response.json())
      .then(data => {
        setResults(data.query.search);
      });


    // async function getData() {
    //   const response = await fetch(wikiApiUrl);
    //   const data = await response.json();
    //   setResults(data.query.search)
    // }
    // getData();
    // console.log(results);
  }, []);

  return (
    <div className="search-result">
      {results.map((article) => (
        <div>
          <h3>{article.title}</h3>
          <p>{article.snippet}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
