
import './App.css'
import Badge from '../components/badges/Badge'
import BadgeContainer from '../components/badges/BadgeContainer'
function App() {

  return (
    <BadgeContainer axis="y" >
      <Badge type="pill" bgColor="pink">Dorehedoro</Badge>
      <Badge type="pill" bgColor="indigo">something</Badge>
      <Badge type="pill" bgColor="blue">something</Badge>
      <Badge type="pill" bgColor="green">something</Badge>
      <Badge type="pill" bgColor="yellow">something</Badge>
    </BadgeContainer>
  )
}

export default App
