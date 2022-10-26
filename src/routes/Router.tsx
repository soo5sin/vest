import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTE } from '../constants/routes';
import Account from '../pages/Account';
import AccountDetail from '../pages/AccountDetail';
import Login from '../pages/Login';
import Main from '../pages/Main';
import User from '../pages/User';
import UserDetail from '../pages/UserDetail';
import { UserToken } from '../utils/auth';

const Auth = () => {
  const token = UserToken.get();
  return token ? <Navigate to={ROUTE.MAIN} replace /> : <Navigate to={ROUTE.LOGIN} replace />;
};

function Router() {
  return (
    <Routes>
      <Route path={ROUTE.LOGIN} element={<Login />} />
      <Route element={<Auth />}>
        <Route path={ROUTE.MAIN} element={<Main />} />
        <Route path={ROUTE.USER} element={<User />} />
        <Route path={ROUTE.USER_DETAIL} element={<UserDetail />} />
        <Route path={ROUTE.ACCOUNT} element={<Account />} />
        <Route path={ROUTE.ACCOUNT_DETAIL} element={<AccountDetail />} />
      </Route>
    </Routes>
  );
}

export default Router;
