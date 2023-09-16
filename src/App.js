import Main from "./component/body/Main";
import Navbar from "./component/header/Navbar";

function App() {
  return (
    <>
      <div className="header sticky-top">
        <Navbar />
      </div>
      <div className="main">
        <Main />
      </div>
    </>
  );
}

export default App;
