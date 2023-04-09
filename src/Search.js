import React from 'react';

const Search = (props) => {
    return (<label> Search:
        <input onChange={props.searchHandler} />
    </label>
    );
};

export default Search;