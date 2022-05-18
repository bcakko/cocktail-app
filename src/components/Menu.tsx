import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getIngredientsFetch } from "../store/actions/ingredientsActions";
import { RootState } from "../store/types/RootState.type";

const Menu = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector(
    (state: RootState) => state.ingredients.ingredients
  );
  
  console.log("menu fetch");

  useEffect(() => {
    dispatch(getIngredientsFetch());
  }, [dispatch]);

  return (
    <ul
      className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] 
      left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 
      overflow-y-auto"
    >
      {ingredients.map((e: string) => (
        <li key={e} className="w-full">
          <NavLink
            className={({
              isActive,
            }) => `block border-l pl-4 -ml-px border-transparent 
            hover:border-slate-500 ${
              isActive ? "text-slate-100 border-slate-300" : "text-slate-400"
            } hover:text-slate-300`}
            to={`ingredient/${e.replaceAll(" ", "%20")}`}
          >
            {e}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
