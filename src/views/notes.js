import {useEffect, useState} from 'react';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // GET api call to get notes
        // axios.get('url').then((response) => {
        //     work with response data
        // }).catch((error) => {
        //     actions in case of error
        // })
        setNotes([
            {title: 'Test', description: 'Testing', tags: ['luffy', 'zoro', 'sanji']},
            {title: 'Lorem', description: 'Lorem Ipsum Dolor Sit Amet', tags: ['trafalgar', 'kidd']},
        ]);
    }, [])
    const NoteList = notes.map(note => {
        if(note.title.toLowerCase().includes(search.toLowerCase()) || search === ''){
            return (
                <li key={note.title} style={styleNote}>
                    <h2>{note.title}</h2>
                    <p>{note.description}</p>
                    <div style={styleTags}>Tags: {note.tags.join(", ")}</div>
                </li>
            )
        }
        return
    })
    return (
        <div>
            <input
                placeholder={'Search'}
                value={search}
                style={styleSearch}
                onChange={(event) => setSearch(event.target.value)}
            />
            <ul style={styleNotes}>
                {NoteList}
            </ul>
        </div>
    )
}

const styleTags = {
    color: "grey",
    fontSize: 12,
}
const styleNotes = {
    listStyleType: "none",
    padding: 0,
    margin: 10,
}
const styleNote = {
    marginBottom: 5,
    padding: 10,
}
const styleSearch = {
    margin: 10,
}

export default Notes;