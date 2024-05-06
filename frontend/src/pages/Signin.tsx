import Image from '../assets/login.jpg'

import { Paper, Grid, Box, TextField, Button, Stack } from '@mui/material'

const Signin = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={5} style={{ width: '50rem', height: '25rem' }}>
        <Grid container>
          <Grid component={Box} item xs={12} md={6} display={{ xs: 'none', md: 'block' }}>
            <img src={Image} alt="image.jpg" style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid component={Box} item xs={12} md={6} style={{ padding: '2rem' }}>
            <h1 className='poppins-medium'>Sign in</h1>
            <form action="/login" method="post">
              <Stack spacing={2}>
                <TextField id="outlined-basic" label="Enter ID" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" type='password' />
                <Button variant="contained" type='submit'>Submit</Button>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div >
  )
}

export default Signin