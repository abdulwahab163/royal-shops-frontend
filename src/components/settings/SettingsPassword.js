import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { changePassword } from './../../redux/actions/auth.actions'


const SettingsPassword = (props) => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.auth.user)

  const handleChangePassword = ({ oldPassword, newPassword }) => {

    console.log("chage", user)
    dispatch(changePassword({ oldPassword, newPassword, id: user.id }))
  };

  return (
    <Card >
      <CardHeader
        subheader="Update password"
        title="Password"
      />
      <Divider />
      <CardContent style={{ paddingBottom: 0 }}>
        <Formik
          initialValues={{
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
          }}
          validationSchema={Yup.object().shape({
            oldPassword: Yup.string().max(255).required('Old Password is required'),
            newPassword: Yup.string().max(255).required('New Password is required'),
            confirmPassword: Yup.string().when(
              'newPassword',
              (confirmPassword, field) =>
                confirmPassword
                  ? field.required().oneOf([Yup.ref('newPassword')])
                  : field
            ),
          })}
          onSubmit={(values) => {
            handleChangePassword(values);
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                error={Boolean(touched.oldPassword && errors.oldPassword)}
                fullWidth
                helperText={touched.oldPassword && errors.oldPassword}
                label="Old Password"
                margin="normal"
                name="oldPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.oldPassword}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.newPassword && errors.newPassword)}
                fullWidth
                helperText={touched.newPassword && errors.newPassword}
                label="New Password"
                margin="normal"
                name="newPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.newPassword}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                fullWidth
                helperText={touched.confirmPassword && errors.confirmPassword}
                label="Confirm Password"
                margin="normal"
                name="confirmPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.confirmPassword}
                variant="outlined"
              />
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',

                  p: 2
                }}
              >
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  style={{ outline: 'none' }}
                >
                  Update Password
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default SettingsPassword;
