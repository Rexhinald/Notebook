import {useState} from 'react';

const Map = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    //POST api call to database
    const createNewNote = () => {
        //     axios.post('url', {
        //         title: title,
        //         description: description,
        //     }).then((response) => {
        //         logic after creating note
        //     }).catch((error) => {
        //         logic in case of error
        //     })
    }

    return (
        <div style={styleRoot}>
            <h1>Create note</h1>
            <button onClick={() => createNewNote()}>Create</button>
            <input
                style={styleTitle}
                type={'text'}
                placeholder={'Title'}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <textarea
                rows={30}
                style={styleDescription}
                placeholder={'Description'}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
        </div>
    )
}

const styleRoot = {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
}
const styleTitle = {
    width: '50%',
    margin: 10,
}
const styleDescription = {
    width: '75%',
    height: 400,
    margin: 10,
}
export default Map;