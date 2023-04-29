import { Inter } from 'next/font/google'
import { Component, createRef, Fragment, ReactNode } from 'react'
import styles from '@/styles/Home.module.css'
import { MultiChoice, TextResponse } from '@/Components/FormComp';
import { Button } from '@mui/material';
import swal from 'sweetalert2'

const inter = Inter({ subsets: ['latin'] })

type formState = {
  qone?: string,
  qtwo?: string,
  qthree?: string,
  qfour?: string,
  qfive?: string,
  age?: string,
  gender?: string,
  ethnicity?: string,
  education?: string,
  inital?: string,
}

export default class Home extends Component<{}, formState> {
  formRef = createRef<HTMLFormElement>();
  isSubmitting = false;
  constructor(prop: {}) {
    super(prop);
    this.state = {
      qone: "",
      qtwo: "",
      qthree: "",
      qfour: "",
      qfive: "",
      age: "",
      gender: "",
      ethnicity: "",
      education: "",
      inital: "",
    }
  }
  formFailed = async (message: string) => {
    await swal.fire({
      title: "Survey Failed to Submit",
      text: message,
      icon: "error",
      showConfirmButton: true,
      confirmButtonText: "Ok",
    })
  }
  formSubmit = async () => {
    if(this.isSubmitting) return;

    const result = await swal.fire({
      title: "Submit",
      text: "Are you sure you're finished with the response?",
      icon: "question",
      showConfirmButton: true,
      confirmButtonText: "Yes",
      showCancelButton: true,
      cancelButtonText: "No",
    })
    if(!result.isConfirmed) return;

    // Check if all the questions are answered
    const form = this.formRef.current;
    if(!form) return this.formFailed("Form is not loaded");
    for(const val of Object.values(this.state))
      if(!val || val.trim() === "")
        return await this.formFailed("Please answer all the questions");

    // Check if the inital is too long
    if(!this.state.inital || this.state.inital?.length !== 2) return await this.formFailed("Your inital should be 2 characters long");

    // Submit the form
    this.isSubmitting = true;
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
    this.isSubmitting = false;
    if(Math.floor(res.status/100) === 5) return await this.formFailed("Internal Server Error. Please try again later once a fix is deployed");
    if(Math.floor(res.status/100) !== 2) return await this.formFailed((await res.json()).message);
    await swal.fire({
      title: "Survey Submitted",
      text: (await res.json()).message,
      icon: "success",
      showConfirmButton: true,
      confirmButtonText: "Ok",
    })
  }
  render(): ReactNode {
    return (
      <Fragment>
        <main className={`${styles.main} ${inter.className}`}>
          <div className={`${styles.center} ${styles.formBox}`}>
            <form onSubmit={(e)=>e.preventDefault()} ref={this.formRef}>
              <div className={styles.formHeader} aria-label='Form Header'>
                <h1>CyberSecurity Survey</h1>
                <p>Thank You for your participation! In this survey, I&#39;ll be collecting some information reguarding <code>CyberSecurity</code>.</p>
              </div>
              <hr/>
              <MultiChoice name="Question 1" description="Have you or someone you know had their system compromised due to the lack of cybersecurity awareness?" options={[{name: "Yes, myself"}, {name: "Yes, someone else"}, {name: "No"}]} onChange={(_,val)=>this.setState({qone: val})}/>
              <hr/>
              <MultiChoice name="Question 2" description="Have you ever taken any cybersecurity courses. If so, how helpful were they?" options={[{name: "Yes, useful"}, {name: "Yes, not useful"}, {name: "no"}]} onChange={(_,val)=>this.setState({qtwo: val})}/>
              <hr/>
              <MultiChoice name="Question 3" description="How many smart appliances and compute systems do you have? (Includes all devices that are capable of communicating with other device)" options={[{name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}, {name:"5 or more"}]} onChange={(_,val)=>this.setState({qthree: val})}/>
              <hr/>
              <MultiChoice name="Question 4" description="Do you agree with the recent legislative proposals on the bill 'Restrict Act'?" options={[{name: "Yes"}, {name: "No"}, {name: "I don't know this bill"}]} onChange={(_,val)=> this.setState({qfour: val})}/>
              <hr/>
              <TextResponse name="Question 5" description="What steps do you think is necessary to protect yourself from cyberattacks?" isLongResponse={true} onChange={(e)=>this.setState({qfive: e?.target.value})}/>
              <hr/>
              <div className={styles.formHeader} aira-label="Demographic Label">
                <h2>Demographic Info</h2>
                <p>This information allows me to better analyze the response.</p>
              </div>
              <hr/>
              <MultiChoice name="age" description="What's your age?" options={[{name: "13-15"}, {name: "16-18"}, {name: "19-21"}, {name: "21+"}]} onChange={(_,val)=>this.setState({age: val})}/>
              <hr/>
              <MultiChoice name="gender" description="What's your gender?" options={[{name: "Male"}, {name: "Female"}, {name: "Non-Binary"}]} onChange={(_,val)=>this.setState({gender: val})}/>
              <hr/>
              <MultiChoice name="ethnicity" description="What's your ethnicity?" options={[{name: "American Indian or Alaska Native"}, {name: "Asian"}, {name: "Hispanic and Latino Americans"}, {name: "Black or African American"}, {name: "Native Hawaiian or Other Pacific Islander"}, {name: "White"}]} onChange={(_,val)=>this.setState({ethnicity: val})}/>
              <hr/>
              <MultiChoice name="education" description="What's your highest education?" options={[{name: "Some High School"}, {name: "High School Diploma"}, {name: "Associate Degree"}, {name: "Bachelor Degree"}, {name: "Master's Degree"}, {name: "Doctorate Degree"}]} onChange={(_,val)=>this.setState({education: val})}/>
              <hr/>
              <TextResponse name="inital" description="To finish off, please write your inital here (don't use your full name)" onChange={(e)=>this.setState({inital: e?.target.value})}/>
              <hr/>
              <div className={styles.formFooter} aria-label="Form Footer">
                <Button variant='contained' onClick={this.formSubmit} color="primary">Submit</Button>
                <p>This survey form is open source, view it on <a href="https://github.com/zhiyan114/ela-survey" target="_blank">github</a></p>
              </div>
            </form>
          </div>
        </main>
      </Fragment>
    )
  }
}
