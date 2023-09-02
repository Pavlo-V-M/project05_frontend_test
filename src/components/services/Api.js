
import axios from 'axios';

axios.defaults.baseURL = 'https://project05-backend.onrender.com/';

const API_KEY = 'lavP2ue6A9';

export const fetchCategories = async () => {
  const response = await axios.get(`api/recipes/main-page?api_key=${API_KEY}`);
  // console.log(response.data)
//   const {
//     data: { Coctail: coctail, ['Odinary Drink']: odinary, ['Other/Unknown']: other, Shake:shake,}
//   } = response

  // console.log()
  return response.data.categoryName;
  // const { data } = response;
  // console.log(data)
};