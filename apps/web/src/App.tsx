import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Download from "./pages/Download";

enum Page {
  HOME = "HOME",
  MAP = "MAP",
  DOWNLOAD = "DOWNLOAD",
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home />;
      case Page.MAP:
        return <Map />;
      case Page.DOWNLOAD:
        return <Download />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <nav className="navigation">
        <button
          className={currentPage === Page.HOME ? "active" : ""}
          onClick={() => setCurrentPage(Page.HOME)}
        >
          Home
        </button>
        <button
          className={currentPage === Page.MAP ? "active" : ""}
          onClick={() => setCurrentPage(Page.MAP)}
        >
          Map
        </button>
        <button
          className={currentPage === Page.DOWNLOAD ? "active" : ""}
          onClick={() => setCurrentPage(Page.DOWNLOAD)}
        >
          Download
        </button>
      </nav>
      <main className="content">{renderPage()}</main>
    </div>
  );
}

export default App;
