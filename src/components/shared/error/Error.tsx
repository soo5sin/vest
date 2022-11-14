import styled from 'styled-components';
import errorImage from '../../../assets/image/error.png';

function Error({ error }: { error: string }) {
  return (
    <>
      <Img src={errorImage} alt="error image" />
      <div>Error Message: {error}</div>
      <div>해당 페이지의 컨텐츠 모두 불러오기를 실패했습니다. 다시 시도해주세요.</div>
    </>
  );
}

export default Error;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 2rem 0;
`;
