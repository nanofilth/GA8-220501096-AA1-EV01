import React, { useState } from "react"
import ReactDOM from "react-dom"
import {useRouter} from "next/router"
import Image from 'next/image'
import { Row, Card, Col, Button} from 'react-bootstrap'
import * as IconFA from "react-icons/fa"
import 'icheck/skins/all.css';
import {Radio} from 'react-icheck'
import {Detalle} from '../flow/detail'
import {Detail} from '../flow/detail'
import FormBlock from './form'
import {En} from '../lang/en'

export async function getStaticProps({ params }) {
    const opt = params.params.opt
    const lang = params.lang
    return {
        props: {
           opt, lang
        }
    }
}

export default function Option({ opt, lang}) {
    const [isActive, setActive] = useState("Maker")
    const initial = 'Maker'
    const classs = [opt.detail, 'description-section'].join(' ')
    const router = useRouter()
    const chekopt = false
    
    const handleToggle = (e) => {        
        const { name, value } = e.target
        setActive(value)
        //e.setAttribute('checked', 'checked')
        //validateChecked(true, value)
        //const chkopt = initial == e.value?true:false
        //setChecked(!isChecked)
        //chekopt = isChecked == opt.detail?true:false
        //console.log(isActive, value)
        initial = e.value
        const url = opt.url
        if(url != undefined){
            //AQUI PUEDER IR REMOVE DISABLED OF BUTTON NEXT ACTION
            const rpath = lang == 'es'?'/':'/en'
            router.push({pathname: rpath, query: { url }}, `?use=${url}`,{shallow: true})
        }
        const data = lang == 'es'?Detalle[`${opt.detail}`]:Detail[`${opt.detail}`]
        //console.log(data, classs, opt)
        const rname = name == 'industry' && opt.value == 'Otro'?'other':name
        const content = buildContent(data, classs, rname)
        const target = document.querySelector('.description-section')
        ReactDOM.render(content, target)
        document.querySelector('.maker-section').classList.remove('d-none')
    }
    
    const smlLabel = opt.text == 'App'?
        <small>{opt.detail}</small>
    : null

    const txt = lang == 'es'?opt.text:En[`${opt.detail}`]
    
    return (
        <Col className={opt.col} sm={4} xs={6}>
                <Radio 
                name={opt.name}
                value={opt.detail}
                id={opt.id}
                radioClass="iradio_flat-pink"
                onChange={(e) => handleToggle(e)}
                label={composeLabel(opt.icon, txt)}
            />
            {' '}{smlLabel}<p/>
        </Col>
    )
}

const validateChecked = (chk, target) => {
    let chks = [...document.querySelectorAll('.checked')]
    //console.log(chks)
    chks.map( sec => (
        sec.classList.remove('checked')
    ))
}

const buildContent = (data, classs, name) => {
    // const content = name == 'other'?
    //     Other(data)
    const content = name == 'industry'?
        buildDetail(data, classs)
    : productDetail(data)
    return content
}

const buildDetail = (data, classs) => {
    const title = data.title
    const list = data.list
    return (
        <Row className={classs}>
                <Col md={3} sm={4} xs={4}>
                    <img src="/img/web.jpeg"className={["img-fluid", "rounded"].join(' ')} alt={data.title}/>
                </Col>
                <Col md={9} sm={8} xs={8}>
                    <h3 className={["text-left"].join(' ')}>
                        {title}{' '}
                        <small className="text-muted"></small>
                    </h3>
                    <p>
                        <small className="fw-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </small>
                    </p>
                    <ul className="list-group list-group-horizontal">
                        {list.map(item =>(
                            <li key={item.text} className="list-group-item">{React.createElement(IconFA[item.icon])}{' '}{item.text}</li>
                        ))}
                    </ul>
                </Col>
        </Row>
    )
}

const composeLabel = (ico, txt) => {
    const iconString = `${ico}`
    const Faico = React.createElement(IconFA[iconString])
    return(
        <span className="inner-label">
        {' '}{Faico}{' '}{txt}
        </span>
    )
}

const Other = (params) => {
    const label = params.label
    const type = params.type
    const place = params.place
    const legend = params.legend
    return (
            <Col>
                <Card>
                    <Card.Body>    
                    <Card.Title>{params.title}</Card.Title>        
                    <Card.Text>
                        <Row>
                            <Col className="col-12">
                            <FormBlock {...{label, type, place, legend}}/>
                            </Col>
                        </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
    )
}

const productDetail = (data) => {
    const illustration = '/img/'+`${data.path}`+'.svg'
    //console.log(data, illustration)
    return(
        <>
            <Col md={3} sm={4} xs={4}>
            <Image
                        src={illustration}
                        alt={data.subtitle}
                        width={170}
                        height={146}
                    />
                {/* <img src={data.img} className={["img-fluid", "rounded"].join(' ')} alt={data.title}/> */}
            </Col>
            <Col md={7} sm={6} xs={6}>
                <h3 className="display-6">
                    {data.title}{' '}
                    <small className="text-muted">{data.subtitle}</small>
                </h3>
                <p><small className="fw-light">{data.text}</small></p>
            </Col>
        </>
    )
}