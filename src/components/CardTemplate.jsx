import React, { useState, useEffect } from 'react';
import { Modal } from './Modal.jsx';

function CardTemplate(props) {
  const [isModalVisible, setModal] = useState(false);

  const renderModal = () => {
    if (isModalVisible) {
      return <Modal close={() => setModal(false)} />
    }
  };

  return (
    <div>
      <div className="card-wrapper" onClick={() => setModal(true)}>
        <div className="content">
          <p className="icon">
            { props.icon }
          </p>
          <h1 className="title">
            { props.title }
          </h1>
          <p className="description">
            { props.description }
          </p>
        </div>
      </div>
      { renderModal() }
    </div>
  )
}

export { CardTemplate };


