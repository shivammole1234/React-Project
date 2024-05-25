import style from './button.module.css';
function Button({text,icon,isOutline,...rest}) {
  return (
    <button {...rest}  className={isOutline ? style.outline_btn: style.primary_btn}>
    {icon}
    {text}
    </button>
  )
}

export default Button