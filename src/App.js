import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [newsItems, setNewsItems] = useState ([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const BASE_URL = "https://hn.algolia.com/api/v1/search?";

  useEffect((loadNews), []);

function loadNews(searchQuery) {
  const url = searchQuery
  ? `${BASE_URL}query=${searchQuery}`
  : `${BASE_URL}tags=front_page`;
  setIsLoading(true);

  fetch(url)
  .then((response) => response.json())
  .then((json) => {
    setIsLoading(false);
    setNewsItems(json.hits);
  })
  .catch(() => console.log("request failed"));
}


const reset = () => {
  setSearchQuery("");
  loadNews();
};
{/* 
const noResults = () => {

  if (!newsItems.length) {
    return <div>no result, try something else</div>;
  }
}
*/}
console.log(searchQuery)



  return (
    <div className="App">
      <header className="App-header">
        <h1>
            the daily hacker
        </h1>
      </header>
      <main>
        <div className="SearchContainer">
          <div className="SearchItem">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="SearchInput"
            name="search"
            placeholder="search the daily hacker..."
          />
          </div>
          <div className="SearchItem">
          <button className="SearchButton"
          onClick={() => loadNews(searchQuery)}
          >
            search
          </button>
          </div>
          <div className="SearchItem">
          <button className="ResetButton"
          onClick={reset}>
            most recent
          </button>
          </div>
        </div>
        <div className="HackerContentContainer">
        {isLoading ? (<div>be patient...</div>) : (
        newsItems.map(({ title, url, author, created_at }) => (
          <div className="HackerContent">
        <div className="NewsTitle"><a href={url}>{title}</a></div>
        <div className="NewsAuthor">written by {author} on {created_at.substr(0, 10)}</div>
            </div>
        ))
      )}
    {/*  {noResults()}   */}
        </div>
      </main>
    </div>
  );
}

export default App;
