import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          voluptate.
        </p>
        <UserClass name={"Debasmita Roy"} location={"Kolkata"} />
      </div>
    );
  }
}

export default About;
