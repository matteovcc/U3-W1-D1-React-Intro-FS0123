const ButtonComponent = props =>{
    return(
        <>
        <button style={{backgroundColor:props.bgColor,color:props.color,padding:props.padding, border:props.border,margin:props.margin,borderRadius:props.radius,fontSize:props.size,position:props.position,right:props.right}}>{props.content}</button>
        </>
    )
}

export default ButtonComponent