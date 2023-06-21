import { useState } from 'react';

// https://stackoverflow.com/questions/63710791/react-hooks-handle-multiple-inputs/67234242#67234242

const MyComponent = () => {
    const [inputs, setInputs] = useState({});
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
 
    return (
      <> 
       <input name="field1" value={inputs.field1 || ''} onChange={handleChange} />
       <input name="field2" value={inputs.field2 || ''} onChange={handleChange} />
      </>
    )
 }