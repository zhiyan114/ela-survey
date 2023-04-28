import { FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material';
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import styles from '@/styles/Home.module.css'
import { ShortResponse } from '@/Components/FormComp';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={`${styles.center} ${styles.formBox}`}>
          <form>
            <div className={styles.formHeader} aria-label='Form Header'>
              <h1>CyberSecurity Survey</h1>
              <p>Thank You for participating in this survey! Please fill out all the response below. The topic of this survey is about <code>CyberSecurity</code>. In this survey, we'll be conducting on cybersecurity affect the society as a whole.</p>
            </div>
            <hr/>
            <ShortResponse name={"Really Long Quesiton"} description="A really really really really reallyreally really really really reallyreally really really really reallyreally really really really reallyreally really really really really question is asked here"/>
            <hr/>
            <ShortResponse name={"Test"} description="A question is asked here"/>
          </form>
        </div>
      </main>
    </Fragment>
  )
}
