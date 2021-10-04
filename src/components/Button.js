const Button = (props) => {

    return (
        <button
            className='btn'
            style={{ backgroundColor: props.backgroundColor }}
            onClick ={props.onClick}
            
            >
            {props.text}</button>
    )

}

Button.defaultProps = {
    backgroundColor: 'red'
}

export default Button