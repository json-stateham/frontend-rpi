import { useField } from 'formik'
import styles from './index.module.scss'

const FormField = ({ icon, className, ...props }: any) => {
  const [field, meta] = useField(props)

  return (
    <div className={className}>
      <label htmlFor={props.name} className={styles.input}>
        {icon && <span className={styles.iconWrapper}>{icon}</span>}
        <input {...field} {...props} tabIndex={1} />
      </label>
      {meta.touched && meta.error && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  )
}

export { FormField }
