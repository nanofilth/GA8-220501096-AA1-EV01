import {FaHeart} from 'react-icons/fa'
import styles from './modules/footer.module.css'

export async function getStaticProps({ params }) {
    return {
        props: {}
    }
}

export default function Footer({ }) {
    return <footer className={styles.cntrfooter}>        
    <a
      href="https://iggi.pro"
      target="_blank"
      rel="noopener noreferrer"
    >
    Make with{' '}<FaHeart />{' '}by
    {' '}<span>IggI</span>
    </a>
  </footer>
}