// https://yewtu.be/watch?v=jLS0TkAHvRg

// Hooks
// useState
// sueReducer
// useEffect
// useContext
// useRef
// useMemo
// useCallback
// useTransition (latest addition)
// useDeferredValue (latest addition)

export const ClickHandler = () => {
    const clickHandler = (event, num = 1) => {
        console.log("button clicked!", num, event)
    }
    return (
        <div>
            <button onClick={clickHandler}> Click! </button>
            <button onClick={(event) => {clickHandler(event, 2)}}> Click! </button>
        </div>
    )
}

// normal HTML + vanilla JS
// <button onclick="clickHandler()"></button>
// React JSX
// <button onClick={clickHandler}></button>

// create-react-app install react with:
// - a linter (ESLint) to check for errors/syntax based on rules
// - a transpiler (Babel) to transform modern JavaScript code, including ES6+ features, into code that can run on older browsers

// https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
