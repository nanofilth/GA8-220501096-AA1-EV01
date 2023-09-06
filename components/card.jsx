import { Card, Button, Row, Col } from 'react-bootstrap'
import {RadioGroup} from 'react-icheck'
import Option from './option'
import styles from './modules/card.module.css'
import {En} from '../lang/en'

export async function getStaticProps({ params }) {
    const data = params.data
    const lang = params.lang
    return {
        props: {
            data,
            lang
        }
    }
}

export default function CardBlock({ data, lang }) {
    const buttons = builderButtons(data, lang)
    const elements = data.elements
    const title = lang == 'es'?data.title:En[`${data.hide}`]
    return <Card className={styles.smlcard}>
        <Card.Body>    
            <Card.Title>{title}<hr/></Card.Title>        
                <Row className={[styles.cardsml, 'card-text'].join(' ')}>
                
                {elements.map(optionWizard => (                
                    <Option key={optionWizard.id} {... {"opt":optionWizard, "lang":lang}}/>
                ))}
                
                </Row>
                {buttons}
        </Card.Body>
    </Card>

}

const builderButtons = (data, lang) => {
    const classhide = data.back == ''?'d-none':null
    const titlenext = lang == 'es'?'Siguiente':'Next'
    const titleback = lang == 'es'?'Regresar':'Back'
    const nextaction = data.url != '#'?<Button variant="outline-secondary" className={["float-right", "next-action"].join(' ')} href={data.url} >
        {titlenext} &rarr;
    </Button>
    :
    <Button variant="outline-secondary" className={["float-right", "next-action"].join(' ')} onClick={(e) => toogleSection(e, 'next')}>
        {titlenext} &rarr;
    </Button>
    const backaction = <Button variant="outline-secondary" className={["float-left"].join(' ')} onClick={(e) => toogleSection(e, 'back')}>
        &larr; {titleback}
    </Button>
    const toogleSection = (e, direction) => {
        //const secs = [...document.getElementsByClassName('maker-section')]
        const target = direction == 'next'?data['target']:data['back']
        const hide = data['hide']
        //console.log(target, hide)
        document.querySelector('.maker-section').classList.add('d-none')
        // secs.map(sec => (
        //     sec.classList.add('d-none')
        // ))
        const elemtarget = document.querySelector('.'+target)
        const elemhide = document.querySelector('.'+hide)
        if(elemtarget !== null){
            elemtarget.classList.remove('d-none')
            elemhide.classList.add('d-none')
        }
    } 
    return(
        <Row>
            <Col className={classhide}>
                {backaction}
            </Col>
            <Col>
                {nextaction}
            </Col>
        </Row>
    )
}