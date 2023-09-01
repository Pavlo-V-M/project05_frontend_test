import React from 'react';
import ReactModal from 'react-modal';
import css from './modalPrivacy.module.scss';
import "index.scss"

ReactModal.setAppElement('#root');

const Modal = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      className={css.modalPrivecy}
      overlayClassName="backdrop"
    >
      <div className={css.modal_privacy}>
        <h2 className={css.titlePrivacy}>{title}</h2>
        <p>{children}</p>
        <button onClick={onRequestClose} className={`button ${css.btn}`}>Close</button>
      </div>
    </ReactModal>
  );
};

export default Modal;
