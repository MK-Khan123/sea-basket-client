import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <NavLink style={{ textDecoration: 'none' }} to="/home">
        Sea Basket
      </NavLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {

  document.title = 'Admin Login';

  //Using Firebase for login
  const { signIn } = useAuth();

  //For handling Registration (Sign up)
  // const {
  //   register: registerSignUp,
  //   handleSubmit: handleSubmitRegistration
  // } = useForm();

  // const registration = data => {
  //   const { registrationEmail, registrationPassword } = data;
  //   return registerUsingEmail(registrationEmail, registrationPassword);
  // };

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Button
              onClick={() => signIn("admin@seabasket.com", "admin1")}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In as an Admin
            </Button>
          </Box>
          
          {/* Used this piece of code to register admin@seabasket.com for the first time in Firebase
          <Box
            component='h5'
            sx={{
              fontSize: '2rem',
              fontWeight: '500',
              marginTop: 0,
              marginBottom: '1.5rem'
            }}
          >
            Register
          </Box>
          <form
            onSubmit={handleSubmitRegistration(registration)}
            style={{
              border: '2px solid #DEE2E6',
              borderRadius: '8px',
              padding: '35px 25px'
            }}
          >
            <TextField sx={{ mb: 2 }}
              id="outlined-basic2"
              label="Email"
              type="email"
              size="small"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              {...registerSignUp("registrationEmail", { required: true })}
            />
            <TextField sx={{ mb: 3 }}
              id="outlined-password-input1"
              type="password"
              label="Password"
              size="small"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              {...registerSignUp("registrationPassword", { required: true })}
            />

            <Button
              size='large'
              type="submit"
              sx={{
                backgroundColor: '#FFC107',
                color: 'black',
                '&:hover': { backgroundColor: '#FFCA2C' }
              }}
            >
              Register
            </Button>
          </form> */}

          <NavLink to='/home' style={{ textDecoration: 'none' }}>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Go Back To Home
            </Button>
          </NavLink>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Login;