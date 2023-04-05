import React from "react";
import './Animals';
import './Cards.css'

const Cards = (props) => {

    return (
        <div className="card">
            <img className="image" src={`https://source.unsplash.com/500x400/?${props.name}`} alt='' width={200} height={200} />
            <button onClick={props.removeCard} className="closeBtn">X</button>
            <h2>{props.name}</h2>
            <div className="likeSection">
                <button onClick={props.removeLikes} className='likeBtn' >-</button>
                {props.likes >= 0 ? <p className="likes">♥ {props.likes}</p> : <p className="likes">💔 {props.likes}</p>}
                <button onClick={props.addLikes} className='likeBtn' >+</button>
            </div>
        </div>
    )
};

export default Cards;
