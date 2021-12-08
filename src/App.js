import { useState, useEffect } from "react";
import "./App.css";
import HackerContent from "./HackerContent";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const BASE_URL = "https://hn.algolia.com/api/v1/search?";

  useEffect(loadNews, [pageNumber, searchQuery]);

  function loadNews() {
    const url = searchQuery
      ? `${BASE_URL}query=${searchQuery}&hitsPerPage=5&page=${pageNumber}`
      : `${BASE_URL}tags=front_page&hitsPerPage=5&page=${pageNumber}`;
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPageNumber(0);
    setSearchQuery(e.target.search.value);
  };

  const nextPage = () => {
    const newPage = pageNumber + 1;
    setPageNumber(newPage);
    //  searchQuery ? loadNews(searchQuery) : loadNews();
  };

  const prevPage = () => {
    const newPage = pageNumber - 1;
    setPageNumber(newPage);
    //  searchQuery ? loadNews(searchQuery) : loadNews();
  };

  console.log(pageNumber);

  const getContent = () => {
    if (isError) {
      return (
        <div className="ResponsePanels">the api fell asleep, try a refresh</div>
      );
    }
    if (isLoading) {
      return (
        <div className="ResponsePanels">
          <p>loading</p>
          <p>pop the kettle on</p>
        </div>
      );
    }
    if (!newsItems.length) {
      return (
        <div className="ResponsePanels">no results, try something else</div>
      );
    }
    return <HackerContent newsItems={newsItems} />;
  };

  console.log(searchQuery);

  return (
    <div className="App">
      <header className="App-header">
        <h1>the daily hacker</h1>
      </header>
      <main>
        <div className="SearchContainer">
          <div className="SearchItem">
            <form onSubmit={handleSubmit}>
              <input
                className="SearchInput"
                name="search"
                placeholder="search the daily hacker..."
              />

              <button className="SearchButton SearchItem">search</button>
            </form>
          </div>

          <div className="SearchItem">
            <button className="ResetButton" onClick={reset}>
              recent
            </button>
          </div>
        </div>
        <div className="HackerContentContainer">
          {getContent()}
          <div className="PagContainer">
            <button onClick={prevPage} disabled={pageNumber === 0}>
              prev
            </button>
            <button onClick={nextPage}>next</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
