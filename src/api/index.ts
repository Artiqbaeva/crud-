import axios from "axios";

export const api = axios.create({
    baseURL: "https://68543de36a6ef0ed662e8396.mockapi.io/",
    headers: {
        "Content-Type": "application/json",
      },
})