
import './App.css'
import Badge from '../components/badges/Badge'
import BadgeContainer from '../components/badges/BadgeContainer'
import Banner from '../components/Banner/Banner'
import BannerHeader from '../components/Banner/BannerHeader'
import BannerBody from '../components/Banner/BannerBody'
function App() {

  return (
    <>
    <BadgeContainer axis="y" >
      <Badge type="pill" bgColor="pink">Dorehedoro</Badge>
      <Badge type="pill" bgColor="indigo">something</Badge>
      <Badge type="pill" bgColor="blue">something</Badge>
      <Badge type="pill" bgColor="green">something</Badge>
      <Badge type="pill" bgColor="yellow">something</Badge>
    </BadgeContainer>
      <Banner status="success" isSingleLine={true}>This is a success banner</Banner>
      <Banner status="warning" isSingleLine={true}>This is a warning banner</Banner>
      <Banner status="error" isSingleLine={true}>This is an error banner</Banner>
      <Banner status="info" isSingleLine={true}>This is an info banner</Banner>
      
      <Banner status="success" isSingleLine={false}>
      <BannerHeader > This is a header </BannerHeader>
        <BannerBody> 
          This is a body of the banner. It can contain more information about the banner and can be used to provide additional context to the user.
        </BannerBody> 
      </Banner>
    </>
  )
}

export default App
