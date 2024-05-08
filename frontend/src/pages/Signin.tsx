import Image from '../assets/login.jpg'
import axios from '../utils/axiosInstance'
import { useState } from 'react'

const Signin = () => {

  // State for storing the form data
  const [data, setData] = useState({
    id: '',
    password: ''
  })

  // State for storing the error status for form validation
  const [errors, setErrors] = useState({ id: false, password: false })

  const handleChange = (e: any) => {
    setErrors({ id: false, password: false })

    setData((prevData) => (
      {
        ...prevData,
        [e.target.name]: e.target.value
      }
    ))

    console.log(data);

  }

  const submitForm = () => {

    // ID validaton
    if (!data.id) {
      setErrors(prevData => ({ ...prevData, id: true }))
    }

    // Password validation
    if (!data.password) {
      setErrors(prevData => ({ ...prevData, password: true }))
      return
    }

    // Send the data to the backend and get the auth token
    axios.post('/login', data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          console.log('User logged in successfully')

        }
      })
      .catch(err => console.log(err));
  }

  return (
    // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    //   <Paper elevation={5} style={{ width: '50rem', height: '25rem' }}>
    //     <Grid container>
    //       <Grid component={Box} item xs={12} md={6} display={{ xs: 'none', md: 'block' }}>
    //         <img src={Image} alt="image.jpg" style={{ width: '100%', height: 'auto' }} />
    //       </Grid>
    //       <Grid component={Box} item xs={12} md={6} style={{ padding: '2rem' }}>
    //         <h1 className='poppins-medium'>Sign in</h1>
    //         <Stack spacing={2}>
    //           <TextField id="id" name='id' label="Enter ID" variant="outlined" value={data.id} onChange={handleChange} error={errors.id} helperText={errors.id && 'This field is required!'} />
    //           <TextField id="password" name='password' label="Password" variant="outlined" value={data.password} type='password' onChange={handleChange} error={errors.password} helperText={errors.password && 'This field is required!'} />
    //           <Button variant="contained" onClick={submitForm}>Submit</Button>
    //         </Stack>
    //       </Grid>
    //     </Grid>
    //   </Paper>
    // </div >

    <></>
  )
}

export default Signin