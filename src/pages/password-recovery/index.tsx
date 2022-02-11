import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { Layout } from 'ui/layout'
import { Link } from 'ui/link'
import { Text } from 'ui/text'
import { Button } from 'ui/button'
import { FormField } from 'ui/form-field'
import HeroImage from './assets/password-recovery-illustration.svg'

import { UserIcon } from 'ui/icons/UserIcon'

const PasswordRecovery = () => {
  return (
    <Layout>
      <div className="mar-top-36 flex justCenter">
        <img src={HeroImage} alt="Login" />
      </div>
      <Text className="mar-top-36 flex justCenter" tag="h1">
        Forgot Password
      </Text>

      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Incorrent email address')
            .required('Required'),
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

          <Button
            className="mar-top-36"
            type="submit"
            variant="primary"
            tabIndex={1}
          >
            RESET
          </Button>
        </Form>
      </Formik>

      <div className="flex justCenter mar-top-200">
        <Text className="pad-right-4" tag="p" variant="secondary">
          Already have an account?
        </Text>
        <Link className="secondary" to="/login">
          Login here
        </Link>
      </div>
    </Layout>
  )
}

export default PasswordRecovery
