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
					pathname: '/blog',
					props: { email: inputValues.email },
				}}
			/>
		)
	else
		return (
			<Container>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId='user-email'>
						<Form.Label>email</Form.Label>
						<Form.Control
							type='text'
							name='email'
							placeholder='Enter email'
							// value={this.state.email}
							onChange={handleOnChange}
							required
						/>
					</Form.Group>
					<Form.Group controlId='user-password'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							name='password'
							placeholder='Enter password'
							// value={this.state.password}
							onChange={handleOnChange}
						/>
					</Form.Group>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</Container>
		)
}

export default LogIn
