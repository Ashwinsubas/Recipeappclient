import CommonApi from "./CommonApi";

export const addRecipeAPI = async (recipeData) => {
  return await CommonApi("post", "/allRecipes", recipeData);
};

export const viewRecipeAPI = async()=>{
    return await CommonApi("get" , "/allRecipes","")
}

export const deleteRecipeApi = async (id)=>{
 return await CommonApi("delete", `/allRecipes/${id}`,{})
}