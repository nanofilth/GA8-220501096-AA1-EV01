import { Card, Form, Row, Col } from 'react-bootstrap'
import styles from './modules/form.module.css'

export async function getStaticProps({ params }) {
    const label = params.label
    const type = params.type
    const place = params.place
    const legend = params.legend
    return {
        props: {
            label,
            type,
            place,
            legend
        }
    }
}

export default function FormBlock({label, type, place, legend}){
    return (<Form>
                <Form.Group className="mb-3">
                  {/*<Form.Label>{label}</Form.Label>*/}
                  <Form.Control type={type} placeholder={place} />
                  <Form.Text className="text-muted">
                    {legend}
                  </Form.Text>
                </Form.Group>
              </Form>)
}