import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import List from './Animals';
import Header from './Header';
import Home from './Home';
import { animals, birds } from './animalsList';


class App extends Component {
  state = {
    animals: animals,
    birds: birds,
    title: 'Livings',
    searchInput: ''
  }

  removeHandler = (name, list) => {
    const updatedArray = this.state[list].filter(item => item.name !== name)
    this.setState({
      [list]: updatedArray
    })
  }

  likesHandler = (name, action, list) => {
    const updatedArray = this.state[list].map((item) => {
      if (item.name === name) {
        if (action === 'add') {
          return { ...item, likes: item.likes + 1 }
        } else {
          return { ...item, likes: item.likes - 1 }
        }
      } else {
        return item
      }
    })

    this.setState(
      {
        [list]: updatedArray
      }
    )
  }

  searchHandler = (e) => { // e - event
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    return (
      <BrowserRouter>
      <div className='main'>
        <Header data={this.state} />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/animals" element={<List
          title='animals'
          data={this.state.animals}
          likesHandler={this.likesHandler}
          removeHandler={this.removeHandler}
          searchHandler={this.searchHandler}
          searchInput={this.state.searchInput} />}/>
          <Route path="/birds" element={<List
          title='birds'
          data={this.state.birds}
          likesHandler={this.likesHandler}
          removeHandler={this.removeHandler}
          searchHandler={this.searchHandler}
          searchInput={this.state.searchInput} />}/>
        
          </Routes>
      </div>
      </BrowserRouter>
    );
  }


}

export default App;
