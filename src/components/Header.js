import "./Header.css"; // webpack puts it in a general css file in the frontend rendered, so it targets all the elements in the end, not only the elements of this component
// but yet a separated css here so that the component is self-sustainable

export const Header = (props) => {

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
        </header>
    )
}