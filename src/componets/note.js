const Note = (title, description) => {
    return (
        <div style={styleRoot}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

const styleRoot = {
    borderBottomWidth: 1,
    borderColor: "grey",
}

export default Note;