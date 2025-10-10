import React from 'react'
import {createRoot} from 'react-dom/client'

const reactElement = React.createElement(
  'h1',
  { id: 'heading', title: 'This is a heading' },
  'Hello from React'
)
const reactLinkElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click Me to go to Google'
)

createRoot(document.getElementById('root')).render(
  <>
    {reactElement}
    { reactLinkElement }
    </>
  
  )
