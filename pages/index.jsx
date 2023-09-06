import Head from 'next/head'
import {useRouter} from "next/router";
import { Container, Row, Col} from 'react-bootstrap'
import CardBlock from '../components/card'
import Footer from '../components/footer'
import Title from '../components/title'
import TopBar from '../components/topbar'
import Section from '../components/product'
import {Wizard} from '../flow/wizard'

export default function Home({  }) {
  const params = useRouter()
  const sec = params.query
  //console.log(sec)
  const elements = Wizard[sec['url']]
  const steps = elements !== undefined?buildSteps(elements):null
  return (
    <Container className="md-container">
      <Head>
        <title>Maker | IggI</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
        <Row>
        <Title {...{'title':'Bienvenido a ', 'lang':'es'}}/>  
          <TopBar {...{'title':'es', 'url':'/', 'target':'/en'}}/>
        </Row>
        <Row className={["justify-content-md-between", "product"].join(' ')}>
            <CardBlock {...{'data':Wizard['products'], 'lang':'es'}} ></CardBlock>
        </Row>
          {steps}
          <Row className={['description-section','justify-content-md-center', 'maker-section'].join(' ')}></Row>
      <Footer />
    </Container>
  )
}

const buildSteps = (elements) => {
   const content = elements.map(section => (
    <Section key={section.id}{...{'section':section.component, 'lang':'es'}}/>
  ))
  return content
}