import { ROUTE } from '../../../constants/routes';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { UserToken } from '../../../utils/auth';

function Sidebar() {
  const siderContent = [
    { id: 1, name: '메인', keyword: 'main', link: ROUTE.MAIN },
    { id: 2, name: '계좌 목록', keyword: 'accounts', link: ROUTE.ACCOUNT },
    { id: 3, name: '사용자 목록', keyword: 'users', link: ROUTE.USER },
  ];
  const navigate = useNavigate();

  const logoutHandler = () => {
    UserToken.remove();
    navigate(ROUTE.LOGIN);
  };

  return (
    <>
      {siderContent.map((sider) => (
        <Link to={sider.link} key={sider.id}>
          {sider.name}
        </Link>
      ))}
      <button onClick={logoutHandler}>로그아웃</button>
      <Outlet />
    </>
  );
}

export default Sidebar;
