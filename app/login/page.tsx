'use client'
import '../login/login.css'
import styles from '../../styles/Form.module.css'

import Link from 'next/link'
import { useFormik } from 'formik'
import { login_validate, register_validate } from '../lib/validate'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Login() {

  useEffect(() => {
    const signUpButton = document.querySelector('#signUp')
    const signInButton = document.querySelector('#signIn')
    const container = document.querySelector('.container')

    signUpButton?.addEventListener('click', () => container?.classList.add('right-panel-active'))
    signInButton?.addEventListener('click', () => container?.classList.remove('right-panel-active'))
  },[])

  return (
    <div className="w-full max-w-[1280px] ">
      <div className="flex justify-center">
        <div className={`container h-[500px] w-[800px] max-w-full shadow-xl rounded-2xl relative overflow-hidden`}>

          <SignUpForm />

          <SignInForm />

          <div className='overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform ease-in-out duration-[600ms] z-[100]'>
            <div className={`overlay bg-emerald-600 text-white relative left-[-100%] h-full w-[200%] transition-transform ease-in-out duration-[600ms] ${styles.overlay}`}>

              {/* <div className="overlay-panel flex flex-col gap-3 justify-center items-center w-[400px] h-[500px] bg-emerald-600"> */}
              <div className={`overlay-panel overlay-left absolute bg-emerald-600 top-0 flex flex-col justify-center items-center gap-3 h-full w-1/2 text-center translate-x-0 transition-transform ease-in-out duration-[600ms]`}>
                <span className="text-3xl font-bold ">Welcome Back</span>
                <span>Login to continue your journey</span>
                <button className="py-1 px-2 border border-white rounded bg-emerald-900 hover:bg-emerald-800 active:scale-[.98] transition-transform" id='signIn'>Sign In</button>
              </div>

              {/* <div className="overlay-panel flex flex-col gap-3 justify-center items-center w-[400px] h-[500px] bg-emerald-600"> */}
              <div className={`overlay-panel overlay-right absolute bg-emerald-600 top-0 flex flex-col justify-center items-center gap-3 h-full w-1/2 text-center translate-x-0 transition-transform ease-in-out duration-[600ms]`}>
                <span className="text-3xl font-bold ">Hello, Friend!</span>
                <span>Enter your info and start your journey with us</span>
                <button className="py-1 px-2 border border-white rounded bg-emerald-900 hover:bg-emerald-800 active:scale-[.98] transition-transform" id='signUp'>Sign Up</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SignInForm = () => {

  type LoginForm = {
    email: string,
    password: string,
  }

  const [ rememberMe, setRememberMe ] = useState(false)
  const [ show, setShow ] = useState(false)
  const [ loginError, setLoginError ] = useState(false)
  const router = useRouter()

  const handleSubmitLogin = async (values: LoginForm) => {
    setLoginError(false)
    const status = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/"
    })
    if(!status?.ok) {
      setLoginError(true)
    }
    if(status?.ok) {
      router.push(status.url || "/")
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: login_validate,
    onSubmit: handleSubmitLogin
  })

  return (
    <div className={`form-container sign-in-container items-center ${styles.form_container} left-0 w-1/2 z-[2]`}>
      <div className='flex flex-col justify-between w-full h-[350px]'>
        <div className='h-[3rem] flex items-center'>
          <span className='text-3xl'>Sign in</span>
        </div>
        {loginError ? <span className='self-center text-rose-400'>Email or Password is incorrect</span> : <></>}
        <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit} key="signIn">
          <div className='flex flex-col'>
            <label className='text-xs font-bold uppercase mb-1'>email</label>
            <div className={`flex bg-emerald-100 rounded-md w-full ${formik.errors.email && formik.touched.email || loginError ? 'border border-rose-600' : ''}`}>
              <input
                className='text-md p-3 rounded-md bg-transparent focus:outline-none w-full'
                type="text"
                placeholder="Email"
                {...formik.getFieldProps('email')}
                />
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-xs font-bold uppercase mb-1'>password</label>
            <div className={`flex bg-emerald-100 rounded-md w-full items-center ${formik.errors.password && formik.touched.password || loginError ? 'border border-rose-600' : ''}`}>
              <input
                className='text-md p-3 rounded-md bg-transparent focus:outline-none w-full'
                type={`${show ? 'text' : 'password'}`}
                placeholder="Password"
                {...formik.getFieldProps('password')}
              />
              <svg 
                className={`w-8 h-8 mx-2 cursor-pointer stroke-[4] hover:stroke-orange-200 ${show ? 'fill-orange-400 stroke-orange-200' : 'fill-current stroke-current'}`}
                viewBox="0 0 192 192" 
                xmlns="http://www.w3.org/2000/svg" 
                onClick={() => setShow(!show)}
              >
                <path d="M140.424 38.019a3.6 3.6 0 0 1-1.777-.462C123.81 29.934 110.983 26.7 95.528 26.7c-15.223 0-29.75 3.619-42.964 10.857-1.854 1.001-4.172.308-5.254-1.54-1.005-1.848-.31-4.235 1.545-5.236C63.228 22.85 78.992 19 95.528 19c16.537 0 30.91 3.619 46.673 11.55 1.932 1.155 2.628 3.465 1.623 5.313-.695 1.386-1.932 2.156-3.4 2.156ZM29.846 78.444a4.036 4.036 0 0 1-2.24-.693c-1.624-1.232-2.165-3.619-.928-5.39 7.65-10.78 17.386-19.25 28.977-25.179 24.419-12.474 55.328-12.551 79.669-.077 11.591 5.929 21.327 14.245 28.977 25.025 1.237 1.694.773 4.158-.927 5.39-1.777 1.232-4.173.847-5.409-.77-6.955-9.856-15.764-17.479-26.196-22.792-22.177-11.319-50.536-11.319-72.636.077-10.51 5.39-19.319 13.09-26.273 22.715-.618 1.155-1.778 1.694-3.014 1.694Zm48.296 92.939c-1.005 0-1.932-.385-2.705-1.155-6.722-6.699-10.354-11.011-15.532-20.328-5.332-9.471-8.113-21.021-8.113-33.418 0-22.869 19.627-41.503 43.736-41.503 24.11 0 43.737 18.634 43.737 41.503 0 1.021-.407 2-1.132 2.722a3.87 3.87 0 0 1-5.464 0 3.844 3.844 0 0 1-1.131-2.722c0-18.634-16.15-33.803-36.01-33.803-19.859 0-36.01 15.169-36.01 33.803 0 11.088 2.474 21.329 7.187 29.568 4.946 8.932 8.346 12.705 14.296 18.711a3.943 3.943 0 0 1 0 5.467c-.927.77-1.855 1.155-2.86 1.155Zm55.405-14.245c-9.196 0-17.309-2.31-23.955-6.853-11.514-7.777-18.391-20.405-18.391-33.803 0-1.021.407-2 1.132-2.722a3.871 3.871 0 0 1 5.464 0 3.843 3.843 0 0 1 1.131 2.722c0 10.857 5.564 21.098 14.991 27.412 5.487 3.696 11.9 5.467 19.628 5.467 1.854 0 4.945-.231 8.036-.77 2.087-.385 4.173 1.001 4.482 3.157.386 2.002-1.005 4.081-3.168 4.466-4.405.847-8.268.924-9.35.924ZM118.015 173h-1.005c-12.286-3.542-20.323-8.085-28.745-16.324-10.819-10.626-16.769-24.948-16.769-40.194 0-12.474 10.664-22.638 23.8-22.638 13.137 0 23.801 10.164 23.801 22.638 0 8.239 7.341 14.938 16.072 14.938 8.887 0 16.073-6.699 16.073-14.938 0-29.029-25.114-52.591-56.023-52.591-21.945 0-42.191 12.166-51.077 31.031-3.014 6.237-4.56 13.552-4.56 21.56 0 6.006.541 15.477 5.178 27.797.773 2.002-.232 4.235-2.241 4.928-2.01.693-4.25-.308-4.946-2.233-3.863-10.087-5.64-20.174-5.64-30.492 0-9.24 1.777-17.633 5.254-24.948 10.277-21.483 33.073-35.42 58.032-35.42 35.082 0 63.751 27.027 63.751 60.291 0 12.474-10.664 22.638-23.801 22.638-13.136 0-23.8-10.164-23.8-22.638 0-8.239-7.186-14.938-16.073-14.938-8.886 0-16.072 6.699-16.072 14.938 0 13.167 5.1 25.487 14.45 34.727 7.341 7.238 14.373 11.242 25.268 14.168 2.086.616 3.246 2.772 2.705 4.774-.387 1.771-2.009 2.926-3.632 2.926Z"/>
              </svg>
            </div>
          </div>
          <button className='w-full p-3 bg-emerald-600 rounded-md text-white hover:bg-emerald-800 active:scale-[.98] transition-transform'>Sign In</button>
          <div className='flex justify-between'>
            <div>
              <input id="uploaded" type="checkbox" value="uploaded" name="avatar-type" checked={rememberMe} onChange={(e) => setRememberMe(!rememberMe)} />
              <label className="ml-2" htmlFor="uploaded">Remember me?</label>
            </div>
            <div>
              <Link href="/forgot-password">Forgot Password</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

const SignUpForm = () => {

  type SignUpForm = {
    name: string,
    email: string,
    password: string,
    cPassword: string,
  }

  const [ show, setShow ] = useState(false)
  const [ registerError, setRegisterError ] = useState(false)
  // const router = useRouter()

  const handleSubmitRegister = async (values: SignUpForm) => {

    console.log(values)
    // setRegisterError(false)
    // const status = await signIn("credentials", {
    //   email: values.email,
    //   password: values.password,
    //   redirect: false,
    //   callbackUrl: "/"
    // })
    // if(!status?.ok) {
    //   setRegisterError(true)
    // }
    // if(status?.ok) {
    //   router.push(status.url || "/")
    // }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cPassword: '',
    },
    validate: register_validate,
    onSubmit: handleSubmitRegister
  })
  
  return (
    <div className={`form-container sign-up-container flex-col justify-between ${styles.form_container} left-0 w-1/2 z-[1] opacity-0`} >
      <div className='h-[3rem] flex items-center'>
        <span className='text-3xl'>Create Account</span>
      </div>
      {registerError ? <span className='self-center text-rose-400'>All fields must be filled in</span> : <></>}
      <form className='flex flex-col gap-2' onSubmit={formik.handleSubmit} key="signIn">

        <div className='flex flex-col'>
          <label className='text-xs font-bold uppercase mb-1'>Full name</label>
          <div className={`flex bg-emerald-100 rounded-md w-full ${formik.errors.name && formik.touched.name || registerError ? 'border border-rose-600' : ''}`}>
            <input
              className='text-md p-3 rounded-md bg-transparent focus:outline-none w-full'
              type="text"
              placeholder="First Name & Last Name"
              {...formik.getFieldProps('name')}
              />
          </div>
        </div>
        <div className='flex flex-col'>
          <label className='text-xs font-bold uppercase mb-1'>email</label>
          <div className={`flex bg-emerald-100 rounded-md w-full ${formik.errors.email && formik.touched.email || registerError ? 'border border-rose-600' : ''}`}>
            <input
              className='text-md p-3 rounded-md bg-transparent focus:outline-none w-full'
              type="text"
              placeholder="Email"
              {...formik.getFieldProps('email')}
              />
          </div>
        </div>

        <div className='flex flex-col'>
          <label className='text-xs font-bold uppercase mb-1'>password</label>
          <div className={`flex bg-emerald-100 rounded-md w-full items-center ${formik.errors.password && formik.touched.password || registerError ? 'border border-rose-600' : ''}`}>
            <input
              className='text-md p-3 rounded-md bg-transparent focus:outline-none w-full'
              type={`${show ? 'text' : 'password'}`}
              placeholder="Password"
              {...formik.getFieldProps('password')}
            />
            <svg 
              className={`w-8 h-8 mx-2 cursor-pointer stroke-[4] hover:stroke-orange-200 ${show ? 'fill-orange-400 stroke-orange-200' : 'fill-current stroke-current'}`}
              viewBox="0 0 192 192" 
              xmlns="http://www.w3.org/2000/svg" 
              onClick={() => setShow(!show)}
            >
              <path d="M140.424 38.019a3.6 3.6 0 0 1-1.777-.462C123.81 29.934 110.983 26.7 95.528 26.7c-15.223 0-29.75 3.619-42.964 10.857-1.854 1.001-4.172.308-5.254-1.54-1.005-1.848-.31-4.235 1.545-5.236C63.228 22.85 78.992 19 95.528 19c16.537 0 30.91 3.619 46.673 11.55 1.932 1.155 2.628 3.465 1.623 5.313-.695 1.386-1.932 2.156-3.4 2.156ZM29.846 78.444a4.036 4.036 0 0 1-2.24-.693c-1.624-1.232-2.165-3.619-.928-5.39 7.65-10.78 17.386-19.25 28.977-25.179 24.419-12.474 55.328-12.551 79.669-.077 11.591 5.929 21.327 14.245 28.977 25.025 1.237 1.694.773 4.158-.927 5.39-1.777 1.232-4.173.847-5.409-.77-6.955-9.856-15.764-17.479-26.196-22.792-22.177-11.319-50.536-11.319-72.636.077-10.51 5.39-19.319 13.09-26.273 22.715-.618 1.155-1.778 1.694-3.014 1.694Zm48.296 92.939c-1.005 0-1.932-.385-2.705-1.155-6.722-6.699-10.354-11.011-15.532-20.328-5.332-9.471-8.113-21.021-8.113-33.418 0-22.869 19.627-41.503 43.736-41.503 24.11 0 43.737 18.634 43.737 41.503 0 1.021-.407 2-1.132 2.722a3.87 3.87 0 0 1-5.464 0 3.844 3.844 0 0 1-1.131-2.722c0-18.634-16.15-33.803-36.01-33.803-19.859 0-36.01 15.169-36.01 33.803 0 11.088 2.474 21.329 7.187 29.568 4.946 8.932 8.346 12.705 14.296 18.711a3.943 3.943 0 0 1 0 5.467c-.927.77-1.855 1.155-2.86 1.155Zm55.405-14.245c-9.196 0-17.309-2.31-23.955-6.853-11.514-7.777-18.391-20.405-18.391-33.803 0-1.021.407-2 1.132-2.722a3.871 3.871 0 0 1 5.464 0 3.843 3.843 0 0 1 1.131 2.722c0 10.857 5.564 21.098 14.991 27.412 5.487 3.696 11.9 5.467 19.628 5.467 1.854 0 4.945-.231 8.036-.77 2.087-.385 4.173 1.001 4.482 3.157.386 2.002-1.005 4.081-3.168 4.466-4.405.847-8.268.924-9.35.924ZM118.015 173h-1.005c-12.286-3.542-20.323-8.085-28.745-16.324-10.819-10.626-16.769-24.948-16.769-40.194 0-12.474 10.664-22.638 23.8-22.638 13.137 0 23.801 10.164 23.801 22.638 0 8.239 7.341 14.938 16.072 14.938 8.887 0 16.073-6.699 16.073-14.938 0-29.029-25.114-52.591-56.023-52.591-21.945 0-42.191 12.166-51.077 31.031-3.014 6.237-4.56 13.552-4.56 21.56 0 6.006.541 15.477 5.178 27.797.773 2.002-.232 4.235-2.241 4.928-2.01.693-4.25-.308-4.946-2.233-3.863-10.087-5.64-20.174-5.64-30.492 0-9.24 1.777-17.633 5.254-24.948 10.277-21.483 33.073-35.42 58.032-35.42 35.082 0 63.751 27.027 63.751 60.291 0 12.474-10.664 22.638-23.801 22.638-13.136 0-23.8-10.164-23.8-22.638 0-8.239-7.186-14.938-16.073-14.938-8.886 0-16.072 6.699-16.072 14.938 0 13.167 5.1 25.487 14.45 34.727 7.341 7.238 14.373 11.242 25.268 14.168 2.086.616 3.246 2.772 2.705 4.774-.387 1.771-2.009 2.926-3.632 2.926Z"/>
            </svg>
          </div>
        </div>

        <div className='flex flex-col'>
          <label className='text-xs font-bold uppercase mb-1'>confirm password</label>
          <div className={`flex bg-emerald-100 rounded-md w-full items-center ${formik.errors.cPassword && formik.touched.cPassword || registerError ? 'border border-rose-600' : ''}`}>
            <input
              className='text-md p-3 rounded-md bg-transparent focus:outline-none w-full'
              type={`${show ? 'text' : 'password'}`}
              placeholder="Confirm Password"
              {...formik.getFieldProps('cPassword')}
            />
            <svg 
              className={`w-8 h-8 mx-2 cursor-pointer stroke-[4] hover:stroke-orange-200 ${show ? 'fill-orange-400 stroke-orange-200' : 'fill-current stroke-current'}`}
              viewBox="0 0 192 192" 
              xmlns="http://www.w3.org/2000/svg" 
              onClick={() => setShow(!show)}
            >
              <path d="M140.424 38.019a3.6 3.6 0 0 1-1.777-.462C123.81 29.934 110.983 26.7 95.528 26.7c-15.223 0-29.75 3.619-42.964 10.857-1.854 1.001-4.172.308-5.254-1.54-1.005-1.848-.31-4.235 1.545-5.236C63.228 22.85 78.992 19 95.528 19c16.537 0 30.91 3.619 46.673 11.55 1.932 1.155 2.628 3.465 1.623 5.313-.695 1.386-1.932 2.156-3.4 2.156ZM29.846 78.444a4.036 4.036 0 0 1-2.24-.693c-1.624-1.232-2.165-3.619-.928-5.39 7.65-10.78 17.386-19.25 28.977-25.179 24.419-12.474 55.328-12.551 79.669-.077 11.591 5.929 21.327 14.245 28.977 25.025 1.237 1.694.773 4.158-.927 5.39-1.777 1.232-4.173.847-5.409-.77-6.955-9.856-15.764-17.479-26.196-22.792-22.177-11.319-50.536-11.319-72.636.077-10.51 5.39-19.319 13.09-26.273 22.715-.618 1.155-1.778 1.694-3.014 1.694Zm48.296 92.939c-1.005 0-1.932-.385-2.705-1.155-6.722-6.699-10.354-11.011-15.532-20.328-5.332-9.471-8.113-21.021-8.113-33.418 0-22.869 19.627-41.503 43.736-41.503 24.11 0 43.737 18.634 43.737 41.503 0 1.021-.407 2-1.132 2.722a3.87 3.87 0 0 1-5.464 0 3.844 3.844 0 0 1-1.131-2.722c0-18.634-16.15-33.803-36.01-33.803-19.859 0-36.01 15.169-36.01 33.803 0 11.088 2.474 21.329 7.187 29.568 4.946 8.932 8.346 12.705 14.296 18.711a3.943 3.943 0 0 1 0 5.467c-.927.77-1.855 1.155-2.86 1.155Zm55.405-14.245c-9.196 0-17.309-2.31-23.955-6.853-11.514-7.777-18.391-20.405-18.391-33.803 0-1.021.407-2 1.132-2.722a3.871 3.871 0 0 1 5.464 0 3.843 3.843 0 0 1 1.131 2.722c0 10.857 5.564 21.098 14.991 27.412 5.487 3.696 11.9 5.467 19.628 5.467 1.854 0 4.945-.231 8.036-.77 2.087-.385 4.173 1.001 4.482 3.157.386 2.002-1.005 4.081-3.168 4.466-4.405.847-8.268.924-9.35.924ZM118.015 173h-1.005c-12.286-3.542-20.323-8.085-28.745-16.324-10.819-10.626-16.769-24.948-16.769-40.194 0-12.474 10.664-22.638 23.8-22.638 13.137 0 23.801 10.164 23.801 22.638 0 8.239 7.341 14.938 16.072 14.938 8.887 0 16.073-6.699 16.073-14.938 0-29.029-25.114-52.591-56.023-52.591-21.945 0-42.191 12.166-51.077 31.031-3.014 6.237-4.56 13.552-4.56 21.56 0 6.006.541 15.477 5.178 27.797.773 2.002-.232 4.235-2.241 4.928-2.01.693-4.25-.308-4.946-2.233-3.863-10.087-5.64-20.174-5.64-30.492 0-9.24 1.777-17.633 5.254-24.948 10.277-21.483 33.073-35.42 58.032-35.42 35.082 0 63.751 27.027 63.751 60.291 0 12.474-10.664 22.638-23.801 22.638-13.136 0-23.8-10.164-23.8-22.638 0-8.239-7.186-14.938-16.073-14.938-8.886 0-16.072 6.699-16.072 14.938 0 13.167 5.1 25.487 14.45 34.727 7.341 7.238 14.373 11.242 25.268 14.168 2.086.616 3.246 2.772 2.705 4.774-.387 1.771-2.009 2.926-3.632 2.926Z"/>
            </svg>
          </div>
        </div>

        <button className='w-full p-3 mt-2 bg-emerald-600 rounded-md text-white hover:bg-emerald-800 active:scale-95 transition-transform'>Sign Up</button>

      </form>
    </div>
  )
}