import React from 'react';
import styles from './ChatFeed.module.scss';
import sendIcon from '../assets/send.png';

import { useDispatch, useSelector } from 'react-redux';

function ChatFeed() {
  const currentChat = useSelector(state => state.userData.currentChat)
  console.log(currentChat);
  return (
    <div className={styles.chatfeed}>
      <div className={styles.chatfeed__header}>
        <img
          src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
          alt="Boris Johnson"
        />
        <p>Boris Johnson</p>
      </div>
      <div className={styles.chatfeed__content}>
        <div className={styles.chatfeed__content_incoming}>
          <div>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quis.</p>

              <p>4/12/2022, 4:00 AM</p>
            </div>
          </div>
        </div>
        <div className={styles.chatfeed__content_sent}>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quis.</p>
          </div>
          <p>4/12/2022, 4:00 AM</p>
        </div>
        <div className={styles.chatfeed__content_incoming}>
          <div>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quis.</p>

              <p>4/12/2022, 4:00 AM</p>
            </div>
          </div>
        </div>
        <div className={styles.chatfeed__content_sent}>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quis.</p>
          </div>
          <p>4/12/2022, 4:00 AM</p>
        </div>
        <div className={styles.chatfeed__content_incoming}>
          <div>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quis.</p>

              <p>4/12/2022, 4:00 AM</p>
            </div>
          </div>
        </div>
        <div className={styles.chatfeed__content_sent}>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quis.</p>
          </div>
          <p>4/12/2022, 4:00 AM</p>
        </div>
        <div className={styles.chatfeed__content_incoming}>
          <div>
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/220412085815-boris-johnson-0407-super-tease.jpg"
              alt="Boris Johnson"
            />
            <div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quis.</p>

              <p>4/12/2022, 4:00 AM</p>
            </div>
          </div>
        </div>
        <div className={styles.chatfeed__content_sent}>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quis.</p>
          </div>
          <p>4/12/2022, 4:00 AM</p>
        </div>
      </div>
      <div className={styles.chatfeed__form}>
        <span>
          <input type="text" placeholder="Type your message" />
          <img src={sendIcon} alt="send" />
        </span>
      </div>
    </div>
  );
}

export default ChatFeed;
