import "./pedido-itens.scss";
const PedidoItens = () => {
    return (

        <table className='table order-table'>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='product-info' data-title="Item">
                        <div className="image">
                            <img src="/assets/img/produtos/produto-1.png" alt="" />
                        </div>
                        <div className="description">
                            <p><strong>Hastes Flexíveis, Cotonetes</strong></p>
                            <p>Ref: 7891010560737</p>
                        </div>
                    </td>

                    <td data-title="Preço">R$3,32</td>
                    <td data-title="Quantidade">4</td>
                    <td data-title="Subtotal">R$13,28</td>
                </tr>
                <tr>
                    <td className='product-info'>
                        <div className="image">
                            <img src="/assets/img/produtos/produto-1.png" alt="" />
                        </div>
                        <div className="description">
                            <p><strong>Hastes Flexíveis, Cotonetes</strong></p>
                            <p>Ref: 7891010560737</p>
                        </div>
                    </td>

                    <td>R$3,32</td>
                    <td>4</td>
                    <td>R$13,28</td>
                </tr>
                <tr>
                    <td className='product-info'>
                        <div className="image">
                            <img src="/assets/img/produtos/produto-1.png" alt="" />
                        </div>
                        <div className="description">
                            <p><strong>Hastes Flexíveis, Cotonetes</strong></p>
                            <p>Ref: 7891010560737</p>
                        </div>
                    </td>

                    <td>R$3,32</td>
                    <td>4</td>
                    <td>R$13,28</td>
                </tr>
            </tbody>
        </table>


    )
}

export default PedidoItens;