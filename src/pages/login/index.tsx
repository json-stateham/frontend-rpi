import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { Layout } from 'ui/layout'
import { Link } from 'ui/link'
import { Text } from 'ui/text'
import { Button } from 'ui/button'
import { FormField } from 'ui/form-field'
import HeroImage from './assets/login-illustration.svg'

import { UserIcon } from 'ui/icons/UserIcon'
import { LockIcon } from 'ui/icons/LockIcon'

const Login = () => {
  return (
    <Layout>
      <div className="mar-top-36 flex justCenter">
        <img src={HeroImage} alt="Login" />
      </div>
      <Text className="mar-top-36 flex justCenter" tag="h1">
        Welcome Back!
      </Text>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Incorrent email address')
            .required('Required'),
          password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password hould be 8 characters minimum'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <Form className="mar-top-36">
          <FormField
            icon={<UserIcon />}
            name="email"
            type="text"
            placeholder="example@email.com"
          />

          <FormField
            className="mar-top-36"
            icon={<LockIcon />}
            name="password"
            type="password"
            placeholder="password"
          />

          <div className="flex justEnd mar-top-10">
            <Link className="secondary" to="/password-recovery">
              Forgot password?
            </Link>
          </div>

          <Button
            className="mar-top-36"
            type="submit"
            variant="primary"
            tabIndex={1}
          >
            LOGIN
          </Button>
        </Form>
      </Formik>
      <Text className="flex justCenter mar-top-50" tag="p" variant="secondary">
        Or connect with social
      </Text>
      <div className="flex gap-14 mar-top-36">
        <Button variant="primary">Facebook</Button>
        <Button variant="secondary">Google</Button>
      </div>
    </Layout>
  )
}

export default Login
