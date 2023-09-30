import css from "./TransactionItem.module.css"

export const TransactionItem = ({ type, amount, currency }) =>
{
    return (
  <tbody >
  <tr >
    <td className={css.cell}>{type}</td>
    <td className={css.cell}>{amount}</td>
    <td className={css.cell}>{currency}</td>
  </tr>
</tbody>
    )
}