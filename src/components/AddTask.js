import { useState } from "react"


const AddTask = (props) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        props.onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form
            className='add-form'
            onSubmit={onSubmit}
        >
            <div className='form-control'>
                <label>Title</label>
                <input
                    type="text"
                    placeholder="Title of task"
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className='form-control'>
                <label>Day and Time</label>
                <input
                    type="text"
                    placeholder="Day and Time"
                    required
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    name="reminder"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}

                />
            </div>

            <input type="submit" value="Save" className="btn btn-block" />

        </form>
    )
}

export default AddTask