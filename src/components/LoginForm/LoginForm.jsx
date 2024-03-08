import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/auth/operations'
import { toast } from 'react-hot-toast'
import css from './LoginForm.module.css'
import Button from '@mui/material/Button'

const LoginForm = () => {
	const dispatch = useDispatch()

	const initialValues = {
		email: '',
		password: '',
	}

	const onSubmit = (values, { resetForm }) => {
		dispatch(logIn(values))
			.unwrap()
			.then(() => {
				toast.success('login success')
				resetForm()
			})
			.catch(() => {
				toast.error('login error')
			})
	}

	const validate = values => {
		const errors = {}
		if (!values.email) {
			errors.email = 'Email is required'
		}
		if (!values.password) {
			errors.password = 'Password is required'
		}
		return errors
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validate={validate}
		>
			<Form className={css.form} autoComplete='off'>
				<div className={css.label}>
					<label htmlFor='email'>Email</label>
					<Field type='email' id='email' name='email' />
					<ErrorMessage name='email' component='div' className={css.error} />
				</div>
				<div className={css.label}>
					<label htmlFor='password'>Password</label>
					<Field type='password' id='password' name='password' />
					<ErrorMessage name='password' component='div' className={css.error} />
				</div>
				<Button variant='contained' className={css.btn} type='submit'>
					Log In
				</Button>
			</Form>
		</Formik>
	)
}

export default LoginForm
