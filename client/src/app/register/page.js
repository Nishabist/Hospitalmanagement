'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'
import styles from '../../styles/register.module.css'


const SignupSchema = Yup.object().shape({
  Name: Yup.string() .required('Required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
 bloodgroup:Yup.string(),
  email: Yup.string().email('Invalid email').required('Required'),
  DOB:Yup.number().required('Required'),
  phoneNumber:Yup.string().max(11) .required('Required'),
  gender:Yup.string() .required('Required'),
  address:Yup.string() .required('Required'),
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
        phoneNumber:'',
        bloodgroup:'',
        gender:'',
        address:''

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
             phoneNumber:<Field name="phoneNumber" type="phoneNumber" className={styles.box}  />
          {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
          <br/> <br/>

          bloodgroup:<Field name="bloodgroup" className={styles.box}  />
          {errors.bloodgroup && touched.bloodgroup ? (
            <div>{errors.bloodgroup}</div>
          ) : null}
           <br/>  <br/>

           Gender:<Field name="gender" className={styles.box}  />
          {errors.gender && touched.gender? (
            <div>{errors.gender}</div>
          ) : null}
           <br/>  <br/>
           address:<Field name="address" className={styles.box}  />
          {errors.address && touched.address ? (
            <div>{errors.address}</div>
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