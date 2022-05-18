import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailsFetch } from "../store/actions/cocktailsActions";
import { Details, DetailsEntity } from "../store/types/details.type";
import { RootState } from "../store/types/RootState.type";

const DetailsPage = () => {
  const { cocktailId } = useParams();
  const dispatch = useDispatch();

  const cocktail: Details = useSelector(
    (state: RootState) => state.cocktails.selectedCocktailDetails
  );

  const cocktailDetails = cocktail.drinks;

  useEffect(() => {
    if (!cocktail) return;

    dispatch(getDetailsFetch(cocktailId));
  }, [dispatch]);

  type IngredientsList = { name: string | null; measure: string | null }[];

  const ingredientsList: IngredientsList = [];

  if (cocktailDetails[0]) {
    for (let i = 1; i <= 15; i++) {
      if (cocktailDetails[0][`strIngredient${i}`] === null) break;

      ingredientsList.push({
        name: cocktailDetails[0][`strIngredient${i}`],
        measure:
        cocktailDetails[0][`strMeasure${i}`] === null
            ? "-"
            : cocktailDetails[0][`strMeasure${i}`],
      });
    }
  }

  console.log(cocktail);

  return (
    <div className="lg:pl-[19.5rem]">
      <div
        className="max-w-3xl mx-auto relative xl:max-w-none flex flex-wrap 
  text-slate-300"
      >
        <div className="">
          {cocktail.drinks.map((drink) => (
            <div key={drink.idDrink}>
              <div className="mb-3 text-2xl font-medium">{drink.strDrink}</div>
              <img
                className=""
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
              />
              <p>{drink.strInstructions}</p>
              <table>
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {ingredientsList.map((e) => (
                    <tr key={Math.random()}>
                      <td>{e.name}</td>
                      <td>{e.measure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
