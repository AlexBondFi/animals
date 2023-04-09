import React from "react";
import Cards from "./Cards";
import Search from "./Search";

const Animals = (props) => {

    const searchFilter = props.data.filter(animal => {
        return animal.name.includes(props.searchInput)
    })
    return (
        <div className="cards">
            <h2>Animals</h2>
            <Search searchHandler={props.searchHandler} />
            <div className="testName">
                {searchFilter.map(item => <Cards
                    key={item.name}
                    name={item.name}
                    likes={item.likes}
                    removeCard={() => props.removeHandler(item.name)}
                    // "removeCard={() => props.removeHandler(item.name)}" - we bind data to the method by '()=>' to send it up
                    removeLikes={() => props.likesHandler(item.name, 'remove')}
                    addLikes={() => props.likesHandler(item.name, 'add')} />)}
            </div>
        </div>
    );
};

export default Animals;