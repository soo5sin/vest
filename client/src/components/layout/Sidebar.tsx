import { ROUTE } from '../../constants/route';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faBriefcase,
  faArrowRight,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../../store';
import { signOutThunk } from '../../store/reducers/auth';

interface Menu {
  active?: boolean;
}

export default function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthorized } = useAppSelector((state) => state.reducers.auth);
  const CurrentPage = useLocation().pathname;

  const signHandler = () => {
    if (isAuthorized) {
      if (!confirm('로그아웃 하시겠습니까?')) return;
      dispatch(signOutThunk());
    } else {
      navigate(ROUTE.LOGIN);
    }
  };

  return (
    <S.Container>
      <h1>fint</h1>
      {siderContent.map((sider) => (
        <Link to={sider.link} key={sider.id}>
          <S.MenuWrapper active={CurrentPage === sider.keyword}>
            <FontAwesomeIcon icon={sider.icon} />
            <S.Name>{sider.name}</S.Name>
          </S.MenuWrapper>
        </Link>
      ))}
      <button onClick={signHandler}>
        <FontAwesomeIcon icon={faArrowRight} />
        <S.Name>{isAuthorized ? '로그아웃' : '로그인'}</S.Name>
      </button>
    </S.Container>
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
  { id: 4, name: '검색', keyword: '/search', link: ROUTE.SEARCH, icon: faSearch },
];

const S = {
  Container: styled.aside`
    & > h1 {
      font-size: 30px;
      text-align: center;
      margin: 0 30px 20px 40px;
      font-weight: bold;
    }
    & div:hover,
    button:hover {
      background: ${({ theme }) => theme.palette.WHITE};
      color: ${({ theme }) => theme.palette.MAIN_COLOR};
      border-radius: 5px;
    }
    & div {
      margin-bottom: 10px;
      padding: 10px;
    }
    & button {
      width: 100%;
      padding: 10px;
      text-align: left;
    }
    padding: 30px;
    background: ${({ theme }) => theme.palette.MAIN_COLOR};
    color: ${({ theme }) => theme.palette.WHITE};
  `,

  Name: styled.span`
    margin-left: 10px;
  `,

  MenuWrapper: styled.div<Menu>`
    background: ${({ active, theme }) => active && theme.palette.WHITE};
    color: ${({ active, theme }) => active && theme.palette.MAIN_COLOR};
    border-radius: 5px;
  `,
};
