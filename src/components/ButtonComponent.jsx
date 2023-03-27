const ButtonComponent = props =>{
    return(
        <>
        <button style={{backgroundColor:props.bgColor}}>{props.content}</button>
        </>
    )
}

export default ButtonComponent