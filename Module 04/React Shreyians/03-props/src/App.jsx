import React from 'react'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='parent'>
    <Cards user="aman" age={22} img="https://images.unsplash.com/photo-1761839257475-4ca368dae6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"/>
    <Cards user="pooja" age={20} img="https://images.unsplash.com/photo-1761839256951-10c4468c3621?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App