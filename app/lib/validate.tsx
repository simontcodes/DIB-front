type SignInForm = {
  email: string,
  password: string,
}
type SignUpForm = {
  name: string,
  email: string,
  password: string,
  cPassword: string,
}
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
// type CreateProjectForm = {
//   companyName: string,
//   logo: string,
//   contactInfo: string,
//   teamName: string,
//   rolesNeeded: {
//     fullstackDeveloper: number,
//     frontendDeveloper: number,
//     backendDeveloper: number,
//     pm: number,
//     qaTester: number,
//     uxui: number,
//     devOps: number,
//   }
// }

export function login_validate(values: SignInForm) {
  const errors = {}

  // validation for email
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // validation for password
  if (!values.password) {
    errors.password = "Required"
  } else if (values.password.length < 8) {
    errors.password = "Must be greater than 8 characters"
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid password"
  }

  return errors
}

export function register_validate(values: SignUpForm) {
  const errors = {}

  // validation for name
  if(!values.name) {
    errors.name = 'Required'
  } else if (!/[A-Za-z]+\s[A-Za-z]+/i.test(values.name)) {
    errors.name = 'Please entre both First and Last name'
  }

  // validation for email
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // validation for password
  if (!values.password) {
    errors.password = "Required"
  } else if (values.password.length < 8) {
    errors.password = "Must be greater than 8 characters"
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)) {
    errors.password = "Must contain at least one capital letter and one number"
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid password"
  }

  // validation for confirming password
  if (!values.cPassword) {
    errors.cPassword = "Required"
  } else if (values.password !== values.cPassword) {
    errors.cPassword = "Passwords do not match"
  }

  return errors
}

export function createProjectForm_validate(values: CreateProjectForm) {
  
  const errors = {}
  
  // validation for company name
  if(!values.companyName) {
    console.log('company error')
    errors.companyName = 'Required'
  }

  // validation for logo
  if(!values.logo) {
    console.log('logo error')
    errors.logo = 'Required'
  }

  // validation for contact info
  if(!values.contactInfo) {
    console.log('contact error')
    errors.contactInfo = 'Required'
  }

  // validation for team name
  if(!values.teamName) {
    console.log('team name error')
    errors.teamName = 'Required'
  }

  // validation for needed roles
  // if(!values.rolesNeeded) {
  //   console.log('')
  //   errors.rolesNeeded = 'Needs at least one'
  // }
  if(!values.fullstackDeveloper) {
    console.log('')
    errors.fullstackDeveloper = 'Needs at least one'
  }
  if(!values.frontendDeveloper) {
    console.log('')
    errors.frontendDeveloper = 'Needs at least one'
  }
  if(!values.backendDeveloper) {
    console.log('')
    errors.backendDeveloper = 'Needs at least one'
  }
  if(!values.pm) {
    console.log('')
    errors.pm = 'Needs at least one'
  }
  if(!values.qaTester) {
    console.log('')
    errors.qaTester = 'Needs at least one'
  }
  if(!values.uxui) {
    console.log('')
    errors.uxui = 'Needs at least one'
  }
  if(!values.devOps) {
    console.log('')
    errors.devOps = 'Needs at least one'
  }

  return errors
}