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
    const clickHandler = () => {
        console.log("button clicked!")
    }
    return (
        <div>
            <button onClick={clickHandler}> Click! </button>
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