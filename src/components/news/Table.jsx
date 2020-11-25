import * as React from 'react';

function Table(props) {
    const [checked, setChecked] = React.useState(props.news)

    if (checked.flag == '') {
        checked.flag = 'approved'
    }

    const deleteUser = (id) => {
        props.deleteUser(id)
    }
    return (
        <div>
            <div className="news-header">
                <h2>
                    Новости
                </h2>
            </div>
            <div className="news-content">
                {
                    props.news.length > 0 ? (
                        props.news.map(item => (
                            <div
                                className='news-wrapper'
                                key={item.id}>
                                {
                                    item.flag == 'approved' || props.role == 'admin' || props.role == 'user'  ? (
                                        <div>
                                            <div className='news-header-content'>
                                                <h2>
                                                    {
                                                        item.header
                                                    }
                                                </h2>
                                                {
                                                    props.role == 'admin' ? (
                                                        <div>
                                                            <input
                                                                id='checkbox-agreement'
                                                                type='checkbox'
                                                                onChange={() => setChecked(item)}/>
                                                                <label>Одобрить?</label>
                                                            <button
                                                                onClick={() => deleteUser(item.id)}>
                                                                Удалить
                                                            </button>
                                                        </div>
                                                    ) : null
                                                }
                                            </div>
                                            <div className='news-body-content'>
                                                {
                                                    item.body
                                                }
                                            </div>
                                            <div className='news-date-content'>
                                                {
                                                    item.date
                                                }
                                            </div>
                                        </div>
                                    ) : null
                                }
                            </div>
                        ))
                    ) : null
                }

            </div>
        </div>
    )
}

export default Table;