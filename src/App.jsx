import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";


function App() {

  const LoadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(LoadedCoffees);

  return (
    <div className="container m-auto">
      <h1 className='text-5xl text-indigo-500 mb-24 text-center'>COFFE AVAILABLE : {coffees.length}</h1>
      <div className="grid grid-cols-2 gap-5">
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
