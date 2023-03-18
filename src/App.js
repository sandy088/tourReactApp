
import './App.css';
import { useState } from 'react';
import data from './data'
import Tours from './components/Tours'
function App() {

  const [tours, setTours] = useState(data)

  function removeTour(id){
       const newTours = tours.filter(tour => tour.id !=id) 
       setTours(newTours)
  }

  if(tours.length === 0){
    return (
      <div className='Refresh h-screen w-screen flex flex-col justify-center items-center gap-5'>
        <h2 className='text-[26px]'>No Tours left</h2>
        <button className=' text-[30px] font-bold bg-green-100 px-4 border-emerald-600 border rounded-lg' onClick={()=> setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className="wrapper font-Poppins">
       <Tours tours = {tours} removeTour= {removeTour}></Tours>
    </div>
  );
}

export default App;
