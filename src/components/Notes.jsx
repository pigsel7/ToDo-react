import React, { useEffect, useState } from "react";

const Notes = ({notes, deleteNote}) => {

    const [deleteId, setDeleteId] = useState()
    useEffect(() => {
        deleteNote(deleteId)
    }, [deleteId])

    return (
        <ul className="list-group">
            {notes.map((note, index) => (
                <li className="list-group-item note" key={note.id}>
                    <div>
                        <strong> {index + 1}. {note.title} </strong>
                        <br />
                        {note.text}
                    </div>
                    <div>
                        <small>{new Date().toLocaleDateString()}</small>
                        <button
                            type="button"
                            className="btn btn-outline-danger btn-sm btn-del"
                            onClick={(e) => {
                                setDeleteId(note.id);
                            }}
                        >
                            {" "}
                            &times;{" "}
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}


export default Notes;