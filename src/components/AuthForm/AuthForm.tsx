import { FC, useState } from 'react';
import {
  Button,
  Card,
  Flex,
  Heading,
  Link,
  Text,
  TextField,
} from '@radix-ui/themes';
import Cookies from 'universal-cookie';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../hooks/redux';
import { useLoginMutation } from '../../api/auth';
import { userActions } from '../../store/user/userSlice';
import { useNavigate } from 'react-router';
import { AxiosError } from 'axios';

const cookies = new Cookies();

type InputType = 'email' | 'password';

const AuthForm: FC = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    client: 'carettatest',
    user: 'agent1',
    email: 'agent1@carettatest',
    password: '123456',
  });
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const navigate = useNavigate();

  const { user, email, password } = formData || {};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user && email && password) {
      try {
        const res = await login(formData).unwrap();
        dispatch(userActions.setUserToken(res.token));
        dispatch(userActions.setUsername(res.username));

        navigate('/offers', { replace: true });
        toast.success('Logged in succesfully', { duration: 3000 });

        cookies.set('accessToken', res.token, { path: '/' });
        cookies.set('username', res.username, { path: '/' });
      } catch (error) {
        if (error instanceof AxiosError && error.response) {
          toast.error(`Login error: ${error.response}`);
          console.error(error);
        }
      }
    } else {
      toast.error('Please enter credentials');
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: InputType
  ) => {
    const eventValue = event.target.value;
    switch (type) {
      case 'email':
        setFormData((prevState) => {
          return {
            ...prevState,
            email: eventValue,
          };
        });
        break;
      case 'password':
        setFormData((prevState) => {
          return {
            ...prevState,
            password: eventValue,
          };
        });
        break;
    }
  };

  return (
    <Card size='3'>
      <Flex direction='column' gap='4'>
        <Heading align='center'>Welcome</Heading>
        <form onSubmit={handleSubmit}>
          <Flex direction='column' gap='4'>
            <TextField.Input
              onChange={(event) => handleChange(event, 'email')}
              value={email}
              variant='surface'
              placeholder='Email'
            />
            <TextField.Input
              onChange={(event) => handleChange(event, 'password')}
              value={password}
              variant='surface'
              placeholder='Password'
            />
            <Button color='indigo'>Login</Button>
          </Flex>
        </form>
      </Flex>
    </Card>
  );
};

export default AuthForm;
