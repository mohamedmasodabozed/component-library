
import './App.css'
import Badge from '../components/badges/Badge'
import BadgeContainer from '../components/badges/BadgeContainer'
import Banner from '../components/Banner/Banner'
import BannerHeader from '../components/Banner/BannerHeader'
import BannerBody from '../components/Banner/BannerBody'
import Card from '../components/card/Card'
import CardIcon from '../components/card/CardIcon'
import CardHeader from '../components/card/CardHeader'
import CardBody from '../components/card/CardBody'
import { CiAirportSign1 } from "react-icons/ci";
import CardContainer from '../components/card/CardContainer'
import TestimonialsContainer from '../components/testimonials/TestimonialsContainer'
import TestimonialsBody from '../components/testimonials/TestimonialsBody'
import TestimonialsImage from '../components/testimonials/TestimonialsImage'
import TestimonialsText from '../components/testimonials/TestimonialsText'
import TestimonialsFooter from '../components/testimonials/TestimonialsFooter'
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
      <CardContainer axis="x">
      <Card>
        <CardIcon>
          <CiAirportSign1 />
        </CardIcon>
        <CardHeader>
          This is a header
        </CardHeader>
        <CardBody>
          This is a body of the card. It can contain more information about the card and can be used to provide additional context to the user.
        </CardBody>
      </Card>
      <Card>
        <CardIcon>
          <CiAirportSign1 />
        </CardIcon>
        <CardHeader>
          This is a header
        </CardHeader>
        <CardBody>
          This is a body of the card. It can contain more information about the card and can be used to provide additional context to the user.
        </CardBody>
      </Card>
      <Card>
        <CardIcon>
          <CiAirportSign1 />
        </CardIcon>
        <CardHeader>
          This is a header
        </CardHeader>
        <CardBody>
          This is a body of the card. It can contain more information about the card and can be used to provide additional context to the user.
        </CardBody>
      </Card>
      </CardContainer>
      <TestimonialsContainer>
        <TestimonialsBody>
                <TestimonialsText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.
                </TestimonialsText>
                <TestimonialsFooter>
                <div className="name">mohamed masod abozed</div>
                <div className="position">
                    <span>Software Engineer</span>
                </div>
            </TestimonialsFooter>
        </TestimonialsBody>
      </TestimonialsContainer>
    </>
  )
}

export default App
