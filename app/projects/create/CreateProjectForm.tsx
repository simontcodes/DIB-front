'use client'

import '../create/CreateProjectForm.css'

import { useFormik } from 'formik'
import { createProjectForm_validate } from '../../lib/validate'
import { useState, useEffect } from 'react'

type CreateProjectForm = {
  companyName: string,
  logo: string,
  contactInfo: string,
  teamName: string,
  rolesNeeded: [string],
  fullstackDeveloper: number,
  frontendDeveloper: number,
  backendDeveloper: number,
  pm: number,
  qaTester: number,
  uxui: number,
  devOps: number,
}
type CreateProjectFormBody = {
  company: string,
  contactInfo: string,
  logo: string,
  rolesNeeded: [string],
}

export default function CreateProjectForm() {
  
  const handleSubmitForm = async (values: CreateProjectForm) => {
    console.log(values)
  }

  const formik = useFormik({
    initialValues: {
      companyName: '',
      logo: '',
      contactInfo: '',
      teamName: '',
      rolesNeeded: [''],
      fullstackDeveloper: 0,
      frontendDeveloper: 0,
      backendDeveloper: 0,
      pm: 0,
      qaTester: 0,
      uxui: 0,
      devOps: 0,
    },
    validate: createProjectForm_validate,
    // onSubmit: handleSubmitForm
    onSubmit: (values, action) => {
      handleSubmitForm(values)
      action.resetForm()
    }
  })
  
  return (
    <div className="flex flex-col">
      <span className="text-4xl font-bold mb-8">Project Creation Form</span>

      <form className='flex flex-col gap-2' onSubmit={formik.handleSubmit} key="signIn">


        <div className='flex flex-col gap-2'>

          <span className='text-md font-bold uppercase mb-1'>Company</span>

          <div className='flex flex-col'>
            <div className='flex justify-between mb-1 text-xs font-bold uppercase gap-2'>
              <label>Company Name</label>
              {formik.errors.companyName && formik.touched.companyName ? <span className='text-rose-400 '>{formik.errors.companyName}</span> : <></>}
              {/* {nameError ? <span className='text-rose-400 '>{nameError}</span> : <></>} */}
            </div>
            <div className={`flex bg-emerald-100 rounded-md w-full ${formik.errors.companyName && formik.touched.companyName ? 'border border-rose-600' : ''}`}>
              <input
                className='text-md p-3 rounded-md bg-transparent focus:outline-none w-full'
                type="text"
                placeholder="Company Name"
                {...formik.getFieldProps('companyName')}
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex justify-between mb-1 text-xs font-bold uppercase gap-2'>
              <label className='text-xs font-bold uppercase mb-1'>Logo</label>
              {formik.errors.logo && formik.touched.logo ? <span className='text-rose-400'>{formik.errors.logo}</span> : <></>}
            </div>
            <div className={`flex bg-emerald-100 rounded-md w-full items-center ${formik.errors.logo && formik.touched.logo ? 'border border-rose-600' : ''}`}>
              <input
                className='text-md p-3 rounded-md bg-transparent focus:outline-none w-full'
                type='text'
                placeholder="Logo"
                {...formik.getFieldProps('logo')}
              />
            </div>
          </div>

        </div>

        <div className='flex flex-col gap-2'>
          
          <span className='text-md font-bold uppercase mb-1'>Contact Info</span>

          <div className='flex flex-col'>
            <div className='flex justify-between mb-1 text-xs font-bold uppercase gap-2'>
              <label className='text-xs font-bold uppercase mb-1'>Contact Info</label>
              {formik.errors.contactInfo && formik.touched.contactInfo ? <span className='text-rose-400'>{formik.errors.contactInfo}</span> : <></>}
              {/* {emailError ? <span className='text-rose-400'>{emailError}</span> : <></>} */}
            </div>
            <div className={`flex bg-emerald-100 rounded-md w-full ${formik.errors.contactInfo && formik.touched.contactInfo ? 'border border-rose-600' : ''}`}>
              <input
                className='text-md p-3 rounded-md bg-transparent focus:outline-none w-full'
                type="text"
                placeholder="Contact Info"
                {...formik.getFieldProps('contactInfo')}
              />
            </div>
          </div>

        </div>

        <div className='flex flex-col gap-2'>

          <span className='text-md font-bold uppercase mb-1'>Team</span>

          <div className='flex flex-col'>
            <div className='flex justify-between mb-1 text-xs font-bold uppercase gap-2'>
              <label className='text-xs font-bold uppercase mb-1'>Team Name</label>
              {formik.errors.teamName && formik.touched.teamName ? <span className='text-rose-400'>{formik.errors.teamName}</span> : <></>}
              {/* {RolesError ? <span className='text-xs font-bold uppercase mb-1 text-center text-rose-400'>{RolesError}</span> : <></>} */}
            </div>
            <div className={`flex bg-emerald-100 rounded-md w-full items-center ${formik.errors.teamName && formik.touched.teamName ? 'border border-rose-600' : ''}`}>
              <input
                className='text-md p-3 rounded-md bg-transparent focus:outline-none w-full'
                type='text'
                placeholder="Team Name"
                {...formik.getFieldProps('teamName')}
              />
            </div>
          </div>

          <div className='flex flex-col'>
            <span className='text-sm font-bold uppercase mb-1'>Roles</span>

            <div className='flex justify-between mb-1 text-xs font-bold uppercase gap-2'>
              {/* {formik.errors.fullstackDeveloper && formik.touched.fullstackDeveloper ? <span className='text-rose-400'>{formik.errors.fullstackDeveloper}</span> : <></>} */}
              {/* {RolesError ? <span className='text-xs font-bold uppercase mb-1 text-center text-rose-400'>{RolesError}</span> : <></>} */}
            </div>

            <div className={`flex flex-col bg-emerald-100 rounded-md w-full justify-center p-3 ${formik.errors.fullstackDeveloper && formik.touched.fullstackDeveloper ? 'border border-rose-600' : ''}`}>
              <label className='text-xs font-bold uppercase'>
                Fullstack Developer :
                <input
                  className='inputNumber text-md border-b border-emerald-900 rounded-md bg-transparent focus:outline-none text-center ml-3 py-1'
                  type='number'
                  min='0'
                  max='10'
                  placeholder="0"
                  {...formik.getFieldProps('fullstackDeveloper')}
                />
              </label>
            </div>

            <div className={`flex flex-col bg-emerald-100 rounded-md w-full justify-center p-3 ${formik.errors.frontendDeveloper && formik.touched.frontendDeveloper ? 'border border-rose-600' : ''}`}>
              <label className='text-xs font-bold uppercase'>
                Frontend Developer :
                <input
                  className='inputNumber text-md border-b border-emerald-900 rounded-md bg-transparent focus:outline-none text-center ml-3 py-1 '
                  type='number'
                  min='0'
                  max='10'
                  placeholder="0"
                  {...formik.getFieldProps('frontendDeveloper')}
                />
              </label>
            </div>
            
            <div className={`flex flex-col bg-emerald-100 rounded-md w-full justify-center p-3 ${formik.errors.backendDeveloper && formik.touched.backendDeveloper ? 'border border-rose-600' : ''}`}>
              <label className='text-xs font-bold uppercase'>
                Backend Developer :
                <input
                  className='inputNumber text-md border-b border-emerald-900 rounded-md bg-transparent focus:outline-none text-center ml-3 py-1 '
                  type='number'
                  min='0'
                  max='10'
                  placeholder="0"
                  {...formik.getFieldProps('backendDeveloper')}
                />
              </label>
            </div>

            <div className={`flex flex-col bg-emerald-100 rounded-md w-full justify-center p-3 ${formik.errors.pm && formik.touched.pm ? 'border border-rose-600' : ''}`}>
              <label className='text-xs font-bold uppercase'>
                Project Manager :
                <input
                  className='inputNumber text-md border-b border-emerald-900 rounded-md bg-transparent focus:outline-none text-center ml-3 py-1 '
                  type='number'
                  min='0'
                  max='10'
                  placeholder="0"
                  {...formik.getFieldProps('pm')}
                />
              </label>
            </div>

            <div className={`flex flex-col bg-emerald-100 rounded-md w-full justify-center p-3 ${formik.errors.qaTester && formik.touched.qaTester ? 'border border-rose-600' : ''}`}>
              <label className='text-xs font-bold uppercase'>
                QA Tester :
                <input
                  className='inputNumber text-md border-b border-emerald-900 rounded-md bg-transparent focus:outline-none text-center ml-3 py-1 '
                  type='number'
                  min='0'
                  max='10'
                  placeholder="0"
                  {...formik.getFieldProps('qaTester')}
                />
              </label>
            </div>

            <div className={`flex flex-col bg-emerald-100 rounded-md w-full justify-center p-3 ${formik.errors.uxui && formik.touched.uxui ? 'border border-rose-600' : ''}`}>
              <label className='text-xs font-bold uppercase'>
                UX/UI :
                <input
                  className='inputNumber text-md border-b border-emerald-900 rounded-md bg-transparent focus:outline-none text-center ml-3 py-1 '
                  type='number'
                  min='0'
                  max='10'
                  placeholder="0"
                  {...formik.getFieldProps('uxui')}
                />
              </label>
            </div>

            <div className={`flex flex-col bg-emerald-100 rounded-md w-full justify-center p-3 ${formik.errors.devOps && formik.touched.devOps ? 'border border-rose-600' : ''}`}>
              <label className='text-xs font-bold uppercase'>
                DevOps :
                <input
                  className='inputNumber text-md border-b border-emerald-900 rounded-md bg-transparent focus:outline-none text-center ml-3 py-1 '
                  type='number'
                  min='0'
                  max='10'
                  placeholder="0"
                  {...formik.getFieldProps('devOps')}
                />
              </label>
            </div>

          </div>
        </div>
        <button 
          className='w-full p-3 mt-2 bg-emerald-600 rounded-md text-white hover:bg-emerald-800 active:scale-95 transition-transform'
        >Sign Up</button>
      </form>


    </div>
  )
}