//3 chije - h1 , p, ul

import React from "react";

class MyComp extends React.Component {
  state = {
    someNumber: 3,
  };

  render = () => {
    return (
      <div>
        <h1> {this.state.someNumber} </h1>
      </div>
    );
  };
}

export default MyComp;
