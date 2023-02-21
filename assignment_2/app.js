import React from "react";
import ReactDOM  from "react-dom/client";

/*
Parcel
==========================
 npx parcel index.html
 HMR: Hot module reload
 File Watcher algorithm - C++
 Bundling
 Minification
 Dev and Production build
 Superfast build algorithm
 Image Optimization
 Caching while development
 Compatible with older version of browser
 HTTPS on dev
 Port numbers
 Consistent Hashing Algorithm for cache 
 zero config bundler
 Tree Shaking
 Transitive Dependency
*/

const heading = React.createElement(
  "h1",
  {
    className : "headline",
  },
  "Namaste from React"
);

const heading2 = React.createElement(
  "h2",
  {
    className : "headline-2",
  },
  "Heading kk"
)  

console.log('hello sumo')

const container = React.createElement(
  "div",
  {
    className : "container",
  },
  [heading, heading2]
) 

// React Component

const heading3 = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
) 

// Components
// Functional Components => New => Functional component is nothing but a javascript function that returns some peice of JSX or a Composition of React Element.  
// Class based Compopnents => Old


const HeaderComponent = () => {
  return (
    <div>
      {heading3}
      <h1>Header Functional Component</h1>
      <h2>Heading 2</h2>
    </div>
  )
};


const HeaderComponent2 = () => (
  <div>
    <h1>Header Functional Component</h1>
    <h2>Heading 2</h2>
  </div>
);

const HeaderComponent3 = function () {
  return (
    <div>
      <h1>Header Functional Component</h1>
      <h2>Heading 2</h2>
    </div>
  )
};

// Both are the Functional Components and returning some JSX


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);