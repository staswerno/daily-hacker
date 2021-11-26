import { useState, useEffect } from "react";
import './App.css';
import HackerContent from "./HackerContent";

function App() {
  const [newsItems, setNewsItems] = useState ([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const BASE_URL = "https://hn.algolia.com/api/v1/search?";

  useEffect((loadNews), []);

function loadNews(searchQuery) {
  const url = searchQuery
  ? `${BASE_URL}query=${searchQuery}`
  : `${BASE_URL}tags=front_page`;
  setIsError(false);
  setIsLoading(true);

  fetch(url)
  .then((response) => response.json())
  .then((json) => {
    setIsLoading(false);
    setNewsItems(json.hits);
  })
  .catch((err) => setIsError(true));
}


const reset = () => {
  setSearchQuery("");
  loadNews();
};

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    loadNews(searchQuery); 
  }
}

const getContent = () => {
  if (isError) {
    return <div>something went wrong :( try again later</div>;
}
  if (isLoading) {
  return (<div>be patient...</div>);
}  
  if (!newsItems.length) {
  return <div>no results, try something else</div>;
} 
  return <HackerContent newsItems={newsItems}/>
}

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
            onKeyPress={handleKeyPress}
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
            recent
          </button>
          </div>
        </div>
        <div className="HackerContentContainer">
        {getContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
