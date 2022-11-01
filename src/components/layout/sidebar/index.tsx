import { ROUTE } from '../../../constants/routes';
import { Link, Outlet } from 'react-router-dom';

function Sidebar() {
  const siderContent = [
    { id: 1, name: '메인', keyword: 'main', link: ROUTE.MAIN },
    { id: 2, name: '계좌 목록', keyword: 'accounts', link: ROUTE.ACCOUNT },
    { id: 3, name: '사용자 목록', keyword: 'users', link: ROUTE.USER },
    { id: 9999, name: '로그아웃', keyword: 'logout', link: ROUTE.LOGOUT },
  ];

  return (
    <>
      {siderContent.map((sider) => (
        <Link to={sider.link} key={sider.id}>
          {sider.name}
        </Link>
      ))}
      <Outlet />
    </>
  );
}

export default Sidebar;
