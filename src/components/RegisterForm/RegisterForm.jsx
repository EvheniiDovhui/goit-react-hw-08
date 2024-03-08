import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/operations'
import css from './RegisterForm.module.css'
import Button from '@mui/material/Button'
import * as Yup from 'yup'

const RegisterForm = () => {
	const dispatch = useDispatch()

	const initialValues = {
		name: '',
		email: '',
		password: '',
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Username is required'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		password: Yup.string()
			.min(7, 'Password must be at least 7 characters')
			.required('Password is required'),
	})

	const onSubmit = (values, { resetForm }) => {
		dispatch(register(values))
		resetForm()
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			<Form className={css.form} autoComplete='off'>
				<div className={css.label}>
					<label htmlFor='name'>Username</label>
					<Field type='text' id='name' name='name' />
					<ErrorMessage name='name' component='div' className={css.error} />
				</div>
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
					Register
				</Button>
			</Form>
		</Formik>
	)
}

export default RegisterForm
