import React from 'react';
import styles from './page.css';
export default class Page1 extends React.Component {
    render(){
        console.log(styles)
        return (
            <h1 className={styles['font-14']}>Pages will be loaded</h1>
        )
    }
}