import Swal from 'sweetalert2'


const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee Added Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }



  return (
    <div className="container m-auto bg-[#F4F3F0] py-20 px-5 md:px-32 mt-16 rounded-lg text-black">
        <h2 className="text-5xl mb-14 text-center">ADD COFFEE</h2>
      <form onSubmit={handleAddCoffee} className="space-y-5">
        {/* Name and Quantity row */}
        <div className="md:flex items-center space-y-5s gap-10">
            <div className="w-full">
                <p>Name</p>
                <label className="input input-bordered flex items-center gap-2 bg-white">
                    <input type="text" name="name" className="grow" placeholder="coffee name" />
                </label>
            </div>
            <div className="w-full">
                <p>Available Quantity</p>
                <label className="input input-bordered flex items-center gap-2 bg-white">
                    <input type="text" name="quantity" className="grow" placeholder="available quantity" />
                </label>
            </div>
        </div>
        {/* Supplier and Tasete row */}
        <div className="md:flex items-center space-y-5s gap-10">
            <div className="w-full">
                <p>Supplier</p>
                <label className="input input-bordered flex items-center gap-2 bg-white">
                    <input type="text" name="supplier" className="grow" placeholder="coffee supplier" />
                </label>
            </div>
            <div className="w-full">
                <p>Taste</p>
                <label className="input input-bordered flex items-center gap-2 bg-white">
                    <input type="text" name="taste" className="grow" placeholder="coffee taste" />
                </label>
            </div>
        </div>
        {/* Category and Details row */}
        <div className="md:flex items-center space-y-5s gap-10">
            <div className="w-full">
                <p>Category</p>
                <label className="input input-bordered flex items-center gap-2 bg-white">
                    <input type="text" name="category" className="grow" placeholder="category name" />
                </label>
            </div>
            <div className="w-full">
                <p>Details</p>
                <label className="input input-bordered flex items-center gap-2 bg-white">
                    <input type="text" name="details" className="grow" placeholder="coffee details" />
                </label>
            </div>
        </div>
        {/* Photo row */}
        <div className="">
            <div className="w-full">
                <p>Photo</p>
                <label className="input input-bordered flex items-center gap-2 bg-white">
                    <input type="text" name="photo" className="grow" placeholder="photo URL" />
                </label>
            </div>
        </div>
        <input className="btn btn-block text-white" type="submit" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
