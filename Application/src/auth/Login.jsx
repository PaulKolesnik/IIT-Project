import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/actions/users'
import './auth.css'
const LogIn = (props) => {
	const [redirect, redirectHandler] = useState(false)
	const [inputValues, setInputValues] = useState({
		email: '',
		password: '',
	})

	const handleOnChange = (event) => {
		const { name, value } = event.target
		setInputValues({ ...inputValues, [name]: value })
	}

	const dispatch = useDispatch()

	const handleSubmit = (event) => {
		event.preventDefault()
		fetch(`/auth/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				...inputValues,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				if (!response.email) alert('The Details not correct.')
				else {
					localStorage.setItem('email', inputValues.email)
					localStorage.setItem('_id', response.id)
					localStorage.setItem('token', response.token)
					dispatch(
						loginUser(
							inputValues.email,
							response.id,
							response.token
						)
					)
					redirectHandler(true)
				}
			})
			.catch((error) => {
				alert(error)
			})
	}

	if (redirect)
		return (
			<Redirect
				to={{
					pathname: '/feeds',
				}}
			/>
		)
	else
		return (
			<Container>
				<h1>Login</h1>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId='user-email'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='text'
							name='email'
							placeholder='Enter Email'
							onChange={handleOnChange}
							required
							style={{ textAlign: 'center', width: '40%', background: 'lightblue' }}
						/>
					</Form.Group>
					<Form.Group controlId='user-password'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							name='password'
							placeholder='Enter Password'
							onChange={handleOnChange}
							required
							style={{ textAlign: 'center', width: '40%', background: 'lightblue' }}
						/>
					</Form.Group>
					<br />
					<Button variant='secondary' type='submit'>
						Login
					</Button>
				</Form>
			</Container>
		)
}

export default LogIn
