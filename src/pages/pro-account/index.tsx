import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { Layout } from 'ui/layout'
import { Link } from 'ui/link'
import { Text } from 'ui/text'
import { Button } from 'ui/button'
import { FormField } from 'ui/form-field'
import HeroImage from './assets/pro-account-illustraition.svg'

const ProAccount = () => {
  return (
    <Layout>
      <Text className="mar-top-36 flex justCenter" tag="h1">
        Get Pro Account
      </Text>

      <div className="mar-top-36 flex justCenter">
        <img src={HeroImage} alt="Login" />
      </div>

      <Formik
        initialValues={{
          cardNumber: '',
          ddyy: '',
          cvv: '',
          zip: '',
        }}
        validationSchema={Yup.object({
          cardNumber: Yup.string()
            .typeError('Not a valid expiration date. Example: MM/YY')
            .max(16, 'Card number should be 16 numbers')
            .matches(
              /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
              'Must be a valid credit card number',
            )
            .required('Required'),
          ddyy: Yup.string().required('Required').min(4, 'Must be 4 numbers'),
          cvv: Yup.string().required('Required').min(3, 'Must be 3 numbers'),
          zip: Yup.string().required('Required').min(6, 'Must be 6 numbers'),
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
            name="cardNumber"
            maxLength={16}
            type="text"
            placeholder="Card Number"
          />

          <div className="flex justEnd gap-14 mar-top-36">
            <FormField
              maxLength={4}
              name="ddyy"
              type="text"
              placeholder="DD/YY"
            />
            <FormField
              maxLength={3}
              name="cvv"
              type="password"
              placeholder="CVV"
            />
          </div>

          <Text variant="secondary" className="flex justEnd mar-top-10">
            What’s this?
          </Text>

          <FormField
            className="mar-top-14"
            maxLength={6}
            name="zip"
            type="string"
            placeholder="ZIP/Postal Code"
          />

          <Button
            className="mar-top-36"
            type="submit"
            variant="tertiary"
            tabIndex={1}
          >
            UPGRADE
          </Button>
        </Form>
      </Formik>
    </Layout>
  )
}

export default ProAccount
