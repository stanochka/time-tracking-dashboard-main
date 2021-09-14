import { useState, useEffect } from 'react';
import { Card } from './Card';

export const Details = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(resp => resp.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className='Details'>
      {data.map(item => <Card key={item.title}
                              title={item.title}
                              timeframes={item.timeframes} />)}
    </div>
  )
}
