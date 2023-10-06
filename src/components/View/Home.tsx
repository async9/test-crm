import { useAppSelector } from '@/hooks/redux';
import { selectUserToken } from '@/store/user/userSelects';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const userToken = useAppSelector(selectUserToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      navigate('/offers', { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  }, [userToken]);

  return <div></div>;
};

export default Home;
