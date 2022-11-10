import styled from 'styled-components';
import mainImage from '../../assets/main_image.png';

function Main() {
  return (
    <Container>
      <Img src={mainImage} />
      <Text>핀트 고객들의 정보를 관리할 수 있는 웹페이지 입니다.</Text>
    </Container>
  );
}

export default Main;

const Container = styled.section`
  width: 100%;
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
