// import classes from './Button.module.css'


const Button = (props) => {
    return (
        <button  {...props.attributes}>{props.children}</button>
    )
}
export default Button;