import PropTypes from 'prop-types';
import s from './Transaction.module.css';

function TransactionHistory({items}) {
  return (
    <table className={s.history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {
          items.map(({id, type, amount, currency}) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
        ))
        }
      </tbody>
    </table>
  );
}

TransactionHistory.propsTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,).isRequired,
}

export default TransactionHistory;