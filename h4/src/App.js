import React from "react";
import UsersData from './components/firstTask/UsersData'
import UsersProvider from "./components/context";
import AllPosts from "./components/thirdTask/AllPosts";

function App() {
  return (
    <div className="App">
      {/* <UsersProvider>
        <UsersData />
      </UsersProvider> */}
      <AllPosts/>
    </div>
  );
}

export default App;
