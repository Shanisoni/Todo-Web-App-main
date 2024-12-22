import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const TaskCreator = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value);
        } else {
            setDescription(value);
        }
    };

    const saveTask = () => {
        if (taskName.trim() === "" || description.trim() === "") {
            alert("Task Name and Description cannot be empty.");
            return;
        }

        const taskObj = {
            Name: taskName,
            Description: description,
        };

        save(taskObj); // Save the task
        setTaskName(""); // Clear the form fields
        setDescription("");
        toggle(); // Close the modal after saving
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Your Todo</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label htmlFor="taskName" className="label">
                            Task Name:
                        </label>
                        <input
                            type="text"
                            id="taskName"
                            className="form-control"
                            value={taskName}
                            onChange={handleChange}
                            name="taskName"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="label">
                            Description:
                        </label>
                        <textarea
                            id="description"
                            className="form-control"
                            rows="5"
                            value={description}
                            onChange={handleChange}
                            name="description"
                        ></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button className="createBtn" onClick={saveTask}>
                    Create
                </Button>
                <Button className="cancelBtn" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default TaskCreator;
