import React, { useContext, useRef } from "react";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const firebaseApiKey = process.env.REACT_APP_FIREBASE_API_KEY;
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseApiKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if(!res.ok){
        let error = "Authentication Failed";
        if(data && data.error && data.error.message){
          error = data.error.message;
        }
        throw new Error(error);
      }
      
      authCtx.login(data.idToken);
      emailInputRef.current.value = '';
      passwordInputRef.current.value = '';
      navigate('/store');

    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="container mx-auto my-5 py-5">
  <form onSubmit={handleSubmit} className="text-center">
    <h3 className="mb-5 text-center text-xl font-semibold">LogIn</h3>
    <div className="mb-3 w-full md:w-1/2 mx-auto">
      <label className="block text-left">Email address</label>
      <input
        type="email"
        placeholder="Enter email"
        ref={emailInputRef}
        className="w-full px-3 py-2 border rounded"
      />
    </div>
    <div className="mb-3 w-full md:w-1/2 mx-auto">
      <label className="block text-left">Password</label>
      <input
        type="password"
        placeholder="Password"
        ref={passwordInputRef}
        className="w-full px-3 py-2 border rounded"
      />
    </div>
    <div className="w-full md:w-1/2 mx-auto">
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        LogIn
      </button>
    </div>
  </form>
</div>
  );
};

export default Login;