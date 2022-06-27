
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friends/FriendList';
import { TransactionHistory } from './transaction/TransactionHistory';

import user from './data/user.json';
import friends from './data/friends.json';
import data from './data/data.json';
import transactions from './data/transactions.json'

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics datas={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
