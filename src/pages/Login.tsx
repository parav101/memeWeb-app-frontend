import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';
import { login } from '../redux/actions/UserAction';
import { useAppSelector } from '../redux/hooks';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) navigate('/t');
  }, [navigate, isAuthenticated]);

  const fieldValidationSchema = yup.object({
    usernameOrEmail: yup.string().required('Username or email required!'),
    password: yup.string().required('Password requied!'),
  });

  return (
    <Wrapper varient="small">
      <Formik
        initialValues={{ usernameOrEmail: '', password: '' }}
        onSubmit={async (values:any) => {
         dispatch(login(values)as any)
        }}
        validationSchema={fieldValidationSchema}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Box flex="flex" flexDirection="column" p={3}>
              <InputField
                name="usernameOrEmail"
                placeholder="usernameOrEmail"
                label="Username or Email"
              />

              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
              <Flex alignItems="center">
                <Button
                  mt={4}
                  type="submit"
                  colorScheme="messenger"
                  isLoading={loading}
                  disabled={isSubmitting}
                  size="sm"
                >
                  Login
                </Button>
                <Spacer />
                <Link to="/forgot-password">
                  <Text fontSize="sm" color="blue.500">
                    forgot password
                  </Text>
                </Link>
              </Flex>
              <Link to="/register">
                <Box mt="2" fontSize="sm" color="blue.500">
                  Not Registered? Create Account.
                </Box>
              </Link>
              {error ? (
                <Alert mt="2" status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              ) : null}
            </Box>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Login;
