import AllTheArticles from "./components/AllTheArticles";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>

      <AllTheArticles />
    </div>
  );
}

export default App;
