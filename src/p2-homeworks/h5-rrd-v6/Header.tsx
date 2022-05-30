import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';

import styles from './Header.module.css';


function Header() {
    const activeClassName = ({isActive}: { isActive: boolean }) => (isActive ? styles.active : '');


    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to={PATH.PRE_JUNIOR} className={activeClassName}>Pre Junior</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to={PATH.JUNIOR} className={activeClassName}>Junior</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to={PATH.JUNIOR_PLUS} className={activeClassName}>Junior+</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header
