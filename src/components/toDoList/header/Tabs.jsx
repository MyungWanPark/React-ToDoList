import React from 'react';
import Tab from './Tab';
import styles from './Tabs.module.css'

export default function Tabs() {
    const tabList = ['All', 'Active', 'Completed'];

    return (
        <div className={styles.tabs}>
            {tabList.map(((tab,id) => <Tab key={id} name={tab}/>))}
        </div>
    );
}

