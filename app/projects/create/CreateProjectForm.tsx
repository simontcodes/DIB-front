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
  fullstackDeveloper: number,
  frontendDeveloper: number,
  backendDeveloper: number,
  pm: number,
  qaTester: number,
  uxui: number,
  devOps: number,
}
type CreateProjectFormBody = {
  companyName: string,
  logo: string,
  contactInfo: string,
  teamName: string,
  rolesNeeded: {
    fullstackDeveloper: number,
    frontendDeveloper: number,
    backendDeveloper: number,
    pm: number,
    qaTester: number,
    uxui: number,
    devOps: number,
  }
}

export default function CreateProjectForm() {

  const [teamName, setTeamName] = useState('')

  const fetchUser = async () => {
    const res = await fetch(`https://story-shack-cdn-v2.glitch.me/generators/team-name-generator`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json()
    setTeamName(data.data.name.replace('The ',''))
  }

  useEffect(() => {
    fetchUser()
  },[])
 
  const handleSubmitForm = async (values: CreateProjectForm) => {
    const createProjectFormBody: CreateProjectFormBody = {
      companyName: values.companyName,
      logo: values.logo,
      contactInfo: values.contactInfo,
      teamName: values.teamName,
      rolesNeeded: {
        fullstackDeveloper: values.fullstackDeveloper,
        frontendDeveloper: values.frontendDeveloper,
        backendDeveloper: values.backendDeveloper,
        pm: values.pm,
        qaTester: values.qaTester,
        uxui: values.uxui,
        devOps: values.devOps,
      }
    }
    console.log(createProjectFormBody)
  }

  const formik = useFormik({
    initialValues: {
      companyName: '',
      logo: '',
      contactInfo: '',
      teamName: teamName || '',
      fullstackDeveloper: 0,
      frontendDeveloper: 0,
      backendDeveloper: 0,
      pm: 0,
      qaTester: 0,
      uxui: 0,
      devOps: 0,
    },
    validate: createProjectForm_validate,
    onSubmit: (values, action) => {
      handleSubmitForm(values)
      // action.resetForm()
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
                id='teamName'
                className='text-md p-3 rounded-md bg-transparent focus:outline-none w-full'
                type='text'
                placeholder="Team Name"
                {...formik.getFieldProps('teamName')}
                // To be able to auto generate random team name
                // name='teamName'
                // value={teamName}
                // onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
          </div>

          <div className='flex flex-col'>
            <span className='text-sm font-bold uppercase mb-1'>Roles</span>
            <div className='flex justify-between mb-1 text-xs font-bold uppercase gap-2'>
              {/* {formik.errors.fullstackDeveloper && formik.touched.fullstackDeveloper ? <span className='text-rose-400'>{formik.errors.fullstackDeveloper}</span> : <></>} */}
              {/* {RolesError ? <span className='text-xs font-bold uppercase mb-1 text-center text-rose-400'>{RolesError}</span> : <></>} */}
            </div>

            <div className='flex flex-col gap-2'>

              <div className={`flex w-full items-center justify-between`}>
                <div className='text-xs font-bold uppercase mr-2'>
                  <label htmlFor='fullstackDeveloper'>
                    Fullstack Developer :
                  </label>
                  {formik.errors.fullstackDeveloper ? <span className='self-center text-rose-400 ml-2'>{formik.errors.fullstackDeveloper}</span> : <></>}
                </div>
                <div className={`bg-emerald-100 p-3 rounded-md ${formik.errors.fullstackDeveloper && formik.touched.fullstackDeveloper ? 'border border-rose-600' : ''}`}>
                  <input
                    id='fullstackDeveloper'
                    className='inputNumber bg-transparent focus:outline-none text-center w-6'
                    type='number'
                    min='0'
                    max='10'
                    placeholder="0"
                    {...formik.getFieldProps('fullstackDeveloper')}
                  />
                </div>
              </div>

              <div className={`flex w-full items-center justify-between`}>
                <div className='text-xs font-bold uppercase mr-2'>
                  <label htmlFor='frontendDeveloper'>
                    Frontend Developer :
                  </label>
                  { formik.errors.frontendDeveloper ? <span className='self-center text-rose-400 ml-2'>{formik.errors.frontendDeveloper}</span> : <></>}
                </div>
                <div className={`bg-emerald-100 p-3 rounded-md ${formik.errors.frontendDeveloper && formik.touched.frontendDeveloper ? 'border border-rose-600' : ''}`}>
                  <input
                    id='frontendDeveloper'
                    className='inputNumber bg-transparent focus:outline-none text-center w-6'
                    type='number'
                    min='0'
                    max='10'
                    placeholder="0"
                    {...formik.getFieldProps('frontendDeveloper')}
                  />
                </div>
              </div>

              <div className={`flex w-full items-center justify-between`}>
                <div className='text-xs font-bold uppercase mr-2'>
                  <label htmlFor='backendDeveloper'>
                    Backend Developer :
                  </label>
                  { formik.errors.backendDeveloper ? <span className='self-center text-rose-400 ml-2'>{formik.errors.backendDeveloper}</span> : <></>}
                </div>
                <div className={`bg-emerald-100 p-3 rounded-md ${formik.errors.backendDeveloper && formik.touched.backendDeveloper ? 'border border-rose-600' : ''}`}>
                  <input
                    id='backendDeveloper'
                    className='inputNumber bg-transparent focus:outline-none text-center w-6'
                    type='number'
                    min='0'
                    max='10'
                    placeholder="0"
                    {...formik.getFieldProps('backendDeveloper')}
                  />
                </div>
              </div>

              <div className={`flex w-full items-center justify-between`}>
                <div className='text-xs font-bold uppercase mr-2'>
                  <label htmlFor='pm'>
                    Project Manager :
                  </label>
                  { formik.errors.pm ? <span className='self-center text-rose-400 ml-2'>{formik.errors.pm}</span> : <></>}
                </div>
                <div className={`bg-emerald-100 p-3 rounded-md ${formik.errors.pm && formik.touched.pm ? 'border border-rose-600' : ''}`}>
                  <input
                    id='pm'
                    className='inputNumber bg-transparent focus:outline-none text-center w-6'
                    type='number'
                    min='0'
                    max='10'
                    placeholder="0"
                    {...formik.getFieldProps('pm')}
                  />
                </div>
              </div>

              <div className={`flex w-full items-center justify-between`}>
                <div className='text-xs font-bold uppercase mr-2'>
                  <label htmlFor='qaTester'>
                    QA Tester :
                  </label>
                  { formik.errors.qaTester ? <span className='self-center text-rose-400 ml-2'>{formik.errors.qaTester}</span> : <></>}
                </div>
                <div className={`bg-emerald-100 p-3 rounded-md ${formik.errors.qaTester && formik.touched.qaTester ? 'border border-rose-600' : ''}`}>
                  <input
                    id='qaTester'
                    className='inputNumber bg-transparent focus:outline-none text-center w-6'
                    type='number'
                    min='0'
                    max='10'
                    placeholder="0"
                    {...formik.getFieldProps('qaTester')}
                  />
                </div>
              </div>

              <div className={`flex w-full items-center justify-between`}>
                <div className='text-xs font-bold uppercase mr-2'>
                  <label htmlFor='uxui'>
                    UX/UI :
                  </label>
                  { formik.errors.uxui ? <span className='self-center text-rose-400 ml-2'>{formik.errors.uxui}</span> : <></>}
                </div>
                <div className={`bg-emerald-100 p-3 rounded-md ${formik.errors.uxui && formik.touched.uxui ? 'border border-rose-600' : ''}`}>
                  <input
                    id='uxui'
                    className='inputNumber bg-transparent focus:outline-none text-center w-6'
                    type='number'
                    min='0'
                    max='10'
                    placeholder="0"
                    {...formik.getFieldProps('uxui')}
                  />
                </div>
              </div>

              <div className={`flex w-full items-center justify-between`}>
                <div className='text-xs font-bold uppercase mr-2'>
                  <label htmlFor='devOps'>
                    DevOps :
                  </label>
                  { formik.errors.devOps ? <span className='self-center text-rose-400 ml-2'>{formik.errors.devOps}</span> : <></>}
                </div>
                <div className={`bg-emerald-100 p-3 rounded-md ${formik.errors.devOps && formik.touched.devOps ? 'border border-rose-600' : ''}`}>
                  <input
                    id='devOps'
                    className='inputNumber bg-transparent focus:outline-none text-center w-6'
                    type='number'
                    min='0'
                    max='10'
                    placeholder="0"
                    {...formik.getFieldProps('devOps')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button 
          className='w-full p-3 mt-2 bg-emerald-600 rounded-md text-white hover:bg-emerald-800 active:scale-95 transition-transform'
        >Create Project</button>
      </form>
    </div>
  )
}