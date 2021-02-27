import {useState} from 'react';

const CreateNote = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);

    //POST api call to database
    const createNewNote = () => {
    //     axios.post('url', {
    //         title: title,
    //         description: description,
    //         tags: tags,
    //     }).then((response) => {
    //         logic after creating note
    //     }).catch((error) => {
    //         logic in case of error
    //     })
    }
    const addTag = () => {
        if(tag !== ''){
            setTags((oldTags) => [...oldTags, tag])
        }
        setTag('')
    }
    return (
        <div style={styleRoot}>
            <h1>Create note</h1>
            <input
                style={styleTitle}
                type={'text'}
                placeholder={'Title'}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <div>
                <input
                    style={{marginRight: 10}}
                    placeholder={'Tag'}
                    type={'text'}
                    value={tag}
                    onChange={(event) => setTag(event.target.value.toLowerCase())}
                />
                <button
                    onClick={() => addTag()}
                    style={{marginLeft: 10}}
                >
                    Add
                </button>
            </div>
            <textarea
                rows={30}
                style={styleDescription}
                placeholder={'Description'}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button onClick={() => createNewNote()}>Create</button>
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
export default CreateNote;