import Form from 'react-bootstrap/Form';
import "./filtergroup.scss";
function FilterGroup({title, maxHeight}) {
  return (
    <div className="filters-group" data-max-height={maxHeight}>
        {
            title && 
            <h3 className="filters-group-title">
                {title}
            </h3>
        }
       
        <Form className='form-options-area'>
            <Form.Check className="custom-check"
                type="checkbox"
                label={`Dermocosméticos`}
            />
            <Form.Check className="custom-check"
                type="checkbox"
                label={`Para o cabelo`}
            />
            <Form.Check className="custom-check"
                type="checkbox"
                label={`Para o corpo`}
            />
            <Form.Check className="custom-check"
                type="checkbox"
                label={`Para o rosto`}
            />  
            <Form.Check className="custom-check"
                type="checkbox"
                label={`Maquiagens e acessórios`}
            /> 

            <Form.Check className="custom-check"
                type="checkbox"
                label={`Dermocosméticos`}
            />
            <Form.Check className="custom-check"
                type="checkbox"
                label={`Para o cabelo`}
            />
            <Form.Check className="custom-check"
                type="checkbox"
                label={`Para o corpo`}
            />
            <Form.Check className="custom-check"
                type="checkbox"
                label={`Para o rosto`}
            />  
            <Form.Check className="custom-check"
                type="checkbox"
                label={`Maquiagens e acessórios`}
            /> 
                        <Form.Check className="custom-check"
                type="checkbox"
                label={`Dermocosméticos`}
            />
            <Form.Check className="custom-check"
                type="checkbox"
                label={`Para o cabelo`}
            />
            <Form.Check className="custom-check"
                type="checkbox"
                label={`Para o corpo`}
            />
            <Form.Check className="custom-check"
                type="checkbox"
                label={`Para o rosto`}
            />  
            <Form.Check className="custom-check"
                type="checkbox"
                label={`Maquiagens e acessórios`}
            />                                                            
        </Form>
    </div>
  );
}

export default FilterGroup;