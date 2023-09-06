import { Row } from 'react-bootstrap'
import CardBlock from './card'
import {Wizard} from '../flow/wizard'

export async function getStaticProps({ params }) {
    const section = params.section
    const lang = params.lang
    return {
        props: {
            section, lang
        }
    }
}

export default function Section({ section, lang }){
    const data = Wizard[section]
    const classs = 'com'+data.id
    const show = data.id != 1?'d-none':null
    return(
        <Row className={["justify-content-md-between", 'd-none', classs].join(' ')}>
            <CardBlock {...{'data':data, 'lang':lang}} ></CardBlock>          
        </Row>
    )
}
