import React from "react";

import friends from "../data/friends.json" 
import user from "../data/user.json"

import { FriendsList } from "../FriendsListSection/FriendsList/FriendsList"
import {Profile} from "../Profile/Profile"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <Profile
               username={user.username}
               tag={user.tag}
               location={user.location}
               avatar={user.avatar}
               stats={user.stats}
      />

      <FriendsList friends={friends} />
    </div>
  );
};
