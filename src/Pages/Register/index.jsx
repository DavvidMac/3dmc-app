import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'; //import material ui

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Utils/firebase";

const darkTheme = createTheme({
  palette: {
    
    type: 'dark', // Define o modo escuro
    primary: {
      main: '#1976D2', // Cor primária
    },
    secondary: {
      main: '#FF5722', // Cor secundária
    },
    backgroundColor: {
      primary: {
      main: '#000000',},
    },
  },
});

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    if (password === password2) {
      if (email !== "" && password !== "") {
        await createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            navigate("/produtos", { replace: true });
          })
          .catch(() => {
            alert("erro ao fazer cadastro");
            console.log("erro ao fazer cadastro");
          });
      } else {
        alert("preencha todos os campos");
      }
    }
    else{
      alert("Senhas não conferem");
    }
  }

  return (
    <ThemeProvider  theme={darkTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={require("../../Components/NavBar/Images/Logo.png")}
            className="logo-container"
            alt="Logo"
          />
          <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="repeatpassword"
              label="Repeat Password"
              type="password"
              id="repeatpassword"
              autoComplete="current-password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2
               }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
