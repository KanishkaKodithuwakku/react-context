import React from "react";
import Layout from "./components/layout/Layout";
import Users from "./pages/Users";
import UserContextProvider from "./context/UserContext";

const App = () => {

  return (
    <>
      <Layout>
        <UserContextProvider>
          <Users />
        </UserContextProvider>
      </Layout>
    </>
  );
}

export default App;
