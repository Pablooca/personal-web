/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
import Header from "./Components/Header";
const siteProps = {
  name: "Pablo Oca Galeano",
  title: "Junior Back-End Developer",
  email: "pabloocagal03@gmail.com",
};

// ...

const App = () => {
  return (
    <>
      <Header />
      <h3>{siteProps.name}</h3>
      <p>{siteProps.title}</p>
      <p>{siteProps.email}</p>
    </>
  );
};

export default App;