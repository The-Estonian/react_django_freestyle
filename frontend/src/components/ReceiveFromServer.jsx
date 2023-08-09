import { useEffect, useState } from 'react';

import styles from './menu.module.css';
import axios from 'axios';

const ReceiveFromServer = () => {
  const [itemList, setItemList] = useState([
    {
      id: 0,
      name: 'Test',
      lastName: 'Test2',
    },
  ]);

  useEffect(() => {
    axios.get('localhost:8000/list').then((res) => setItemList(res.data));
  });

  return (
    <div className={styles.receive}>
      {itemList.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default ReceiveFromServer;
