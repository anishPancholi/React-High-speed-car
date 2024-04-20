import { useState } from "react";
import Tours from "./components/Tours";
import Refresh from "./components/Refresh";
import data from "./data"
import './App.css'
function App(){

  const[tour,setTour] = useState(data)

  const handleItemClick = (itemId) => {
    const updatedTours = tour.filter(item => item.id !== itemId);
    setTour(updatedTours);

  };

  const element = tour.length ?
                  <div className="App">
                  <h1 className="App-header">High-Speed Cars</h1>
                  <Tours data={tour} handleItemClick={handleItemClick}></Tours>
                </div> :
                <Refresh></Refresh>;


  return (
    <div >
      {element}
    </div>
  )
}
export default App;
