import './App.css'
import Navbar from './components/Navbar'
import Card from "./components/Albumcard.jsx"
function App() {

  return (
    <div>
    <Navbar />
    // here title and description are props which we are passing to Card component
    <Card albumTitlel="Card 1" descriprion='this is card 1' />
    </div>
  )
}

export default App
