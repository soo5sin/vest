import styled from 'styled-components';
import mainImage from '../../assets/image/main_image.png';

export default function Main() {
  return (
    <Container>
      <Img src={mainImage} />
      <Text>핀트 고객들의 정보를 관리할 수 있는 웹페이지 입니다.</Text>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

const Img = styled.img`
  margin: 80px auto;
  height: 200px;
  object-fit: cover;
`;

const Text = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
