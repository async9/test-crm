import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { selectUserToken } from '../store/user/userSelects';

export const ProtectedRoutes: FC<{ redirectPath?: string }> = ({
  redirectPath = '/login',
}) => {
  const userToken = useAppSelector(selectUserToken);

  if (!userToken) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
