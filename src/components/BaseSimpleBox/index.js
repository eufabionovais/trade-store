import "./base-simple-box.scss";
const BaseSimpleBox = ({title, children, className}) => {
    return (
        <div className={`simple-box ${className || ""}`}>
            {title && <h3 className='simple-box__title'>{title}</h3>}
            {children}
        </div>
    )
}

export default BaseSimpleBox;