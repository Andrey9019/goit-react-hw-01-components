import React from "react";
import friends from "../data/friends.json" 
import { FriendsList } from "../FriendsListSection/FriendsList/FriendsList"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        color: '#010101'
      }}
    >
      <FriendsList friends={friends} />
    </div>
  );
};
