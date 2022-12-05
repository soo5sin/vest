import { ROUTE } from '../../constants/route';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserToken } from '../../utils/userToken';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBriefcase, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Menu {
  active?: boolean;
}

export default function Sidebar() {
  const navigate = useNavigate();
  const CurrentPage = useLocation().pathname;

  const logoutHandler = () => {
    if (!confirm('로그아웃 하시겠습니까?')) return;
    UserToken.remove();
    navigate(ROUTE.LOGIN);
  };

  return (
    <Container>
      <h1>fint</h1>
      {siderContent.map((sider) => (
        <Link to={sider.link} key={sider.id}>
          <MenuWrapper active={CurrentPage === sider.keyword}>
            <FontAwesomeIcon icon={sider.icon} />
            <Name>{sider.name}</Name>
          </MenuWrapper>
        </Link>
      ))}
      <div>
        <button onClick={logoutHandler}>
          <FontAwesomeIcon icon={faArrowRight} />
          <Name>로그아웃</Name>
        </button>
      </div>
    </Container>
  );
}

export const siderContent = [
  { id: 1, name: '메인', keyword: '/', link: ROUTE.MAIN, icon: faHouse },
  {
    id: 2,
    name: '계좌 목록',
    keyword: '/account',
    link: ROUTE.ACCOUNT,
    icon: faBriefcase,
  },
  { id: 3, name: '유저 목록', keyword: '/user', link: ROUTE.USER, icon: faUser },
];

const Container = styled.aside`
  & > h1 {
    font-size: 30px;
    text-align: center;
    margin: 0 30px 20px 40px;
    font-weight: bold;
  }
  & div:hover {
    background: ${({ theme }) => theme.palette.WHITE};
    color: ${({ theme }) => theme.palette.MAIN_COLOR};
    border-radius: 5px;
  }
  & div {
    margin-bottom: 10px;
    padding: 10px;
  }
  padding: 30px;
  background: ${({ theme }) => theme.palette.MAIN_COLOR};
  color: ${({ theme }) => theme.palette.WHITE};
`;

const Name = styled.span`
  margin-left: 10px;
`;

const MenuWrapper = styled.div<Menu>`
  background: ${({ active, theme }) => active && theme.palette.WHITE};
  color: ${({ active, theme }) => active && theme.palette.MAIN_COLOR};
  border-radius: 5px;
`;
