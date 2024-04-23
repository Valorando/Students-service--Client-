import React, { useState } from 'react';
import { deleteStudent } from '../Services/api';
import './DeleteComponent.css';

export default function DeleteComponent() {
    const [deleteId, setDeleteId] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');

    const handleDeleteStudent = async () => {
        try {
            if (!deleteId) {
                throw new Error('Введите ID записи для удаления');
            }

            await deleteStudent(parseInt(deleteId, 10));
            setResponse('Процедура удаления записи успешно выполнена');
            setError('');
        } catch (error) {
            setError('Ошибка при удалении студента: ' + error.message);
        }
    };

    return (
        <div className='DeleteComponent'>
            <input
                value={deleteId}
                onChange={(e) => setDeleteId(e.target.value)}
                placeholder="ID записи"
            />
            <button onClick={handleDeleteStudent}>Отправить</button>
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
