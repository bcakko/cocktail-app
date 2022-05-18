import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCocktailsFetch } from "../store/actions/cocktailsActions";
import { RootState } from "../store/types/RootState.type";

const FilteredPage = () => {
  const { ingredientName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCocktailsFetch(ingredientName));
  }, [dispatch, ingredientName]);

  const cocktails = useSelector((state: RootState) => state.cocktails.drinks);

  return (
    <div className="lg:pl-[19.5rem]">
      <div className="max-w-3xl mx-auto relative xl:max-w-none flex flex-wrap text-center">
        {cocktails.map(
          (drink: {
            idDrink: string;
            strDrink: string;
            strDrinkThumb: string;
          }) => (
            <Link
              to={`/cocktail/${drink.idDrink}`}
              key={drink.idDrink}
              className="sm:w-48 p-4 font-semibold text-slate-400 hover:text-slate-100"
            >
              <img
                className=""
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
              />
              <div className="">{drink.strDrink}</div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default FilteredPage;
