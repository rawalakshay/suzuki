import axios from "axios";

export const columns = [
   { name: '#', uid: "id" },
   { name: 'USER', uid: 'user' },
   { name: 'INTEREST', uid: 'interest' },
   { name: 'AGE', uid: 'age' },
   { name: 'EMAIL', uid: 'email' },
   { name: 'MOBILE', uid: 'mobile' },
];

let data: any = []

async function getAllUsers() {
   try {
      const response = await axios.get("http://localhost:3001/users");
      console.log('response.data.data :>>', response.data.data)
      data = response.data.data
      return response.data.data
   } catch (error) {
      console.error("Error while adding user:", error);
      return [];
   }
}

export const users = [];
