import React, { Fragment, useEffect, useState } from "react";
import Form from "../components/Form";
import Notes from "../components/Notes";
import Jacob from "../components/Jacob";

export const Home = () => {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes") || []));

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
        console.log(JSON.parse(localStorage.getItem("notes")));
    }, [notes])

    const addNote = (title, text) => {
        setNotes([...notes, {
            id: Date.now().toLocaleString(),
            title: title,
            text: text,
        }])
    }

    const deleteNote = (NoteId = 1) => {
        setNotes(notes.filter((note) => (note.id !== NoteId)))
    }

    return (
        <Fragment>
            <Form addNote={addNote}/>
            <hr />
            <Notes notes={notes} deleteNote={deleteNote}/>
            <hr />
            <Jacob />
        </Fragment>
    );
}