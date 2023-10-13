import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function Myapp(){
//     return(
//         <>
//         <h1>Custom domain !</h1>
//         </>
//     )
// }

// const anotherElement = (
//     <a href='https://google.com' target='_blank'>Visit Google</a>
// )

const createElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App/>
  
)
