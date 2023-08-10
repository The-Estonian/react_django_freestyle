import { useEffect, useState } from 'react';

import styles from './menu.module.css';
import axios from 'axios';

const ReceiveFromServer = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/list/').then((res) => {
      console.log(res.data);
      setItemList(res.data);
    });
  }, []);

  return (
    <div className={styles.receive}>
      {itemList.map((item) => (
        <div key={item.pk}>
          <p>{item.fields.firstName}</p>
          <p>{item.fields.lastName}</p>
        </div>
      ))}
    </div>
  );
};

export default ReceiveFromServer;
