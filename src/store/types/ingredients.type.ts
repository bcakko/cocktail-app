export interface Ingredients {
  drinks?: IngredientsEntity[] | null;
}
export interface IngredientsEntity {
  strIngredient1: string;
}
export interface IngredientsState {
  ingredients: string[];
  isLoading: boolean;
}
