import { Container, Form, Button } from "react-bootstrap";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your custom submit logic here
    console.log("Form submitted");
  };
  return (
    <div className="container mx-auto my-5 py-5">
    <form onSubmit={handleSubmit} className="text-center">
      <h3 className="mb-5 text-center text-xl font-semibold">SignUp</h3>
      <div className="mb-3 w-full md:w-1/2 mx-auto">
        <label className="block text-left">Email address</label>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-3 w-full md:w-1/2 mx-auto">
        <label className="block text-left">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="w-full md:w-1/2 mx-auto">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          SignUp
        </button>
      </div>
    </form>
  </div>
  );
};

export default Signup;