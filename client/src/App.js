import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/users').then(res => {
      setUsers(res.data);
    });
  }, []);

  const addUser = () => {
    axios.post('http://localhost:5000/api/users', { name }).then(res => {
      setUsers([...users, res.data]);
      setName('');
    });
  };

  return (
    <div>
      <h1>Simple MERN App</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map(user => <li key={user._id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
