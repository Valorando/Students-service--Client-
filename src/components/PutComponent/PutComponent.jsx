import React, { useState } from 'react';
import { editStudent } from '../Services/api';
import './PutComponent.css';

export default function PutComponent() {
    const [editId, setEditId] = useState('');
    const [editPersonalNumber, setEditPersonalNumber] = useState('');
    const [editGroupName, setEditGroupName] = useState('');
    const [editLastName, setEditLastName] = useState('');
    const [editFirstName, setEditFirstName] = useState('');
    const [editPatronymicName, setEditPatronymicName] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');

    const handleEditStudent = async () => {
        try {
            if (!editId || !editPersonalNumber || !editGroupName || !editLastName || !editFirstName || !editPatronymicName) {
                throw new Error('Введите все необходимые данные');
            }

            const data = await editStudent(
                parseInt(editId, 10),
                editPersonalNumber,
                editGroupName,
                editLastName,
                editFirstName,
                editPatronymicName
            );
            setResponse('Процедура обновления значений успешно выполнена');
            setError('');
        } catch (error) {
            setError('Ошибка при обновлении студента: ' + error.message);
        }
    };

    return (
        <div className='PutComponent'>
            <input
                value={editId}
                onChange={(e) => setEditId(e.target.value)}
                placeholder="ID записи"
            />
            <input
                value={editPersonalNumber}
                onChange={(e) => setEditPersonalNumber(e.target.value)}
                placeholder="Новый персональный номер"
            />
            <input
                value={editGroupName}
                onChange={(e) => setEditGroupName(e.target.value)}
                placeholder="Новая группа"
            />
            <input
                value={editLastName}
                onChange={(e) => setEditLastName(e.target.value)}
                placeholder="Новая фамилия"
            />
            <input
                value={editFirstName}
                onChange={(e) => setEditFirstName(e.target.value)}
                placeholder="Новое имя"
            />
            <input
                value={editPatronymicName}
                onChange={(e) => setEditPatronymicName(e.target.value)}
                placeholder="Новое отчество"
            />
            <button onClick={handleEditStudent}>Отправить</button>
            <hr />
            <p id='responce_header'>Ответ API</p>
            {response && (
                <div id="response">
                    <p>{response}</p>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
}
