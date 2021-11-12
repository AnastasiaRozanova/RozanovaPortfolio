import React from 'react';

import SuccessIcon from './Icons/SuccessIcon';
import FailureIcon from './Icons/FailureIcon';

import './style.css';

export const Modal = ({ isSuccess }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-body">
          {isSuccess ? <SuccessIcon /> : <FailureIcon />}
          <div className={`modal-text ${isSuccess ? 'limegreen' : 'red'}`}>
            {isSuccess ? 'Данные успешно отправлены' : 'При отправке данных произошла ошибка'}
          </div>
        </div>
      </div>
    </div>
  );
};
