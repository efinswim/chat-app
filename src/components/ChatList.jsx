import React, { useEffect } from 'react';
import styles from './ChatList.module.scss';

import { useDispatch } from 'react-redux';
import { fetchUsers, setUsers } from '../store/usersSlice';

function ChatList() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers)
  }, [dispatch])

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
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
        <div className={styles.chatlist__list_item}>
          <div className={styles.chatlist__list_item_user}>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Boris Johnson</p>
              <p>Slava Ukraine!!!!!!!!!</p>
            </div>
          </div>
          <p>Jun 12, 2022</p>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
