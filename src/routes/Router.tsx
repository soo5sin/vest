import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/sidebar';
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
  return token ? <Outlet /> : <Navigate to={ROUTE.LOGIN} replace />;
};

function Router() {
  return (
    <Routes>
      <Route path={ROUTE.LOGIN} element={<Login />} />
      <Route element={<Auth />}>
        <Route element={<Sidebar />}>
          <Route path={ROUTE.MAIN} element={<Main />} />
          <Route path={ROUTE.USER} element={<User />} />
          <Route path={`${ROUTE.USER_DETAIL}/:id`} element={<UserDetail />} />
          <Route path={ROUTE.ACCOUNT} element={<Account />} />
          <Route path={ROUTE.ACCOUNT_DETAIL} element={<AccountDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
