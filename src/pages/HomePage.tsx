import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRandomCocktailFetch } from "../store/actions/cocktailsActions";
import { RootState } from "../store/types/RootState.type";
import { DetailsEntity } from "../store/types/details.type";

const HomePage = () => {
  const dispatch = useDispatch();

  const randomCocktailList: DetailsEntity[] = useSelector(
    (state: RootState) => state.cocktails.randomCocktail
  );

  useEffect(() => {
    if (randomCocktailList[0]) return;

    dispatch(getRandomCocktailFetch());
  }, [dispatch]);

  const isLoading = useSelector(
    (state: RootState) => state.cocktails.isLoading
  );

  if (isLoading) {
    return <p className="fixed mt-10">Loading...</p>;
  }

  type IngredientsList = { name: string | null; measure: string | null }[];

  const measuresList: IngredientsList = [];
  const ingredientsList: IngredientsList = [];

  let myObject = randomCocktailList[0];

  // !Another cool way ----- Can'a sor.
  // if (myObject) {
  //   Object.keys(myObject).forEach((key, index) => {
  //     if (key.startsWith("strIngre") && myObject[key]) {
  //       ingredientsList.push({ name: myObject[key], measure: null });
  //       console.log(index);
  //     }
  //     if (key.startsWith("strMeasure") && myObject[key]) {
  //       measuresList.push({ name: null, measure: myObject[key] });
  //       console.log(index);
  //     }
  //   });
  // }
  // console.log(ingredientsList);
  // console.log(measuresList);

  if (myObject) {
    for (let i = 1; i <= 15; i++) {
      if (myObject[`strIngredient${i}`] === null) break;

      ingredientsList.push({
        name: myObject[`strIngredient${i}`],
        measure:
          myObject[`strMeasure${i}`] === null
            ? "-"
            : myObject[`strMeasure${i}`],
      });
    }
  }

  return (
    <div className="lg:pl-[19.5rem]">
      <div
        className="max-w-3xl mx-auto relative xl:max-w-none flex flex-wrap 
      text-slate-300"
      >
        <button
          className="mt-10"
          onClick={() => {
            dispatch(getRandomCocktailFetch());
          }}
        >
          Random Cocktail
        </button>
        <div className="">
          {randomCocktailList.map((drink) => (
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

export default HomePage;
