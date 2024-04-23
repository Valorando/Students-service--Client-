import React, { useState } from 'react';
import { getStudent } from '../Services/api';
import './GetComponent.css';

export default function GetComponent() {
    const [getId, setGetId] = useState('');
    const [student, setStudent] = useState(null);
    const [error, setError] = useState('');

    const handleGetStudent = async () => {
        try {
            if (!getId) {
                setError('Введите ID студента');
                return;
            }

            const data = await getStudent(getId);
            setStudent(data);
            setError('');
        } catch (error) {
            setError('Ошибка при получении данных: ' + error.message);
        }
    };

    return (
        <div className='GetComponent'>
            <input
                id='text1'
                value={getId}
                onChange={(e) => setGetId(e.target.value)}
                placeholder="Введите ID студента"
            />
            <button onClick={handleGetStudent}>Отправить</button>
            <hr />
            <p id='responce_header'>Ответ API</p>
            {student && (
                <div id="response">
                    <p>Информация о студенте</p>
                    <p>ID записи: {student.id}</p>
                    <p>Персональный номер: {student.personal_Number}</p>
                    <p>Группа: {student.group_Name}</p>
                    <p>Фамилия: {student.student_Last_Name}</p>
                    <p>Имя: {student.student_First_Name}</p>
                    <p>Отчество: {student.student_Patronymic_Name}</p>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
}
