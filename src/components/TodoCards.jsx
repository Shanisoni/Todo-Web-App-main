import React, { useState } from "react";
import { Card, CardBody, CardText } from "reactstrap";
import EditTask from "../modals/EditTask";

const TodoCards = ({ taskObj, index, deleteTodo, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor: "rgb(77, 226, 72)",
            secondaryColor: "rgba(77, 226, 72, 0.315)",
        },
        {
            primaryColor: "rgb(255, 210, 60)",
            secondaryColor: "rgba(255, 209, 60, 0.619)",
        },
        {
            primaryColor: "#5D93E1",
            secondaryColor: "rgba(58, 104, 255, 0.301)",
        },
        {
            primaryColor: "rgb(255, 57, 57)",
            secondaryColor: "rgba(255, 57, 57, 0.424)",
        },
        {
            primaryColor: "rgb(135, 60, 255)",
            secondaryColor: "rgba(135, 60, 255, 0.424)",
        },
        {
            primaryColor: "rgb(255, 85, 43)",
            secondaryColor: "rgba(255, 85, 43, 0.424)",
        },
    ];

    const deleteCard = () => {
        deleteTodo(index);
    };

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    return (
        <>
            <div
                className="mb-3 card-ver"
                style={{
                    borderBottom: `4px solid ${colors[index % 6].primaryColor}`,
                }}
            >
                <h5
                    className="name"
                    style={{ background: colors[index % 6].secondaryColor }}
                >
                    {taskObj.Name}
                </h5>
                <CardBody>
                    <CardText className="desc">{taskObj.Description}</CardText>
                    <div className="icons">
                        <i
                            className="far fa-edit edit"
                            style={{
                                color: colors[index % 6].primaryColor,
                                cursor: "pointer",
                            }}
                            onClick={() => setModal(true)}
                        ></i>
                        <i
                            className="fas fa-trash"
                            style={{
                                color: colors[index % 6].primaryColor,
                                cursor: "pointer",
                            }}
                            onClick={deleteCard}
                        ></i>
                    </div>
                </CardBody>
            </div>
            <EditTask
                modal={modal}
                toggle={toggle}
                updateTask={updateTask}
                taskObj={taskObj}
            />
        </>
    );
};

export default TodoCards;
