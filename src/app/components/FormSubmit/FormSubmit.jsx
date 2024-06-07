'use client';

import React, { useState } from 'react';

export default function FormSubmit() {
    const [email, setEmail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = { email };

        try {
            const response = await fetch('http://localhost:3001/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage('Ваши данные успешно отправлены!');
                setEmail('');
                setIsModalOpen(true); // Открываем модальное окно
            } else {
                setSuccessMessage('Ошибка при отправке данных.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            setSuccessMessage('Ошибка при отправке данных.');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-row gap-2'>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-3/4 rounded-lg border border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-black/100 placeholder-black/70 caret-black/70 outline-black/70"
                    required
                />
                <button
                    type="submit"
                    className="cursor-pointer rounded-[56px] bg-pink-500 py-2 px-4 font-bold transition-colors hover:bg-pink-400 hover:shadow-lg hover:shadow-black/20"
                >
                    Subscribe
                </button>
            </form>
            <div className={`modal ${isModalOpen ? 'active' : ''}`} onClick={closeModal}>
                <div className="relative -right-60 bottom-16 text-6xl" onClick={closeModal}>
                    &times;
                </div>
                <div
                    className='bg-white flex w-[260px] h-[200px] rounded-[20px] items-center text-center'
                    onClick={(e) => e.stopPropagation()}
                >
                    <h5 className='text-green-500 text-xl'>{successMessage}</h5>
                </div>
            </div>
        </>
    );
}