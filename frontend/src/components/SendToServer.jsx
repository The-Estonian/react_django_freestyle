import { useRef } from 'react';
import styles from './menu.module.css';
import axios from 'axios';

const SendToServer = () => {
  const sender = (e) => {
    e.preventDefault();
    console.log(firstName.current.value);
    console.log(lastName.current.value);

    axios.post(
      'http://127.0.0.1:8000/send/',
      {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      }
    );

    firstName.current.value = '';
    lastName.current.value = '';
  };

  const firstName = useRef();
  const lastName = useRef();
  return (
    <form className={styles.receive} onSubmit={sender}>
      <label>
        <span>First name:</span>
        <input ref={firstName} type='text' />
      </label>
      <label>
        <span>Last name:</span>
        <input ref={lastName} type='text' />
      </label>
      <input type='submit' value='Send to server' />
    </form>
  );
};

export default SendToServer;
