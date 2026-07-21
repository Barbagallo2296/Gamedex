import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router'
import { Container, Box, TextField, Button, Typography, Alert,} from '@mui/material'
import { AuthContext } from '../context/AuthContext.jsx'

function Register() {
  const { register: registerUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const password = watch('password')

  const onSubmit = (data) => {
    setServerError('')
    const result = registerUser({
      username: data.username,
      email: data.email,
      password: data.password,
      avatar: data.avatar,
    })

    if (result.success) {
      navigate('/login')
    } else {
      setServerError(result.message)
    }
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Registrati
      </Typography>

      {serverError && <Alert severity="error" sx={{ mb: 2 }}>{serverError}</Alert>}

      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          {...register('username', {
            required: 'Lo username è obbligatorio',
            minLength: { value: 3, message: 'Minimo 3 caratteri' },
          })}
          error={!!errors.username}
          helperText={errors.username?.message}
        />

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          {...register('email', {
            required: "L'email è obbligatoria",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Formato email non valido',
            },
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
            minLength: { value: 8, message: 'Minimo 8 caratteri' },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d).+$/,
              message: 'Serve almeno 1 maiuscola e 1 numero',
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <TextField
          fullWidth
          type="password"
          label="Conferma password"
          margin="normal"
          {...register('confirmPassword', {
            required: 'Conferma la password',
            validate: (value) =>
              value === password || 'Le password non coincidono',
          })}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />

        <TextField
          fullWidth
          label="URL immagine profilo (opzionale)"
          margin="normal"
          {...register('avatar', {
            pattern: {
              value: /^https?:\/\/.+/,
              message: 'Deve essere un URL valido (http/https)',
            },
          })}
          error={!!errors.avatar}
          helperText={errors.avatar?.message}
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Registrati
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Hai già un account?{' '}
          <Link to="/login">Accedi</Link>
        </Typography>
      </Box>
    </Container>
  )
}

export default Register