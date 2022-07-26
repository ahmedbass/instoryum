import Modal from "react-modal";
import MyButton from "./MyButton";
import MyCloseIcon from "./MyCloseIcon";
import MyBackIcon from "./MyBackIcon";

const CloseButton = ({ closeBtn, onClick }) => {
  if (!closeBtn || !closeBtn.enabled) return;
  if (!closeBtn.icon) closeBtn.icon = "close";
  if (!closeBtn.position) closeBtn.position = "tr";
  let pos;
  if (closeBtn.position === "tr") pos = "top-2 right-3";
  if (closeBtn.position === "tl") pos = "top-2 left-3";
  if (closeBtn.position === "br") pos = "bottom-2 right-3";
  if (closeBtn.position === "bl") pos = "bottom-2 left-3";

  return (
    <MyButton className={`absolute ${pos} ${closeBtn.className}`} onClick={onClick}>
      {closeBtn.icon === "back" && <MyBackIcon clickable />}
      {closeBtn.icon === "close" && <MyCloseIcon clickable />}
    </MyButton>
  );
};

const CloseBackBtn = ({ onClick }) => {
  return (
    <MyButton className={`absolute top-2 left-3 md:left-auto md:right-3`} onClick={onClick}>
      <MyBackIcon clickable className="md:hidden" />
      <MyCloseIcon clickable className="hidden md:inline-block" />
    </MyButton>
  );
};

const MyModal = ({
  children,
  isOpen,
  onRequestClose,
  label,
  className,
  overlayClassName,
  closeBackBtn,
  closeBtn = { enabled: false, icon: "close", position: "tr", className: "" },
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={label}
      shouldReturnFocusAfterClose={false}
      overlayClassName={`modal-overlay !${overlayClassName}`}
      ariaHideApp={false}
      shouldFocusAfterRender={true}
      className={`absolute-center w-screen h-screen md:w-fit md:max-w-[95%] md:max-h-[90%] 
      flex bg-white border md:rounded-lg md:overflow-hidden ${className}`}
    >
      {children}

      {closeBackBtn && <CloseBackBtn onClick={onRequestClose} />}
      {closeBtn?.enabled && <CloseButton onClick={onRequestClose} closeBtn={closeBtn} />}
    </Modal>
  );
};
export default MyModal;
