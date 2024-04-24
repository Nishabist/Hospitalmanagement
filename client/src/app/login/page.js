'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'
import styles from '../../styles/register.module.css'

const SignupSchema = Yup.object().shape({

    phonenumber: Yup.string().required('Required'),
    password:Yup.string().
    required('Required')
  });
  

export const loginpage = () => {
    return(
    <div className={styles.page}> 
      <div className={styles.design}>
      
    <h1 className={styles.h}>Patient Login</h1>
    
    {/* <Image
      src="/Sahayogi.png"
      width={80}
      height={80}
      alt="Picture of the author"
    /> */}
    <Formik
      initialValues={{
       
      phonenumber:'',
        password:'',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        handleLogin(values)
      }}
    >
      {({ errors, touched }) => (
        <Form >
         {/* {contextHolder} */}
          {/* <Field name="phonenumber" type="phonenumber" placeholder="Enter your phonenumber" />
          {errors.phonenumber && touched.phonenumber ? <div>{errors.phonenumber}</div> : null}
          <br /> */}phoneNumber:
           <Field name="phonenumber" type="phonenumber" placeholder="Enter your phonenumber"/>
          {errors.phonenumber && touched.phonenumber? <div>{errors.phonenumber}</div> : null}
          <br />
          <br />
          Password:
          <Field name="password" type="password" placeholder="Enter your password"/>
          {errors.password && touched.password? <div>{errors.password}</div> : null}
          <br />
          <br />
          <div className={styles.h}>
          <button className='btn' type="submit" >Login</button>
          <br />
          if you don"t have account
          <br /><Link href="./register">go to register</Link>
          </div>
        </Form>
      )}
    </Formik>
  </div>
  </div>

)}
   
export default loginpage