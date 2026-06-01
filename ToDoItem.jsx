import { useState } from "react";

function ToDoItem({
  task,
  onDelete,
  onComplete,
  onEdit,
}) {
  const [isEditing, setIsEditing] =
    useState(false);

  const [editedText, setEditedText] =
    useState(task.text);

  const saveEdit = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) =>
              setEditedText(
                e.target.value
              )
            }
          />

          <button onClick={saveEdit}>
            Save
          </button>
        </>
      ) : (
        <>
          <span
            onClick={onComplete}
            style={{
              textDecoration:
                task.completed
                  ? "line-through"
                  : "none",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            {task.text}
          </span>

          <button
            onClick={() =>
              setIsEditing(true)
            }
          >
            Edit
          </button>

          <button
            onClick={onDelete}
            style={{
              marginLeft: "5px",
            }}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;