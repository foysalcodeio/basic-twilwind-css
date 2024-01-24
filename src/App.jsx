import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Navbar from './Components/Navbar/Navbar'
import PhoneBar from './Components/PhoneBar/PhoneBar'
import PriceList from './Components/PriceList/PriceList'


function App() {

  return (
    <>
      <div>
        <Navbar />
        <PriceList />
        <Dashboard />
        <PhoneBar />
      </div>
    </>
  )
}

export default App
