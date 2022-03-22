import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Link to="/homepage">Homepage</Link>
      <Link to= "/product">Products</Link>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {links.map((el) => {
              return (
                <Link key={el.to} style={{ padding: "10px" }} to={el.to}>
                  {el.title}
                </Link>
              );
            })}
          </div>
    </>
  );
};
