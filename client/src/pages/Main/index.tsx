import styled from 'styled-components';
import mainImage from '../../assets/image/main_image.png';

export default function Main() {
  return (
    <S.Container>
      <S.Img src={mainImage} alt="서핑을 하는 여성" />
      <S.Text>핀트 고객들의 정보를 관리할 수 있는 웹페이지 입니다.</S.Text>
    </S.Container>
  );
}

const S = {
  Container: styled.section`
    width: 100%;
    height: 100vh;
  `,

  Img: styled.img`
    margin: 80px auto;
    height: 200px;
    object-fit: cover;
  `,

  Text: styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  `,
};
