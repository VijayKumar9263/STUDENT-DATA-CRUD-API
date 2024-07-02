// App.js

import React, { useEffect, useState } from 'react';
import UserData from './components/UserData';
import axios from 'axios';
import './App.css'; // Import the CSS file

const API = 'http://localhost:3000/api/users';

const App = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({});
    const [isAdding, setIsAdding] = useState(false);

    const fetchUsers = async () => {
        try {
            const res = await axios.get(API);
            setUsers(res.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleAddUser = async () => {
        try {
            await axios.post(API, newUser);
            setNewUser({});
            fetchUsers();
            setIsAdding(false);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const handleEditUser = async (id, updatedData) => {
        try {
            await axios.put(`${API}/${id}`, updatedData);
            fetchUsers();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`${API}/${id}`);
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="App">
            <h1 align="center">Students Records Details</h1>
            <div className="add-user">
                {!isAdding ? (
                    <button onClick={() => setIsAdding(true)}>Add New User</button>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={newUser.first_name || ''}
                            onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={newUser.last_name || ''}
                            onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={newUser.email || ''}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Gender"
                            value={newUser.gender || ''}
                            onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="University"
                            value={newUser.university || ''}
                            onChange={(e) => setNewUser({ ...newUser, university: e.target.value })}
                        />
                        <button onClick={handleAddUser}>Save</button>
                        <button onClick={() => setIsAdding(false)}>Cancel</button>
                    </>
                )}
            </div>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>University</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <UserData
                        users={users}
                        onEditUser={handleEditUser}
                        onDeleteUser={handleDeleteUser}
                    />
                </tbody>
            </table>
        </div>
    );
};

export default App;
