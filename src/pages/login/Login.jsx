
import * as yup from 'yup';
import {useFormik} from 'formik';
import {useNavigate} from "react-router-dom";

import {
    Alert,
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline, Link,
    TextField,
    Typography
} from "@mui/material";
import InputIcon from '@mui/icons-material/Input';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                muc.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const Login = () => {
    const navigate = useNavigate();
    const validationSchema = yup.object({
        firstname: yup
            .string('Enter your name')
            .min(3, 'User name should be of minimum 3 characters length')
            .required('User name is required'),
    });

    const formik = useFormik({
        initialValues: {
            firstname: " "
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            localStorage.setItem('username', JSON.stringify(values.firstname));
            //navigate("/");
        },
    });
    return (
        <div>
            <Container component="main" maxWidth="xs" onSubmit={formik.handleSubmit}>
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
                        <InputIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5" mt="4px">
                        Welcome TODO APP
                    </Typography>
                    <Box my={5}>
                        {formik.errors.general &&
                            (<Alert status="error">
                                {formik.errors.general}
                            </Alert>)}
                    </Box>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            fullWidth
                            id="firstname"
                            name="firstname"
                            label="User Name"
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                            helperText={formik.touched.firstname && formik.errors.firstname}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>


                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </div>
    )
}
export default Login;