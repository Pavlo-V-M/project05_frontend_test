import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWY0MzQyNzMyYzIwOWY1ZDI1NTYxNSIsImlhdCI6MTY5MzQwMjIxMywiZXhwIjoxNjk1MjE2NjEzfQ.TZ6M5nd_VABs6Ld7sVT-2oXG10WZGyiCEYKevreSBqI"
const _id = "64ef4342732c209f5d255615"
const name = "Vladyslav"

const instance = axios.create({ 
            baseURL: 'https://project05-backend.onrender.com', 
          }); 

export async function FetchAllData(avatarFile) {
  const formData = new FormData();
  formData.append("avatar", avatarFile);
  formData.append("name", name);

  const config = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "multipart/form-data", // Set the Content-Type header
    },
  };

  try {
    const response = await instance.patch(`/api/auth/update`, formData, config);

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error uploading data:", error);
    throw error;
  }
}


export async function FetchById(id) {
  try {
    const response = await instance.get(`api/auth/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}