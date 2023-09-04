import { popularRecipeInstance } from "./axiosConfigApi"


export const getPopularRecipes = async () => {
	const { data } = await popularRecipeInstance.get("/popular-recipe");
	return await data
}