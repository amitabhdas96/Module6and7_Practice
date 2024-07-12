
// first do npm install react-error-boundary
import { ErrorBoundary } from 'react-error-boundary'
import ErrorMessage from './components/ErrorMessage'

import PropsDisplayer from './components/PropsDisplayer' 
import City from './components/City' 
import Pet from './components/Pet' 
import FullName from './components/FullName' 
import ComplexComment from './components/ComplexComment' 
import Callout from './components/Callout' 
import MoviesList from './components/MoviesList' 
import MoodChanger from './components/MoodChanger' 
import BirthdayTranslator from './components/BirthdayTranslator' 
import Weather from './components/Weather' 
import LoginForm from './components/LoginForm'
import ExplodingBomb from './components/ExplodingBomb'
import Clock from './components/Clock'
import ClockDisplay from './components/ClockDisplay'
import ActivityFinder from './components/ActivityFinder'



import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// object storing comment data - passed as props
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: { // author is also an object
  name: 'Hello Kitty',
  avatarUrl: 'https://placekitten.com/g/64/64',
  },
 };

function ExampleComponent() {
  return (
  <div className="ExampleComponent componentBox">
  <h1>My Example Component</h1>
  <p>My first React component!</p>
  </div>
  )
 }
 
 function Welcome(props) { // custom Welcome component
  return (
  <div className="componentBox">
  {/* if the 'name' prop exists, render it on the screen */}
  <h3>Welcome {props.name}!</h3>
  {/* if this component has children, render them here */}
  {props.children}
  </div>
  )
 }
 

function App() {
  const [count, setCount] = useState(0)

const spiderman = { name: 'Spiderman2', alterEgo: 'Peter Parker2', catchPhrase: 'With great power comes great responsibility2' };
const spideyJSX = (<div>
 <h3>{spiderman.name}</h3>
 <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
</div>);

// single parent fragment element
const spideyJSXFragment = (<>
  <h3>{spiderman.name}</h3>
  <blockquote>{spiderman.catchPhrase}</blockquote>
  <cite>{spiderman.alterEgo}</cite>
  </>);
 


  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
        <>

{/* <ExplodingBomb></ExplodingBomb> */}

{/* <Clock></Clock> */}

<ActivityFinder></ActivityFinder>

<ClockDisplay></ClockDisplay>

<LoginForm></LoginForm>

<Weather></Weather>

<BirthdayTranslator></BirthdayTranslator>

<MoodChanger></MoodChanger>

<Callout title="Nested React Component"  message="Simple message with a fancy box applied via composition">
 <FullName first="Elon" last="Musk" />
</Callout>

<MoviesList></MoviesList>

<ComplexComment author={comment.author}  date={comment.date} text={comment.text}/>

 
<FullName first="Kendrick" middle="Kumar" last="Lamar" />


<Pet type="first prop"/>      
<Pet type="unknown" name="Amitabh" colour="Blue"/>  

<City name="Newcastle">
 <div>Newcastle is a harbour city in the Australian state
of New South Wales.</div>
 <div><strong>Population:</strong> 322,278 (2016)</div>
</City>


{/* state and country are not specified, will use defaults */}
<City name="Sydney" />
{/* country is not specified, will use default */}
<City name="Melbourne" state="VIC" />
{/* all values are specified, won't use defaults */}
<City name="Chicago" state="Illinois" country="USA" />



        <ExampleComponent/>
        <Welcome name="students">
 <p>Children of Welcome</p>
</Welcome>

{/* Renders the component with no props */}
<PropsDisplayer />
{/* Renders the component with a single prop 'myProp' */}
<PropsDisplayer myProp="first prop"/>
{/* Renders the component with multiple props - add your own! */}
<PropsDisplayer prop1="first" prop2="second" prop3={3}/>
<PropsDisplayer name="Harry Styles" age={29}/>
{/* Array prop value - uses curly braces */}
<PropsDisplayer pets={["cat", "dog", "goldfish"]}/>
{/* Variable prop values - uses curly braces */}
<PropsDisplayer reactLogo={reactLogo} buttonCount={count}/> 

</>

  )
}

export default App
