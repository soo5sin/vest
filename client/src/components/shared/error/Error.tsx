import styled from 'styled-components';
import errorImage from '../../../assets/image/error.png';

export default function Error({ error }: { error: string }) {
  return (
    <S.Container>
      <S.Img src={errorImage} alt="error image" />
      <div>Error Message: {error}</div>
      <div>해당 페이지를 표시할 수 없습니다. 다시 시도해주세요.</div>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    padding: 1rem;
  `,

  Img: styled.img`
    width: 2rem;
    height: 2rem;
    margin: 2rem 0;
  `,
};
