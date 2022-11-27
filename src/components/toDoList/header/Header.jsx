import React from 'react';
import LightDarkBtn from './LightDarkBtn';
import Tabs from './Tabs';
import styles from './Header.module.css'

export const Header = (props) => {
    return (
        <div className={styles.header}>
            <LightDarkBtn />
            <Tabs />
        </div>
    )
};