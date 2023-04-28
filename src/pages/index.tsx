import { Inter } from 'next/font/google'
import { Component, createRef, Fragment, ReactNode, RefObject } from 'react'
import styles from '@/styles/Home.module.css'
import { MultiChoice, TextResponse } from '@/Components/FormComp';
import { Button } from '@mui/material';
import swal from 'sweetalert2'

const inter = Inter({ subsets: ['latin'] })

type formState = {
  QOne?: string,
  QTwo?: string,
  QThree?: string,
  QFour?: string,
  QFive?: string,
  DOne?: string,
  DTwo?: string,
  DThree?: string,
  DFour?: string,
  DFive?: string,
}

export default class Home extends Component<{}, formState> {
  formRef = createRef<HTMLFormElement>();
  constructor(prop: {}) {
    super(prop);
    this.state = {
      
    }
  }
  
  formSubmit = async () => {
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
    alert(JSON.stringify(this.state));
  }
  render(): ReactNode {
    return (
      <Fragment>
        <main className={`${styles.main} ${inter.className}`}>
          <div className={`${styles.center} ${styles.formBox}`}>
            <form onSubmit={(e)=>e.preventDefault()} ref={this.formRef}>
              <div className={styles.formHeader} aria-label='Form Header'>
                <h1>CyberSecurity Survey</h1>
                <p>Thank You for your participation! In this survey, we'll be collecting some information reguarding <code>CyberSecurity</code>.</p>
              </div>
              <hr/>
              <MultiChoice name="Question 1" description="Has your computer system ever got promised due to a lack of cybersecurity knowledge?" options={[{name: "Yes, myself"}, {name: "Yes, someone else"}, {name: "No"}]} onChange={(_,val)=>this.setState({QOne: val})}/>
              <hr/>
              <MultiChoice name="Question 2" description="Have you ever taken any cybersecurity courses. If so, how helpful were they?" options={[{name: "Yes, useful"}, {name: "Yes, not useful"}, {name: "no"}]} onChange={(_,val)=>this.setState({QTwo: val})}/>
              <hr/>
              <MultiChoice name="Question 3" description="How many smart appliances and compute systems do you have? (Includes all devices that are capable of communicating with other device)" options={[{name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}, {name:"5 or more"}]} onChange={(_,val)=>this.setState({QThree: val})}/>
              <hr/>
              <MultiChoice name="Question 4" description="Do you agree with the recent legislative proposals on the bill 'Restrict Act'?" options={[{name: "Yes"}, {name: "No"}, {name: "I don't know this bill"}]} onChange={(_,val)=> this.setState({QFour: val})}/>
              <hr/>
              <TextResponse name="Question 5" description="What steps do you think is necessary to protect yourself from cyberattacks?" isLongResponse={true} onChange={(e)=>this.setState({QFive: e?.target.value})}/>
              <hr/>
              <div className={styles.formHeader} aira-label="Demographic Label">
                <h2>Demographic Info</h2>
                <p>This information allows me to analyze how each demographics affect the outcome of your response.</p>
              </div>
              <hr/>
              <MultiChoice name="Demographic 1" description="What's your age?" options={[{name: "Yes, myself"}, {name: "Yes, someone else"}, {name: "No"}]} onChange={(_,val)=>this.setState({DOne: val})}/>
              <hr/>
              <MultiChoice name="Demographic 2" description="What's your gender?" options={[{name: "Male"}, {name: "Female"}, {name: "Non-Binary"}]} onChange={(_,val)=>this.setState({DTwo: val})}/>
              <hr/>
              <MultiChoice name="Demographic 3" description="What's your ethnicity?" options={[{name: "American Indian or Alaska Native"}, {name: "Asian"}, {name: "Black or African American"}, {name: "Native Hawaiian or Other Pacific Islander"}, {name: "White"}]} onChange={(_,val)=>this.setState({DThree: val})}/>
              <hr/>
              <MultiChoice name="Demographic 4" description="What's your highest education?" options={[{name: "Some High School"}, {name: "High School Diploma"}, {name: "Associate Degree"}, {name: "Bachelor Degree"}, {name: "Master's Degree"}, {name: "Doctorate Degree"}]} onChange={(_,val)=>this.setState({DFour: val})}/>
              <hr/>
              <TextResponse name="Demographic 5" description="To finish off, please write your inital here (please don't use full name)" onChange={(e)=>this.setState({DFive: e?.target.value})}/>
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
