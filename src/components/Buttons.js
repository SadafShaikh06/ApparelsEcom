function Buttons ({onClickHandler, value, title}){
    // console.log('onclickhandler'+onClickHandler);
return <button onClick={onClickHandler} value={value} className="btns">
    {title}
    </button>
}

export default Buttons;