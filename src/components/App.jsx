
import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friends/FriendList';
import { TransactionHistory } from 'components/transaction/TransactionHistory';

import user from 'data/user.json';
import friends from 'data/friends.json';
import data from 'data/data.json';
import transactions from 'data/transactions.json'

export const App = () => {
  return (
    <>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
