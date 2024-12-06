import Swal from "sweetalert2";

const CoffeeCard = ({coffee}) => {

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
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            console.log('Delete Confirmed!', _id);
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
                <button className="btn text-white rounded-lg">EDIT</button>
                <button onClick={() => handleDelete(_id)} className="btn bg-red-600 border-red-600 text-white rounded-lg">DELETE</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

