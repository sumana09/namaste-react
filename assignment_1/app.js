const heading = React.createElement(
  "h1",
  {
    className : "headline",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    className : "headline-2",
  },
  "Heading 2"
) 

const container = React.createElement(
  "div",
  {
    className : "container",
  },
  [heading, heading2]
) 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);