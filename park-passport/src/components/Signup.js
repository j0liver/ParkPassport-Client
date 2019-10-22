import React, {useState, useEffect} from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const SignUpForm = ({ values, touched, errors, status }) => {
    const [user, setUser] = useState([])
    useEffect(() => {
        status && setUser(user => [...user, status])
    },[status])
    
    return (
        <div className="SignUp">
        <Form>
            <Field type="text" name="userName" placeholder="Username" />
            {touched.userName && errors.userName && (
            <p className="error">{errors.userName}</p>
            )}
            <Field type="text" name="password" placeholder="Password" />
            {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
            )}
            <button type="submit">Submit!</button>
        </Form>
        {/* {user.map(user => (
            <ul key={user.id}>
            <li>Username: {user.userName}</li>
            <li>Password: {user.password}</li>
            <li>Email: {user.email}</li>
            </ul>
        ))} */}
        </div>
    );
    };
    const FormikSignUpForm = withFormik({
    mapPropsToValues({ userName, password, email }) {
        return {
        userName: userName || "",
        password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        userName: Yup.string().required(),
        password: Yup.string().required()
    }),
    // handleSubmit(values, {setStatus}) { 
    //     axios.post('https://reqres.in/api/users/', values) 
    //         .then(res => { setStatus(res.data); }) 
    //         .catch(err => console.log(err.response));
    //     }
    })(SignUpForm);
    export default FormikSignUpForm;
    