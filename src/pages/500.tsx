import { Component } from "react";
import styles from '@/styles/Home.module.css'

export default class Error500 extends Component {
    render() {
        return (
            <main className={`${styles.main}`}>
                <div className={`${styles.center} ${styles.formBox}`}>
                    <h1>500 Error</h1>
                    <p>Something with the backend broke. Fortunately, sentry.io caught it and notified the developer. A fix should be deployed soon.</p>
                </div>
            </main>
        )
    }
}