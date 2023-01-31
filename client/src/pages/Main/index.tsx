import styled from 'styled-components';
import mainImage from '../../assets/image/main_image.png';
import { fadeInUp } from '../../styles/fadeInUp';

export default function Main() {
  return (
    <S.Container>
      <S.Text>
        <S.Logo>vest</S.Logo> 의 고객 관리자 앱입니다
      </S.Text>
      <S.Text>유저의 정보를 쉽게 확인하고, 관리해보세요</S.Text>
      <S.Img src={mainImage} alt="서핑을 하는 여성" />
    </S.Container>
  );
}

const S = {
  Container: styled.section`
    width: 100%;
    height: 100vh;
    animation: ${fadeInUp} 2s;
  `,
  Logo: styled.span`
    font-size: 2rem;
    font-family: fantasy;
    color: ${({ theme }) => theme.palette.MAIN_COLOR};
  `,
  Img: styled.img`
    margin: 50px auto;
    height: 25rem;
    object-fit: cover;
  `,

  Text: styled.div`
    margin-top: 30px;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.GRAY_500};
  `,
};
