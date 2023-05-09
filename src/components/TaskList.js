import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleCompleted } from '../actions/taskActions';

const TaskList = ({ tasks, deleteTask, toggleCompleted, openModal }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompleted(task)}
                />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary mr-2"
                  onClick={() => openModal(task)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteTask(task)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
});

export default connect(mapStateToProps, { deleteTask, toggleCompleted })(TaskList);
