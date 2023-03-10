import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Navbar from "./Components/navbar/Navbar"
function App() {
  return (
    <div className="Main">
      <div className="Navbar">
          <Navbar></Navbar>
      </div>
      <div className="Body">
          <Body></Body>
      </div>
      <div className="Footer">
          <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
