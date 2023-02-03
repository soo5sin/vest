import Dimmer from './Dimmer';
import ReactDOM from 'react-dom';

interface Props {
  children: JSX.Element;
  closeModalHandler: VoidFunction;
  isOpenModal: boolean;
}

export default function Modal({ children, isOpenModal, closeModalHandler }: Props) {
  const root = document.getElementById('portal-root');

  return (
    <>
      {isOpenModal && root
        ? ReactDOM.createPortal(
            <>
              <Dimmer onClick={closeModalHandler} />
              {children}
            </>,
            root,
          )
        : null}
    </>
  );
}
