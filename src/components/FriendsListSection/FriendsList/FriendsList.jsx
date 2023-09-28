import { FriendsListItem } from "../FriendsListItem/FriendsListItem";

export const FriendsList =({ friends})=> {
    return (
        <ul >
        {friends.map(({ id, isOnline, name, avatar }) => (
            <FriendsListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
        ))}
        </ul>
   )
}

