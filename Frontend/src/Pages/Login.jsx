import React from 'react';

import { loginUser } from '../Redux/Auth/AuthSlicer';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const [formData, setFormData] = React.useState({});

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

    console.log('🚀 ~ formData:', formData);
    dispatch(loginUser(formData));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="email flex gap-2.5 m-2">
        <label htmlFor="userEmail">email :- </label>
        <input
          className="border-2 border-gray-600"
          type="email"
          id="userEmail"
          name="email"
          onChange={(e) => handleChange(e.target)}
        />
      </div>
      <div className="pass flex gap-2.5 m-2">
        <label htmlFor="userPass">pass :- </label>
        <input
          className="border-2 border-gray-600"
          type="password"
          id="userPass"
          name="pass"
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
