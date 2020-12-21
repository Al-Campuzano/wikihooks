import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function SearchResults(props) {
  
  return (
    <div className="search-result">
      {props.results.map((article, index) => (
        <div key={index}>
          <h3>{article.title} <a href={`https://en.wikipedia.org/wiki/${article.title}`} target="_blank">(wikipedia)</a></h3>
          <p>{ ReactHtmlParser(article.snippet) }</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
