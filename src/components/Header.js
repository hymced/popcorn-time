import "./Header.css"; // webpack puts it in a general css file in the frontend rendered, so it targets all the elements in the end, not only the elements of this component
// but yet a separated css here so that the component is self-sustainable

import axios from 'axios';
import { useState } from 'react';

export const Header = (props) => {

    /***************************************/
    /* intro to react components lifecycle */
    /***************************************/
    // let numberOfCharactersAPI;
    // // let numberOfCharactersAPI = 0;
    // const baseUrl = "https://ih-crud-api.herokuapp.com"
    // axios
    //     .get(`${baseUrl}/characters`)
    //     .then(response => {
    //         console.log(response.data);
    //         numberOfCharactersAPI = response.data.length;
    //     })
    //     .catch(e => console.log(e))
    // // react renders before the promise is settled
    //
    // let [numberOfCharactersAPI, setNumberOfCharactersAPI] = useState();
    // const baseUrl = "https://ih-crud-api.herokuapp.com"
    // axios
    //     .get(`${baseUrl}/characters`)
    //     .then(response => {
    //         console.log(response.data);
    //         setNumberOfCharactersAPI(response.data.length);
    //     })
    //     .catch(e => console.log(e))
    // // infinite loop rendering the component!!!

    // conditional rendering: solution 1 (using an Element variable)
    let messageNumberMovies = "";
    if(props.numberOfMovies > 0){
        messageNumberMovies = <h2>Number of movies: {props.numberOfMovies}</h2>;
    } else {
        messageNumberMovies = <h2>No movie to display</h2>;
    }

    return (
        <header className="Header">
            {/* <h1>Header component</h1> */}
            <h1>Popcorn Time 🍿</h1>
            {messageNumberMovies}
            {/* <p>Number of characters in API: {numberOfCharactersAPI}</p> */}
        </header>
    )
}