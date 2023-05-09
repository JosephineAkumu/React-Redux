import React from 'react';
import Modal from 'react-modal';
import TaskForm from './TaskForm';

Modal.setAppElement('#root');

const TaskModal = ({ isOpen, closeModal, task }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={task ? 'Edit Task' : 'Add Task'}
    >
      <button type="button" className="btn btn-danger float-right" onClick={closeModal}>
        Close
      </button>
      <TaskForm task={task} closeModal={closeModal} />
    </Modal>
  );
};

export default TaskModal;
