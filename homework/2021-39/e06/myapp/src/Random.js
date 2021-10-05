import React from "react";

//ep07
class Random extends React.Component {

  constructor(props) {
    super(props);
    this.generateRandomNumber = this.generateRandomNumber.bind(this); // create copy of the generateRandomNumber function using function binding
  }

  generateRandomNumber() {
    //alert("Hello");
    console.log(this);
  }
  //function binding ratkaisu yllä

/*
  constructor(props) {
    super(props);  // this.props = props
    let muuttuja = this;
    this.generateRandomNumber = function() {

        console.log(muuttuja);
    }
  }
  //closure ratkaisu yllä
*/
/*
  constructor(props) {
    super(props); // this.props = props
    this.generateRandomNumber = () => {


      console.log(this);

      //lexical this ratkaisu
    };
  }
*/
/*
generateRandomNumber = () => {
      console.log(this);
}
//class field ratkaisu
*/
/*
  generateRandomNumber() {

    //alert("Hello");

    console.log(this);
  }
*/
  render() {
    //return <button onClick={this.generateRandomNumber}>Generate Random</button>;
    /*
    return (
      <button onClick={() => this.generateRandomNumber()}>
        Generate Random
      </button>
    );
      */
    //se viittaa silloin ylemmän tason objektiin jolloin this ei ole menetetty

    return <button onClick={this.generateRandomNumber}>Generate Random</button>;
  }
}

export default Random;
