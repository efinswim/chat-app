import React, { useEffect } from 'react';
import styles from './ChatList.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/usersSlice';

function ChatList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userData.userList);
  const status = useSelector((state) => state.userData.status);

  console.log(users, 'user<<')


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
            <div className={styles.chatlist__list_item}>
              <div className={styles.chatlist__list_item_user}>
                <img src={user.avatar} alt="Boris Johnson" />
                <div>
                  <p>{user.name}</p>
                  <p>Slava Ukraine!!!!!!!!!</p>
                </div>
              </div>
              <p>Jun 12, 2022</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ChatList;
