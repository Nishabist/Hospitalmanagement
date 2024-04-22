'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'
const SignupSchema = Yup.object().shape({

    phonenumber: Yup.string().required('Required'),
    password:Yup.string().
    required('Required')
  });
  

export const loginpage = () => {
    return(
        <div className='form'>
    <h1>Login</h1>
    
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
          <br /> */}
           <Field name="phonenumber" type="phonenumber" placeholder="Enter your phonenumber"/>
          {errors.phonenumber && touched.phonenumber? <div>{errors.phonenumber}</div> : null}
          <br />
          <br />
          <Field name="password" type="password" placeholder="Enter your password"/>
          {errors.password && touched.password? <div>{errors.password}</div> : null}
          <br />
          <br />
          
          <button className='btn' type="submit">Submit</button>
          <br />
          if you don"t have account
          <br /><Link href="./register">go to register</Link>
         
        </Form>
      )}
    </Formik>
  </div>
)}
   
export default loginpage