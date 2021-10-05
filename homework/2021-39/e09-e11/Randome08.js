import React from "react";

//e08-e11
class Randome08 extends React.Component {
  state = {
    random:
      Math.floor(Math.random() * (this.props.max - this.props.min + 1)) +
      this.props.min,
  };
/*
  generateRandomNumber = () => {
    this.setState({
      random:
        Math.floor(Math.random() * (this.props.max - this.props.min + 1)) +
        this.props.min,
    });
  }
*/
  render() {
    return (
      //<button onClick={this.generateRandomNumber}>{this.state.random}</button>
      <p>{this.state.random}</p>
    );
  }

  componentDidMount() {
    console.log("mount");
    this.id = setInterval(this.tick, 1000);
  }
  //this menetetään jos sitä kutsutaan f() eikä olio.metodin kautta
  tick = () => {
    console.log(this.state.random);

    this.setState({
      random:
        Math.floor(Math.random() * (this.props.max - this.props.min + 1)) +
        this.props.min,
    });
  };
  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.id);
  }

}

export default Randome08;
