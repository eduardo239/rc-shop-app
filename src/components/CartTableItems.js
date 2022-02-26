import Input from '../form/Input';
import { convertToCurrency } from '../helper';

function CartTableItems({ quantity, setQuantity, items }) {
  return (
    <table className="mb-10">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cor</th>
          <th>Armazenamento</th>
          <th>Quantidade</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.colors[0]}</td>
              <td>{item.storages[0]} GB</td>
              <td>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </td>
              <td>{convertToCurrency(item.price)}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">Não há itens no carrinho</td>
          </tr>
        )}
        {items.length > 0 && (
          <tr>
            <td colSpan="4">Total</td>
            <td>
              {convertToCurrency(
                items.reduce((acc, item) => acc + item.price, 0)
              )}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default CartTableItems;
