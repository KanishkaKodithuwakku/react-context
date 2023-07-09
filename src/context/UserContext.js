import React, { useState,createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      fullname: "Kanishka",
      email: "kanishka@gmail.com",
      address: "Passara, Badulla",
      gender: "Male",
      zipcode: "0235",
    },
    {
      fullname: "Alice",
      email: "ali@gmail.com",
      address: "Colarado, Amarica",
      gender: "Female",
      zipcode: "0008",
    },
    {
      fullname: "choon chan",
      email: "jne@gmail.com",
      address: "Tokeyo, Japan",
      gender: "Female",
      zipcode: "0010",
    },
    {
      fullname: "Bandara",
      email: "bandara@gmail.com",
      address: "Delgahawatta Road, Hokandara",
      gender: "Male",
      zipcode: "0456",
    },
    {
      fullname: "Saparamadu",
      email: "sup@gmail.com",
      address: "Galelinda, Thalawathugoda",
      gender: "Female",
      zipcode: "0878",
    },
  ]);


  const handleDeleteUser = (email) => {
     setUsers(users.filter((user) => user.email !== email));
  };

  return (
    <UserContext.Provider value={{ users, handleDeleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
