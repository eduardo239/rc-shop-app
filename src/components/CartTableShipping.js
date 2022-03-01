import { convertToCurrency } from '../helper';

function CartTableShipping({ totalvalue, shipping }) {
  return (
    <section>
      <h5>Resumo</h5>

      <table>
        <thead>
          <tr>
            <th>Subtotal</th>
            <th>Frete</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{convertToCurrency(totalvalue)}</td>
            <td>{convertToCurrency(totalvalue * shipping)}</td>
            <td>{convertToCurrency(totalvalue + totalvalue * shipping)}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default CartTableShipping;
