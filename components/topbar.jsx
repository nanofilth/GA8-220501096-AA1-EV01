import Link from 'next/link'
import { Col } from 'react-bootstrap'
import styles from './modules/topbar.module.css'

export async function getStaticProps({ params }) {
    const title = params.title
    const url = params.url
    const target = params.target
    return {
        props: {
            title: title,
            url: url,
            target: target,
        }
    }
}

export default function TopBar({ title, url, target }) {   
    return <Col md={2}className={styles.langtopbar}>
            <p className="text-right">
            <Link href={title == 'es'?url:target}>
            <a className={title == 'es'?styles.selected:null}>ES</a>
            </Link>{' '}|{' '}
            <Link href={title == 'en'?url:target}>
            <a className={title == 'en'?styles.selected:null}>EN</a>
            </Link>
            </p>
        </Col>
}