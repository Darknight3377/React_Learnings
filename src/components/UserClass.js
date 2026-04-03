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
          country: "testc",
        },
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
      userData: user,
    });

    // this.timer = setInterval (()=>{
    //     console.log('Interval in component did mount');
    // }, 1000)
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  render() {
    // console.log("Child render");
    const { firstName, lastName, address } = this.state.userData;
    return (
      <>
        <div className="flex p-2 gap-4 items-center">
          <p className="text-gray-600 px-2">Count: {this.state.count}</p>
          {/* Never update the state directly like this.state.count = this.state.count + 1, it will not work and also it will not trigger a re-render, we have to use setState method to update the state and trigger a re-render */}
          {/* Also this setState only updates set of variables passed to it */}
          <button className="bg-green-500 text-white p-2 rounded"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment count
          </button>
        </div>
        <div className="p-4 w-72 bg-gray-100 rounded-lg hover:bg-gray-400 cursor-pointer">
          <h1 className="font-bold text-xl">
            User name : {firstName + " " + lastName}
          </h1>
          <h2 className="text-lg">User location : {address.country}</h2>
        </div>
      </>
    );
  }
}

export default UserClass;
