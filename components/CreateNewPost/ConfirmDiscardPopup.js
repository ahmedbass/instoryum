import Modal from "react-modal";

const ConfirmDiscardPopup = ({ isOpen, onConfirm, onCancel }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      ariaHideApp={false}
      overlayClassName="modal-overlay"
      className="w-112 bg-white rounded-xl absolute-center col-center-v text-center text-gray-700 overflow-hidden"
    >
      <div className="border-b w-full px-4 pb-6 pt-8 space-y-2">
        <h2 className="text-xl font-semibold">Discard post?</h2>
        <p className="text-gray-500">If you leave, your edits won&apos;t be saved.</p>
      </div>

      <button
        className="text-lg p-3 font-semibold text-red-500 border-b hover:bg-gray-100 outline-none"
        onClick={onConfirm}
        autoFocus
      >
        Discard
      </button>
      <button className="text-lg p-3 hover:bg-gray-100" onClick={onCancel}>
        Cancel
      </button>
    </Modal>
  );
};

export default ConfirmDiscardPopup;
