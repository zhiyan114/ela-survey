import { Component } from "react";
import styles from '@/styles/Home.module.css'

export default class Error404 extends Component {
    render() {
        return (
            <main className={`${styles.main}`}>
                <div className={`${styles.center} ${styles.formBox}`}>
                    <h1>404 Error</h1>
                    <p>I&#39;m sorry, but the page you&#39;re looking for is not found, please check the link and try again.</p>
                </div>
            </main>
        )
    }
}