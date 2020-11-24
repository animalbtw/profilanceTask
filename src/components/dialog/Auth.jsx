import * as React from 'react';
import './Auth.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { admin } from "../../store/userStore";
import { user } from "../../store/userStore";

function Auth(props) {
    const [open, setOpen] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const closeModal = () => setOpen(false);

    const onSubmit = () => {
        const modal = document.getElementById('popup_wrapper')
        const popup_header = document.getElementById('popup_header')
        if (admin.login == username && admin.password == password) {
            props.updateRole('admin');
            setOpen(false);
        } else if (user.login == username && user.password == password) {
            props.updateRole('user');
            setOpen(false);
        } else {
            modal.style.border = 'thick solid red'
            popup_header.innerText = 'Неверные данные'
        }

    }

    return (
        <div>
            {
                props.role == '' ? (
                    <div>
                    <button
                        type="button"
                        className='button'
                        onClick={() => setOpen(true)}>
                        Вход
                    </button>
                    <Popup
                        className='popup'
                        open={open}
                        closeOnDocumentClick
                        onClose={closeModal}>
                        <div
                            className='popup_wrapper'
                            id='popup_wrapper'>
                            <div
                                className='popup_header'
                                id='popup_header'>
                                Авторизация
                            </div>
                            <div className="popup_inputs">
                                <input
                                    className='popup_input'
                                    type='text'
                                    onChange={e => setUsername(e.target.value)}
                                    placeholder='Пользоваель'/>
                                <input
                                    className='popup_input'
                                    type='password'
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder='Пароль'/>
                            </div>
                            <div className="popup_actions">
                                <button
                                    className='popup_submit'
                                    onClick={onSubmit}>
                                    Подтвердить
                                </button>
                                <button
                                    className='popup_cancel'
                                    onClick={() => setOpen(false)}>
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </Popup>
                    </div>
                ) : (
                    <button
                        onClick={() => props.updateRole('')}>
                        Выйти
                    </button>
                )
            }

        </div>
    )
}

export default Auth;