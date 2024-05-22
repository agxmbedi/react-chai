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
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me daddy',
  user


)
ReactDOM.createRoot(document.getElementById('root')).render(
 
    // <App/>
    reactElement

)
