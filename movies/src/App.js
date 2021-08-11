import React from "react";

class App extends React.Component {
  componentDidMount() {
    //i will get data here

    let f = async () => {
      let result = await fetch("http://localhost:4000/movies");
      console.log(result);
      let json = await result.json();
      console.log(json);
    };

    f();
  }

  render() {
    return <div></div>;
  }
}

export default App;
