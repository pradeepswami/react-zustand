import './App.css'
import { Link } from "react-router-dom";



function App() { 
  return (
  <div className="App">
    <ul>
      <li><Link to="/todo">Todo</Link></li>
      <li><Link to="/contacts">Contacts</Link></li>
      <li><Link to="/search">Search</Link></li>
    </ul>
  </div>)
}

export default App
