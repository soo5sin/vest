import { ROUTE } from '../../../constants/routes';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserToken } from '../../../utils/auth';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBriefcase, faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Sidebar() {
  const siderContent = [
    { id: 1, name: '메인', keyword: 'main', link: ROUTE.MAIN, icon: faHouse },
    {
      id: 2,
      name: '계좌 목록',
      keyword: 'accounts',
      link: ROUTE.ACCOUNT,
      icon: faBriefcase,
    },
    { id: 3, name: '유저 목록', keyword: 'users', link: ROUTE.USER, icon: faUser },
  ];
  const navigate = useNavigate();

  const logoutHandler = () => {
    UserToken.remove();
    navigate(ROUTE.LOGIN);
  };

  return (
    <Container>
      <Aside>
        <h1>fint</h1>
        {siderContent.map((sider) => (
          <Link to={sider.link} key={sider.id}>
            <div>
              <FontAwesomeIcon icon={sider.icon} />
              <Menu>{sider.name}</Menu>
            </div>
          </Link>
        ))}

        <button onClick={logoutHandler}>
          <FontAwesomeIcon icon={faArrowRight} />
          <Menu>로그아웃</Menu>
        </button>
      </Aside>
      <Outlet />
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  display: flex;
`;

const Aside = styled.aside`
  & > h1 {
    font-size: 30px;
    text-align: center;
    margin: 0 30px 20px 40px;
    font-weight: bold;
  }
  & div:hover,
  button:hover {
    background: ${({ theme }) => theme.palette.WHITE};
    color: black;
    border-radius: 5px;
  }
  & div,
  button {
    margin-bottom: 10px;
    padding: 10px;
  }
  padding: 30px;
  background: ${({ theme }) => theme.palette.MAIN_COLOR};
  color: ${({ theme }) => theme.palette.WHITE};
`;

const Menu = styled.span`
  margin-left: 10px;
`;
