import { useState } from "react";
import { ReactDOM } from "react-dom/client";

function LoginPage() {
const [inputs, setInputs] = useState({});

const handleChange = (event) => 
  {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

return (
  <form onSubmit={handleSubmit}>
    <label>Enter Your Name:
      <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
    </label>
    <input type="submit"/>
    </form>
)
}
export default LoginPage;