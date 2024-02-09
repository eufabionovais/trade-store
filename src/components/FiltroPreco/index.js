import "./filtro-preco.scss"
import Slider from '@mui/material/Slider';
const FiltroPreco = () => {

    const marks = [
        {
          value: 0,
          label: 'R$ 0',
        },

          {
            value: 100,
            label: 'R$ 1000',
          },                  
      ];

      function valuetext(value) {
        return `R$${value}`;
      }      

    return (
        <div className="filtro-preco-wrapper">
            <h3 className="filters-group-title">
                Preço
            </h3>
            <div className="filtro-preco">

            <Slider
                aria-label="Custom marks"
                defaultValue={0}
                getAriaValueText={valuetext}
                step={5}
                valueLabelDisplay="auto"
                marks={marks}
            />

            </div>
        </div>
    )
}

export default FiltroPreco;