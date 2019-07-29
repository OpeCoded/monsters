import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

//class App extends React.Component... means, I want and want to add on to whatever functionality that is built in a React class
class App extends Component {
  constructor() {
    //super() extends the functionality from our Component class which we get from React
    super();
    this.state = {
      //this holds our monsters names
      monsters: [],
      //storing what the users type in the search box into our state so that we can use it for filter
      searchField: ""
    };
  }

  //componentDidMount life cycle method allows React to display through what we type in the  {} or put or mount our component on the DOM page
  componentDidMount() {
    //fetch makes an api request and return a promise
    //and the promise gives us a actual response of the body of our response in a json format
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      //the response gotten updates our monsters state using the setState() with the new array of users
      .then(users => this.setState({ monsters: users }));
  }

  //class method for handleChange event in the search box
  //we are using arrow function to automatically bind the this. context to the place where they are defined in the first place (App class Component...root)
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  //Rerender or reloads our App when there is a change in state
  render() {
    //here we filter the monster state with the value we got from the searchField using destructuring (pulling properties off an object)
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          //this. is a keyword that references the context in which its being invoked
          handleChange={this.handleChange}
        />
        {/* prop is the object of any property you write as attribute in any component
        props have children, children are what we place inside or in between our components tags or element
        Passing our monsters as props or attribute.
        States are passed down to components as props or attributes */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
