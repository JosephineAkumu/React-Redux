import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask, editTask } from '../actions/taskActions';

const TaskForm = ({ task, addTask, editTask, closeModal }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task) {
      editTask({ ...task, title, description });
    } else {
      addTask({ title, description });
    }
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{task ? 'Edit Task' : 'Add Task'}</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default connect(null, { addTask, editTask })(TaskForm);
