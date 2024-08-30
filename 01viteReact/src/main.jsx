import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
 return (
  <div>
    <h1>Custom App !</h1>
  </div>
 )
}
const anotherElement = (
  <a href="https://google.com" target='_blank'> Visit gooogle </a>
)
const user='agam & coffee'
// official template of react under the hood
const reactElement=React.createElement(
    'a',
    {href:'https://google.com',
    target:'_blank'},
    'click me daddy',
    user


)
ReactDOM.createRoot(document.getElementById('root')).render(
  // we can also render the app or any function by wrting this 'MyApp()' , par krna nahi chahiye
// MyApp()
  // <App/>
    reactElement

)
