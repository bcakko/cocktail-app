import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div
      className="sticky top-0 p-5 z-40 w-full backdrop-blur flex justify-between 
      transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 
      border-slate-50/[0.06] bg-white text-white bg-slate-900/75 text-xl"
    >
      <h1>CocktailsIcon</h1>
      <Link className="bg-slate-300 text-slate-800 hover:bg-slate-100 hover:text-slate-700 px-3 rounded" to="/">
        Home
      </Link>
    </div>
  );
};

export default MainHeader;
