import style from './FriendsListenItem.module.css'


export const FriendsListItem = ({ avatar, name, isOnline }) =>
{
    return (
        <li className={style.item}>
            <span className={style.status}
            style={{backgroundColor : isOnline ? `green` : `red`}}
            >{isOnline}</span> 
            <img className={style.avatar} src={avatar} alt="User avatar" width="48"/>
            <p className={style.name}>{name}</p>
       </li>
    )
}