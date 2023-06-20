import "./Header.css"; // webpack puts it in a general css file in the frontend rendered, so it targets all the elements in the end, not only the elements of this component
// but yet a separated css here so that the component is self-sustainable

export const Header = () => {
    return (
        <header className="Header">
            <p>this is the header component.</p>
        </header>
    )
}