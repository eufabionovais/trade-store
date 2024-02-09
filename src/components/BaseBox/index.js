
import Card from 'react-bootstrap/Card';
import CompletedIcon from '@mui/icons-material/CheckCircleOutline';
import CanceledIcon from '@mui/icons-material/HighlightOffOutlined';
import "./base-box.scss";

function BaseBox({title, variant, children, className, padding}) {

    const variations = {
        "success" : <CompletedIcon />,
        "error": <CanceledIcon />
    }

  return (
    <Card bsPrefix={`base-card`} className={`${variant || ''} ${className || ''}`}>
        {
            title &&
            <Card.Header as="header" bsPrefix="base-card__header" >
                <Card.Title as={"h3"} bsPrefix="base-card__title">
                    {
                        variant && 
                        <div className="base-card__title__icon">
                            {
                                variations[variant]
                            }
                            
                        </div>
                    }
                    
                    {title}
                </Card.Title>
            </Card.Header>        
        }
        <Card.Body bsPrefix="base-card__body" data-gap={padding || null}>
            
            {children}
            
        </Card.Body>
    </Card>
  );
}

export default BaseBox;