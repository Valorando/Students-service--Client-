import React, { useState } from 'react';
import { postStudent } from '../Services/api';
import './PostComponent.css';

export default function PostComponent() {
    const [createId, setCreateId] = useState('');
    const [personalNumber, setPersonalNumber] = useState('');
    const [groupName, setGroupName] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [patronymicName, setPatronymicName] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');

    const handlePostStudent = async () => {
        try {
            if (!createId || !personalNumber || !groupName || !lastName || !firstName || !patronymicName) {
                throw new Error('Введите все необходимые данные');
            }

            const data = await postStudent(createId, personalNumber, groupName, lastName, firstName, patronymicName);

            setResponse(data);
            setError('');
        } catch (error) {
            setError('Ошибка при создании студента: ' + error.message);
        }
    };

    return (
        <div className='PostComponent'>
            <input
                value={createId}
                onChange={(e) => setCreateId(e.target.value)}
                placeholder="ID записи"
            />
            <input
                value={personalNumber}
                onChange={(e) => setPersonalNumber(e.target.value)}
                placeholder="Персональный номер"
            />
            <input
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Группа"
            />
            <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Фамилия"
            />
            <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Имя"
            />
            <input
                value={patronymicName}
                onChange={(e) => setPatronymicName(e.target.value)}
                placeholder="Отчество"
            />
            <button onClick={handlePostStudent}>Отправить</button>
            <hr />
            <p id='responce_header'>Ответ API</p>
            {response && (
                <div id="response">
                    <p>Вы создали нового студента</p>
                    <p>ID записи: {response.id}</p>
                    <p>Персональный номер: {response.personal_Number}</p>
                    <p>Группа: {response.group_Name}</p>
                    <p>Фамилия: {response.student_Last_Name}</p>
                    <p>Имя: {response.student_First_Name}</p>
                    <p>Отчество: {response.student_Patronymic_Name}</p>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
}
