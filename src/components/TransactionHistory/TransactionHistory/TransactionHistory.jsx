import {TransactionItem} from "../TransactionItem/TransactionItem"
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({items}) =>
{
    return <table className={css.container}>
    <thead >
    <tr className={css.row}>
      <th className={css.header}>Type</th>
      <th className={css.header}>Amount</th>
      <th className={css.header}>Currency</th>
    </tr>
        </thead>

    {items.map(({ id, type, amount, currency }) => (
        <TransactionItem
            key={id}
            type ={type}
            amount={amount}
            currency ={currency}
        >
        </TransactionItem>

))}
</table>
}







