import { useDispatch } from 'react-redux';

export const Signup = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <div className="name flex gap-2.5 m-2">
        <label htmlFor="userName">name :- </label>
        <input
          className="border-2 border-gray-600"
          type="text"
          id="userName"
          name="userName"
        />
      </div>
      <div className="email flex gap-2.5 m-2">
        <label htmlFor="userEmail">email :- </label>
        <input
          className="border-2 border-gray-600"
          type="email"
          id="userEmail"
          name="userEmail"
        />
      </div>
      <div className="pass flex gap-2.5 m-2">
        <label htmlFor="userPass">pass :- </label>
        <input
          className="border-2 border-gray-600"
          type="password"
          id="userPass"
          name="userPass"
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
