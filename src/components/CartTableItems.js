import Input from '../form/Input';

function CartTableItems({ quantity, setQuantity }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Item 1</td>
          <td>R$ 10,00</td>
          <td>
            <Input type="number" value={quantity} onChange={setQuantity} />
          </td>
        </tr>
        <tr>
          <td>Item 2</td>
          <td>R$ 420,00</td>
          <td>
            <Input type="number" value={quantity} onChange={setQuantity} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CartTableItems;
