import * as React from 'react';
import './Auth.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Auth() {
    const [open, setOpen] = React.useState(false);
    const closeModal = () => setOpen(false);

    return (
        <div>
            <button type="button" className='button' onClick={() => setOpen(o => !o)}>
                Вход
            </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className='popup_wrapper'>
                    <div className="popup_header">
                        Авторизация
                    </div>
                    <div className="popup_inputs">
                        <input type='text' placeholder='Пользоваель'/>
                        <input type='text' placeholder='Пароль'/>
                    </div>
                    <div className="popup_actions">
                        <button className='popup_submit'>
                            Подтвердить
                        </button>
                        <button
                            className='popup_cancel'
                            onClick={closeModal}>
                            Отмена
                        </button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default Auth;