import axios from "axios";

const instance = axios.create({ 
            baseURL: 'https://project05-backend.onrender.com', 
          }); 

export async function PatchDataHeader(avatarFile,name) {
  const formData = new FormData();
  if (avatarFile) {
    formData.append("avatar", avatarFile);
  }
  if (name) {
    formData.append("name", name);
  }
  

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
      "Content-Type": "multipart/form-data", 
    },
  };

  try {
    const response = await instance.patch(`/api/auth/update`, formData, config);


    return response.data;
  } catch (error) {
    console.error("Error uploading data:", error);
    throw error;
  }
}


export async function FetchById() {
  try {
    const response = await instance.get(`api/auth/`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}