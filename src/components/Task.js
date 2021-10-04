import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Task = (props) => {

    return (
        <div
            className={`task ${props.task.reminder ? 'reminder' : ''} `}
            onDoubleClick={() => props.onToggle(props.task.id)}
        >
            <h3>
                {props.task.text}
                <FontAwesomeIcon
                    icon={faTimes}
                    style={{ color: 'red' }}
                    onClick={() => props.onDelete(props.task.text, props.task.id)}
                />
            </h3>
            <p> {props.task.day} </p>

        </div>
    )

}
export default Task