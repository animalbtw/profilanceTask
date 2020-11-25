import * as React from 'react';

function AddNews(props) {
    const currentDate = new Date().toLocaleDateString();
    const initialForm = {
        id: 1,
        date: `${currentDate}`,
        header: '',
        body: '',
        flag: '',
    };
    const [item, setItem] = React.useState(initialForm);

    const inputChange = (event) => {
        const { name, value } = event.currentTarget;
        setItem({ ...item, [name]: value });
    };

    const onSave = () => {
        props.addNews(item);
        setItem(initialForm);
    };

    return (
        <form className='form-wrapper'>
            <label>
                Заголовок:
            </label>
            <input
                onChange={inputChange}
                type='text'
                id='news-header-input'
                name='header'
                value={item.header}
            />
            <label htmlFor='news-body-input'>
                Новость:
            </label>
            <input
                onChange={inputChange}
                type='text'
                id='news-body-input'
                name='body'
                value={item.body}/>
            <input
                type='button'
                value='Сохранить'
                onClick={onSave}/>
        </form>
    )
}

export default AddNews;