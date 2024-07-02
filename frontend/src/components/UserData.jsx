// UserData.jsx

import React, { useState } from 'react';
import './UserData.css'; // Import the CSS file

const UserData = ({ users, onEditUser, onDeleteUser }) => {
    const [editingId, setEditingId] = useState(null);
    const [editedUser, setEditedUser] = useState({});

    const handleEditClick = (user) => {
        setEditingId(user.id);
        setEditedUser(user);
    };

    const handleSaveClick = () => {
        onEditUser(editedUser.id, editedUser);
        setEditingId(null);
    };

    const handleCancelClick = () => {
        setEditingId(null);
        setEditedUser({});
    };

    const handleDeleteClick = (id) => {
        onDeleteUser(id);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({ ...editedUser, [name]: value });
    };

    return (
        <>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{editingId === user.id ? <input type="text" name="first_name" value={editedUser.first_name} onChange={handleChange} /> : user.first_name}</td>
                    <td>{editingId === user.id ? <input type="text" name="last_name" value={editedUser.last_name} onChange={handleChange} /> : user.last_name}</td>
                    <td>{editingId === user.id ? <input type="email" name="email" value={editedUser.email} onChange={handleChange} /> : user.email}</td>
                    <td>{editingId === user.id ? <input type="text" name="gender" value={editedUser.gender} onChange={handleChange} /> : user.gender}</td>
                    <td>{editingId === user.id ? <input type="text" name="university" value={editedUser.university} onChange={handleChange} /> : user.university}</td>
                    <td>
                        {editingId === user.id ? (
                            <>
                                <button className="save" onClick={handleSaveClick}>Save</button>
                                <button className="cancel" onClick={handleCancelClick}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <button className="edit" onClick={() => handleEditClick(user)}>Edit</button>
                                <button className="delete" onClick={() => handleDeleteClick(user.id)}>Delete</button>
                            </>
                        )}
                    </td>
                </tr>
            ))}
        </>
    );
};

export default UserData;
