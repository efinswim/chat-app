import React from 'react';

import ChatList from './ChatList';
import ChatFeed from './ChatFeed';

import styles from './Chat.module.scss';

function Chat() {
  return (
    <div className={styles.chat}>
      <ChatList />
      <ChatFeed />
    </div>
  );
}

export default Chat;
