import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-main-background);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: gray;
  backdrop-filter: blur(1px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: 20px;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-modal-button-hover);
    cursor: pointer;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-main-text-color);
  }
`;

// Below is a simple use case of compound component pattern.
// In this case, it basically takes a name and a window and displays it all over the screen using overlay.
// There is another reason of doing this here, so that the state remains here and not with each individual component that uses this component.

// 1. Creating a context
const ModalContext = createContext();

// 2. Creating a parent element
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");

  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  // 'cloneElement' lets you create a new React element using another element as a starting point.
  // It basically means that we get some element, we clone it and add some properties to it, like props and stuff.
  // It basically tells what to open. Initally when we use 'Modal' we tell the button what it should open which is a 'name' which we give to some other window. In the below component, we check if the right window needs to open and that is opened.
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  // Only open the window if it was intended to do so. Meaning that the button to open the current window was pressed.
  if (name !== openName) return null;

  // React's createPortal allows us to render a element outside of the parent component's DOM structure while still keeping the element in the originall position of the component tree.

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
