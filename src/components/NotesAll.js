import Note from './Note'

const NotesAll = ({ notes }) => {
    return (
        <div className="grid gap-4 auto-rows-[minmax(250px,_1fr)]">
            {notes.map((note) => (
                <Note id={note.id} text={note.text} date={note.date}/>
            ))}
        </div>
    )
}

export default NotesAll;