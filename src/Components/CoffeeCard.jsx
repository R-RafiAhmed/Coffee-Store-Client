import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, coffees, setCoffees}) => {

    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                      });
                      const remaining = coffees.filter(cof => cof._id !== _id);
                      setCoffees(remaining);
                }
            })
            }
          });
    }
 
  return (
    <div className="bg-[#F5F4F1] px-10 py-7 rounded-lg shadow-xl">
      <div className="card card-side">
        <figure>
          <img
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="text-black flex justify-evenly items-center w-full">
          <div className="space-y-2">
                <h4 className="card-title">Name: <span>{name}</span></h4>
                <h4 className="card-title">Quantity: <span>{quantity}</span></h4>
                <h4 className="card-title">Supplier: <span>{supplier}</span></h4>
          </div>
           <div className="join join-vertical space-y-2">
                <button className="btn text-white rounded-lg">VIEW</button>
                <Link to={`updateCoffee/${_id}`}><button className="btn text-white rounded-lg">EDIT</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn bg-red-600 border-red-600 text-white rounded-lg">DELETE</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

