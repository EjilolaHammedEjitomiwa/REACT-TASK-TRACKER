import Button from "./Button"

const Header = (props) => {

    
    return (
        <header className='header'>
            <h1>Hello {props.title} </h1>
            <Button
                backgroundColor={props.showAdd ? 'red' : 'green'}
                text={props.showAdd ? 'Close' : 'Add'}
                onClick = {props.onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: "Empty Name"
}

// CSS IN JS

// const headingStyle = {
//     color : "red"
// }


export default Header
