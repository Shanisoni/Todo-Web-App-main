import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
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

    useEffect(() => {
        setTaskName(taskObj.Name);
        setDescription(taskObj.Description);
    }, [taskObj]);

    const update = (e) => {
        e.preventDefault();
        if (taskName.trim() === "" || description.trim() === "") {
            alert("Task Name and Description cannot be empty.");
            return;
        }

        const editObj = {
            Name: taskName,
            Description: description,
        };
        updateTask(editObj);
        toggle(); // Close modal after updating
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit Your Todo</ModalHeader>
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
                <Button className="createBtn" onClick={update}>
                    Update
                </Button>
                <Button className="cancelBtn" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTask;
