import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router'
import {Container, Box, TextField, Button, Typography, Alert,} from '@mui/material'
import { AuthContext } from '../context/AuthContext.jsx'

function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setServerError('')
    const result = login({ email: data.email, password: data.password })

    if (result.success) {
      navigate('/')
    } else {
      setServerError(result.message)
    }
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Accedi
      </Typography>

      {serverError && <Alert severity="error" sx={{ mb: 2 }}>{serverError}</Alert>}

      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          {...register('email', {
            required: "L'email è obbligatoria",
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          margin="normal"
          {...register('password', {
            required: 'La password è obbligatoria',
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Accedi
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Non hai un account?{' '}
          <Link to="/register">Registrati</Link>
        </Typography>
      </Box>
    </Container>
  )
}

export default Login