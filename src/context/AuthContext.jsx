import { createContext, useState, useEffect } from 'react'

// scatola globale
export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('currentUser')
    return saved ? JSON.parse(saved) : null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user))
    } else {
      localStorage.removeItem('currentUser')
    }
  }, [user])

  const register = ({ username, email, password, avatar }) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')

    const exists = users.some((u) => u.email === email)
    if (exists) {
      return { success: false, message: 'Email già registrata' }
    }

    const newUser = { username, email, password, avatar }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    return { success: true }
  }

  const login = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const found = users.find(
      (u) => u.email === email && u.password === password
    )

    if (!found) {
      return { success: false, message: 'Credenziali errate' }
    }

    setUser({ username: found.username, email: found.email, avatar: found.avatar})
    return { success: true }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}