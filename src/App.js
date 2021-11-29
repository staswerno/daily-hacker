import { useState, useEffect } from "react";
import './App.css';
import HackerContent from "./HackerContent";

function App() {
  const [newsItems, setNewsItems] = useState ([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const BASE_URL = "https://hn.algolia.com/api/v1/search?";

  useEffect((loadNews), []);

function loadNews(searchQuery) {
  const url = searchQuery
  ? `${BASE_URL}query=${searchQuery}&hitsPerPage=8&page=${pageNumber}`
  : `${BASE_URL}tags=front_page&hitsPerPage=8&page=${pageNumber}`;
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
  setPageNumber(0);
  setSearchQuery("");
  loadNews();
};

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    setPageNumber(0);
    loadNews(searchQuery); 
  }
}

const nextPage = () => {
  const newPage = pageNumber + 1;
  setPageNumber(newPage);
  searchQuery ? loadNews(searchQuery) : loadNews();
}

const prevPage = () => {
  const newPage = pageNumber - 1;
  newPage ? setPageNumber(newPage) : setPageNumber(0);
  searchQuery ? loadNews(searchQuery) : loadNews();
}

console.log(pageNumber)

const getContent = () => {
  if (isError) {
    return <div className="ResponsePanels">something went wrong :( try again later</div>;
}
  if (isLoading) {
  return (<div className="ResponsePanels"><p>i am a tiny person trapped inside the internet who can only communicate through loading messages </p><p> please send for help!</p></div>);
}  
  if (!newsItems.length) {
  return <div className="ResponsePanels">no results, try something else</div>;
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
        <div className="PagContainer">
          <button onClick={prevPage}>prev</button>
          <button onClick={nextPage}>next</button>
        </div>
        </div>
      
      </main>
    </div>
  );
}

export default App;
