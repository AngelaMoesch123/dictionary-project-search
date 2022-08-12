import Book from "./Book.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={Book} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="text-center">
          <small>
            This project was created by Angela Moesch and is{" "}
            <a
              href="https://github.com/AngelaMoesch123/dictionary-project-search"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
            , and hosted on{" "}
            <a
              href="https://adorable-pasca-0b0796.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
