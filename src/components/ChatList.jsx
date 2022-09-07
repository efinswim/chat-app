import React, { useEffect } from 'react';
import styles from './ChatList.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, setCurrentChat } from '../store/userSlice';

function ChatList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userData.userList);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const setCurrentUser = (id) => dispatch(setCurrentChat(id))
  
  

  return (
    <div className={styles.chatlist}>
      <div className={styles.chatlist__header}>
        <img
          src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
          alt="Boris Johnson"
        />
        <input type="search" placeholder="Search or start new chat" />
      </div>
      <div className={styles.chatlist__list}>
        {
          users.map((user) => (
            <div key={user.id} className={styles.chatlist__list_item} onClick={() => setCurrentUser(user.id)}>
              <div className={styles.chatlist__list_item_user}>
                <img src={user.avatar} alt="Boris Johnson" />
                <div>
                  <p>{user.name}</p>
                  <p>{user.messages.at(-1).value}</p>
                </div>
              </div>
              <p>{user.messages.at(-1).date}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ChatList;
