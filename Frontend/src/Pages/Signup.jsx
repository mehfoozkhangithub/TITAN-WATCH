import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser, signUser } from '../Redux/Auth/AuthSlicer';

export const Signup = () => {
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  const handleChange = (data) => {
    const { value, name } = data;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(formData));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="name flex gap-2.5 m-2">
        <label htmlFor="userName">name :- </label>
        <input
          className="border-2 border-gray-600"
          type="text"
          id="userName"
          name="userName"
          onChange={(e) => handleChange(e.target)}
        />
      </div>
      <div className="email flex gap-2.5 m-2">
        <label htmlFor="userEmail">email :- </label>
        <input
          className="border-2 border-gray-600"
          type="email"
          id="userEmail"
          name="userEmail"
          onChange={(e) => handleChange(e.target)}
        />
      </div>
      <div className="pass flex gap-2.5 m-2">
        <label htmlFor="userPass">pass :- </label>
        <input
          className="border-2 border-gray-600"
          type="password"
          id="userPass"
          name="userPass"
          onChange={(e) => handleChange(e.target)}
        />
      </div>
      <button
        type="submit"
        className="border-2 border-gray-500 px-4 py-1 rounded  ml-[6rem]"
      >
        submit
      </button>
    </form>
  );
};
