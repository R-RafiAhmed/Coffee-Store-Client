import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard";


function App() {

  const coffees = useLoaderData();

  return (
    <div className="container m-auto">
      <h1 className='text-5xl text-indigo-500 mb-24 text-center'>COFFE AVAILABLE : {coffees.length}</h1>
      <div className="grid grid-cols-2 gap-5">
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
