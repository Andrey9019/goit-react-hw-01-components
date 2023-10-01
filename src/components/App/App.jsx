import React from "react";

import user from "../../data/user.json"
import data from '../../data/data.json';
import friends from "../../data/friends.json" 
import transactions from '../../data/transactions.json';

import { Profile } from "../Profile/Profile"
import { Statistics } from "../SectionStatistics/Statistics"
import { FriendsList } from "../FriendsListSection/FriendsList/FriendsList"
import {TransactionHistory} from "../TransactionHistory/TransactionHistory/TransactionHistory"



export const App = () => {
  return (
    <div
      style={{

        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Profile
               username={user.username}
               tag={user.tag}
               location={user.location}
               avatar={user.avatar}
               stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />

    </div>
  );
};
