import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'; //import material ui

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Utils/firebase";

const defaultTheme = createTheme();

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
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
              margin="small"
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
              sm={{ mt: 2, mb: 2
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
