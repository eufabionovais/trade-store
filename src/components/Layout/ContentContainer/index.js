import { propNames } from "@chakra-ui/react";
import "./content-container.scoped.scss";
const ContentContainer = ({children, title, className, padding}) => {
    return (
        <div className={`container ${className || ''}`} data-padding={padding} >
            {
                title && <h2 className="title">{title}</h2>
            }
            
            {children}
        </div>
    )
}

export default ContentContainer;