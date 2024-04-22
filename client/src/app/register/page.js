'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'
import styles from '../../styles/register.module.css'


const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  role:Yup.string()
});

export const register = () =>{
  return(
<div className={styles.page}> 
    <div className={styles.design}>
    <h1 className={styles.h}>Patient Registration form</h1>
    <Formik
      initialValues={{
        Name: '',
        
        email: '',
        DOB:'',
        bloodgroup:'',

      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
         Name: <Field name="Name" className={styles.box} />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null} <br/> <br/>
          DOB:<Field name="DOB" className={styles.box} />
          {errors.DOB && touched.DOB ? (
            <div>{errors.DOB}</div>
          ) : null}
           <br/> <br/>
          Email:<Field name="email" type="email" className={styles.box}  />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br/> <br/>

          bloodgroup:<Field name="bloodgroup" className={styles.box}  />
          {errors.bloodgroup && touched.bloodgroup ? (
            <div>{errors.bloodgroup}</div>
          ) : null}
           <br/>  <br/>
           <div className={styles.h}>
          <button type="submit">Submit</button>
          <br />
          


           <br/>
          already have account
          <br />
          <Link href="/login">login</Link>
          </div>
        </Form>
      )}
    </Formik>
  </div>
  </div>
  )
} 


export default register