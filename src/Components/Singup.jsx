import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Singup = () => {

    const {createUser} = useContext(AuthContext);

    const handleSingup = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            const newUser = {name, email}

            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('User Created in DB!');
                }
            })

        })
        .catch(error => console.log(error.code))
    }

  return (
    <div className="card bg-base-100 m-auto mt-20 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center text-3xl font-bold pt-5">SING UP</h2>
      <form onSubmit={handleSingup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sing Up</button>
        </div>
      </form>
    </div>
  );
};

export default Singup;
