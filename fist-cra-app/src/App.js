import './App.css'
import logoSrc from './logo.svg'

const heading = <h1> React is cool! </h1>;

const student = {
  firstName: 'ana',
  lastName: 'martinez',
  age: 33
}

let { firstName, lastName, age } = student
let theClassName = 'soy-una-clase'


function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function App() {
  return (
    <div className="App">
      <img src={logoSrc} alt="react is cool" />

      <br />
      <hr></hr>


      {/*<p>Lorem ipsum</p>*/}

      {heading}
      <h3 className={theClassName}> Hi, {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}! You are {age++} years old </h3>
    </div>
  );
}

export default App;
