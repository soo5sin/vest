import styled from 'styled-components';

interface Props {
  onClick: VoidFunction;
}

export default function Dimmer(props: Props) {
  return <S.Dimmer {...props} />;
}

const S = {
  Dimmer: styled.div`
    position: fixed;
    background: black;
    opacity: 40%;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  `,
};
