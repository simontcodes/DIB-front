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
  } else if (!values.name.includes(" ")) {
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