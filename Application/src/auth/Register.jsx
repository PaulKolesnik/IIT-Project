import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import * as usersActions from '../store/actions/users'
import './auth.css'

const Register = (props) => {
	const [redirect, redirectHandler] = useState(false)
	const [inputValues, setInputValues] = useState({
		email: '',
		password: ''
	})

	const handleOnChange = (event) => {
		const { name, value } = event.target
		setInputValues({ ...inputValues, [name]: value })
	}

    const dispatch = useDispatch()

	const handleSubmit = (event) => {
		event.preventDefault()
		fetch('/auth/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				...inputValues,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				if (response.status === 400) {
					alert(response.message)
				} else {
					localStorage.setItem('email', response.email)
					localStorage.setItem('_id', response.id)
					localStorage.setItem('token', response.token)
					dispatch(
						usersActions.loginUser(
							inputValues.email,
							response.id,
							response.token
						)
					)
					redirectHandler(true)
				}
			})
			.catch((error) => {
				console.log(error)
				alert('An error occured!')
			})
	}

	if (redirect)
		return (
			<Redirect
				to={{
					pathname: '/feeds'
				}}
			/>
		)
	else
		return (
			<Container>
				<h1>Register</h1>
				<Form onSubmit={handleSubmit}>

					<Form.Group controlId='user-email'>
						<Form.Label>Email</Form.Label>
						<Form.Control className='formc'
							type='email'
							placeholder='Enter Email'
							name='email'
							onChange={handleOnChange}
							required
							style={{textAlign: 'center', width:'40%', background:'lightblue'}}
						/>

					</Form.Group>
					<Form.Group controlId='user-password'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Enter Password'
							name='password'
							onChange={handleOnChange}
							required
							style={{textAlign: 'center', width:'40%', background:'lightblue'}}
						/>

					</Form.Group>
					<Button variant='secondary' type='submit'>
						הירשם
					</Button>
				</Form>
			</Container>
		)
}

export default Register
