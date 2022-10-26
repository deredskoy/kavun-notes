import { MdDeleteForever } from 'react-icons/md'

const Note = ({ id, text, date }) => {
    return (
        <div className="bg-[#fef68a] rounded-xl p-6 min-h-[170px] flex flex-col justify-between">
            <span>{text}</span>
            <div className="flex items-center justify-between">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size="1.3em"/>
            </div>
        </div>
    )
}

export default Note;