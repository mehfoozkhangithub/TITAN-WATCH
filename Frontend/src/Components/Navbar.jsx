import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const nav = [
    {
      path: '/',
      title: 'home',
    },
    {
      path: '/signup',
      title: 'signup',
    },
  ];

  return (
    <div className="flex justify-evenly gap-1 border-2">
      {nav.map((el, i) => {
        return (
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    background: 'tomato',
                    borderRadius: '0.5rem',
                    padding: '0.3rem 0.9rem',
                  }
                : { background: 'transparent' };
            }}
            end
            to={el.path}
            key={i + 1}
            className="p-1 m-2"
          >
            {el.title}
          </NavLink>
        );
      })}
    </div>
  );
};
