import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";
import style from './style';
import Copyright from '../../components/Copyright';

const theme = createTheme();

export default function LoginView () {

  const redirect = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    localStorage.setItem('lorem', JSON.stringify(data));
    return redirect('/feed');
  };
  const remember = JSON.parse(localStorage.getItem('lorem')) || [];
  console.log(remember);

  const isLogged = () => {
    if(!remember) {
      return;
    };

    if(remember.remember === true) {
      redirect('/feed');
    };    
  };

  useEffect(() => {
    isLogged();
  }, [remember.remember]);


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }} color="#dadada">
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} sx={ style.bgInfo }
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={ style.loginContainer }
          >
            <Avatar sx={{ m: 1, bgcolor: '#fff', width: '62px', height: '62px' }}>
              <lord-icon
                src="https://cdn.lordicon.com/xtrjgsiz.json"
                trigger="hover"
                colors="primary:#3a3347,secondary:#646e78,tertiary:#66a1ee"
                style={{ width: '56px', height: '56px' }}>
              </lord-icon>
            </Avatar>
            <Typography component="h1" variant="h5"
            sx={{
              fontFamily: "Source Sans Pro",
              color: "#42A5F5",
              letterSpacing: 1,
              }}>
              Bloguify
            </Typography>
            <Typography component="h4" variant="h5" sx={{ fontFamily: "Source Sans Pro" }}>
              Seja quem você quiser ser
            </Typography>
              <Slide direction="up">
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
              <TextField
                error={Boolean(errors?.email)}
                margin="normal"
                fullWidth
                label="Email"
                autoComplete="email"
                autoFocus
                {...register("email", {
                  required: {
                    value: true,
                    message: 'O email é obrigatório'
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido',
                  },
                })}
              />
              <Box sx={{ fontSize: '12px' }}>
                {errors.email && errors.email.message }
              </Box>
              <TextField
                error={Boolean(errors?.password)}
                margin="normal"
                fullWidth
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                })}
              />
              <Box sx={{ fontSize: '12px' }}>
                {errors.password?.type === 'required' && (<p>A senha é obrigatória</p>) }
                {errors.password?.type === 'minLength' && (<p>A senha deve ter 8 caracteres</p>) }
              </Box>
              <FormControlLabel
                control={<Checkbox color="primary" {...register("remember")} />}
                label="Lembrar-me?"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={ style.submitBtn }
              >
                Acesse 🚪
              </Button>
              <Grid container sx={{ textAlign: 'center' }}>
                <Grid item xs={ 12 } m={1}>
                  <Link href="#" variant="body2">
                    Esqueceu a senha?
                  </Link>
                </Grid>
                <Grid item xs={ 12 }>
                  <Link href="#" variant="body2">
                    {"Não tem uma conta?"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
              </Slide>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
