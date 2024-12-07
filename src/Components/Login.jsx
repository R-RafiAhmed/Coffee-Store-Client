import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {

    const {loginUser} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then(result => {
            console.log(result.user);

            // Time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime};
            fetch(`http://localhost:5000/users/${email}`, {
              method: 'PATCH',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
              console.log('Info Updated', data);
            })

        })
        .catch(error => console.log(error.code))
    }

  return (
    <div className="card bg-base-100 m-auto mt-20 w-full max-w-sm shrink-0 shadow-2xl">
      <h2 className="text-center text-3xl font-bold pt-5">LOGIN</h2>
      <form onSubmit={handleLogin} className="card-body">
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
