import React from 'react';
import ReactModal from 'react-modal';
import css from './modalPrivacy.module.scss';

import "../../../../index.scss"

ReactModal.setAppElement('#root'); // Set the app element for accessibility

const Modal = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      className="modal"
      overlayClassName="backdrop"
    >
      <div className={css.modal_privacy}>
        <h2>{title}</h2>
        <p>{children}</p>
        <button onClick={onRequestClose} className={css.btn}>Close</button>
      </div>
    </ReactModal>
  );
};

export default Modal;
