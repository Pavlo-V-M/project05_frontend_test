import axios from 'axios';

const recipesInstance = axios.create({
  baseURL: ' https://project05-backend.onrender.com/api/own',
});

recipesInstance.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWM2M2IxYTE5ZDcyYjdmM2YwYmE3MiIsImlhdCI6MTY5MzIxMzc2MywiZXhwIjoxNjk1MDI4MTYzfQ.CwsOFyvGlTrD4tZO7ikWXIdXwNWY8bpnu7VOisfE1_Q';
export const getMyRecipes = async () => {
  const { data: result } = await recipesInstance.get();

  return result;
};

export const deleteRecipes = async id => {
  const { data } = await recipesInstance.delete(`/${id}`);
  return data;
};
