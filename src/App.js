
import './App.css';
import { useState } from 'react';
import data from './data'
import Tours from './components/Tours'
function App() {

  const [tours, setTours] = useState(data)


  return (
    <div className="wrapper ">
       <Tours tours = {tours}></Tours>
    </div>
  );
}

export default App;
