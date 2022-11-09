import './App.css';
import { Header } from './Components/Header';
import { Query } from './Components/Query';
import { Footer } from "./Components/Footer";

function App() {

  return (
    <>
      <Header title="Tafsir" />
      <Query />
      <Footer />
    </>
  );
}

export default App;