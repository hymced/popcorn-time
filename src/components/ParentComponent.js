import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () => {
    const greetParent = (childName) => {
        alert(`hello parent, it's ${childName}`)
    }
    return <ChildComponent greetHandler={greetParent}/>
}