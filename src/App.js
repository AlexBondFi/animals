import './App.css';
import Animals from './Animals';
import Header from './Header';
import { animals } from './animalsList';
import React, { Component } from "react";

class App extends Component {
  state = {
    animals: animals,
    anything: 'Livings',
    searchInput: ''
  }

  removeHandler = (name) => {
    const updateArray = this.state.animals.filter(animal => animal.name !== name)
    this.setState({
      animals: updateArray
    })
  }

  likesHandler = (name, action) => {
    this.setState((prevState) => { // prevState is not reserved word BUT it it used prevState for setState. Thats how it works
      const updateArray = prevState.animals.map((animal) => {
        if (animal.name === name) {
          if (action === 'add') {
            return { ...animal, likes: animal.likes + 1 }
          } else {
            return { ...animal, likes: animal.likes - 1 }
          }
        } else {
          return animal
        }
      })
      return {
        animals: updateArray
      }
    })
  }

  searchHandler = (e) => { // e - event
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Header anything={this.state.anything} />
        <Animals data={this.state.animals} likesHandler={this.likesHandler} removeHandler={this.removeHandler} searchHandler={this.searchHandler} searchInput={this.state.searchInput} />
      </div>
    )
  }


}

export default App;
