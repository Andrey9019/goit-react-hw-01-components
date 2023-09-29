import css from './Statistics.module.css'
import {getRandomHexColor} from "./RandomColor/randomColor"

export const Statistics = ({ title, stats, }) =>
    
{ return <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css.staList}>
{stats.map(stat=> (<li className={css.item} key={stat.id} style={{backgroundColor:getRandomHexColor()}}>
    <span className={css.label}>{stat.label} </span>
    <span className={css.percentage}>{stat.percentage}%</span>
        </li>)  )}
    </ul>
</section>}