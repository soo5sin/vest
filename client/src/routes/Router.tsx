import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Layout from '../components/layout';
import Error from '../components/shared/error/Error';
import { ROUTE } from '../constants/route';
import Account from '../pages/Account';
import AccountDetail from '../pages/AccountDetail';
import Login from '../pages/Login';
import Main from '../pages/Main';
import User from '../pages/User';
import UserDetail from '../pages/UserDetail';
import { UserToken } from '../utils/userToken';

const Auth = () => {
  const token = UserToken.get();
  return token ? <Outlet /> : <Navigate to={ROUTE.LOGIN} replace />;
};

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTE.LOGIN} element={<Login />} />
      <Route path={ROUTE.NOT_FOUND} element={<Error error="NOT FOUND" />} />
      <Route element={<Auth />}>
        <Route element={<Layout />}>
          <Route path={ROUTE.MAIN} element={<Main />} />
          <Route path={ROUTE.USER} element={<User />} />
          <Route path={`${ROUTE.USER_DETAIL}/:id`} element={<UserDetail />} />
          <Route path={ROUTE.ACCOUNT} element={<Account />} />
          <Route path={`${ROUTE.ACCOUNT_DETAIL}/:uuid`} element={<AccountDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}
