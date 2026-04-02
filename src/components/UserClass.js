import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Child constructor");

    this.state = {
      count: 0,
      count2: 2,
      userData: {
        firstName: "Test",
        lastName: "test",
        address: {
            country: "testc"
        }
      },
    };
  }

  async componentDidMount() {
    // console.log("Child componentDidMount");
    const userJson = fetch("https://dummyjson.com/users");
    const userData = await userJson.then((res) => res.json());
    // console.log(userData.users[0]);
    const user = userData.users[0];

    this.setState({
        userData : user
    })

    // this.timer = setInterval (()=>{
    //     console.log('Interval in component did mount'); 
    // }, 1000)
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  render() {
    // console.log("Child render");
    const {firstName, lastName, address} = this.state.userData;
    return (
      <div>
        <p>Count: {this.state.count}</p>
        {/* Never update the state directly like this.state.count = this.state.count + 1, it will not work and also it will not trigger a re-render, we have to use setState method to update the state and trigger a re-render */}
        {/* Also this setState only updates set of variables passed to it */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment count
        </button>
        <h1>User name : {firstName+' '+ lastName}</h1>
        <h2>User location : {address.country}</h2>
      </div>
    );
  }
}

export default UserClass;
