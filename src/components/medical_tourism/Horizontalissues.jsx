import React, { useState } from 'react';
import Modal from '../train_search_result/Modal';
import 'react-datepicker/dist/react-datepicker.css';
import { Healthissues1, Healthissues2, Healthissues3, Healthissues4, Healthissues5, Healthissues6 } from '../../assets/images';

const Horizontalissues = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalType) => setOpenModal(modalType);
  const handleCloseModal = () => setOpenModal(null);

  const renderModalContent = (type) => {
    switch (type) {
      case 'cardiovascularDiseases':
        return <p>Information on cardiovascular treatments.</p>;
      case 'orthopedicConditions':
        return <p>Details about joint replacement and spine surgeries.</p>;
      case 'cosmeticSurgery':
        return <p>Information about cosmetic surgery procedures.</p>;
      case 'dentalCare':
        return <p>Advanced dental care services information.</p>;
      case 'fertilityIssues':
        return <p>Fertility treatment information, including IVF.</p>;
      case 'cancerTreatment':
        return <p>Oncology treatments like chemotherapy and radiation therapy.</p>;
      default:
        return <p>More information about health tourism.</p>;
    }
  };

  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '12px',
    padding: '15px',
    width: '140px',
    textAlign: 'center',
    cursor: 'pointer',
  };

  const textStyle = {
    fontSize: '16px',
    color: '#333',
    marginTop: '8px',
  };

  const imageStyle = {
    width: '100%',
    height: '100px',
    borderRadius: '60px', // Adds border radius to images
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    objectFit: 'cover',
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={itemStyle} onClick={() => handleOpenModal('cardiovascularDiseases')}>
          <img src={Healthissues1} alt="Cardiovascular Diseases" style={imageStyle} />
          <span style={textStyle}>Cardiovascular Diseases</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('orthopedicConditions')}>
          <img src={Healthissues2} alt="Orthopedic Conditions" style={imageStyle} />
          <span style={textStyle}>Orthopedic Conditions</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('cosmeticSurgery')}>
          <img src={Healthissues3} alt="Cosmetic Surgery" style={imageStyle} />
          <span style={textStyle}>Cosmetic Surgery</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('dentalCare')}>
          <img src={Healthissues4} alt="Dental Care" style={imageStyle} />
          <span style={textStyle}>Dental Care</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('fertilityIssues')}>
          <img src={Healthissues5} alt="Fertility Issues" style={imageStyle} />
          <span style={textStyle}>Fertility Issues</span>
        </div>
        <div style={itemStyle} onClick={() => handleOpenModal('cancerTreatment')}>
          <img src={Healthissues6}alt="Cancer Treatment" style={imageStyle} />
          <span style={textStyle}>Cancer Treatment</span>
        </div>
      </div>

      <Modal isOpen={!!openModal} onClose={handleCloseModal} title={openModal && openModal.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim()}>
        {renderModalContent(openModal)}
      </Modal>
    </>
  );
};

export default Horizontalissues;
