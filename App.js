import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {"id": "heading"}, "Hello world from react!");

// console.log(heading); // It is just an object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // puts the object and create h1 tag to render in ui

//JSX (html like syntax but not html)
const jsxHeading = (
  <h1 id="heading" className="head">
    This is heading using jsx
  </h1>
); // same as heading React Element
// but this is not a pure js, so how come it is working in browser
//parcel uses babel to transpiles the code & convert into js readable format so js engine understands this
//babel takes a js code & converts to other version
//console.log(heading) is same as console.log(jsxHeading)

//React components - class based (old), functional comp

//React functional component is jsut a js function that return jsx code

const Title = () => {
    return (
        <div>
            This is Title!
        </div>
    )
}

const titleElement = <p>This is Title elemtn!</p>

const no = 1000;
const HeadingComponent = () => {
  return (
    <div id="container">
    {/* JSX sanitize data sent in {} box, preventing cross site scripting */}
    {no}
    {/*  //This is called component composiition , inseritng component inside another compont */}
    {/* <Title/> is same as {Title()} */}
    <Title />
    {titleElement}
      <h1 id="heading" className="head">
        This is heading using jsx in functional comp
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); // puts the object and create h1 tag to render in ui
