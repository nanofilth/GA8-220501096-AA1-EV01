import Image from 'next/image'
import styles from './modules/title.module.css'
import {Col} from 'react-bootstrap'
import {En} from '../lang/en'

export async function getStaticProps({ params }) {
    const title = params.title
    const lang = params.lang
    return {
        props: {
            title, lang
        }
    }
}

export default function Title({ title, lang }) {
    const txt = lang == 'es'?title:En['title']
    return <Col md={10}>
            <h1 className={styles.displayone}>
                {txt} <a href="https://maker.iggi.pro">Maker!</a>
                <small>{process.env.version}</small>
            </h1>
            <div className={["subtitle", "align-top"].join(' ')}>Powered by{' '}
                <a
                href="https://iggi.pro"
                >
                     <Image
                        src="/img/gray.png"
                        alt="IggI | Fabricamos experiencias precisas"
                        width={32}
                        height={12}
                    />
                </a>
            </div>
        </Col>
}