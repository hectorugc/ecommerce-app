import {FaShoppingCart} from 'react-icons/fa'
import Container from '@components/Container'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.headerContainer}>
            <p className={styles.headerTitle}>Shoesh&apos; Snkrs</p>
                <p className={styles.headerCart}>
                    <button className="snipcart-checkout">
                        <FaShoppingCart/> <span className="snipcart-total-price">$0.0</span>
                    </button>
                </p>
            </Container>
        </header>
    )
}

export default Header
