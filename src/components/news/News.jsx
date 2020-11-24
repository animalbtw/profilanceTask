import * as React from 'react';
import news from "../../store/newsStore";

function News(props) {
    const [header, setHeader] = React.useState('');
    const [body, setBody] = React.useState('');
    const [postDate, setPostDate] = React.useState('');
    const [flag, setFlag] = React.useState('');
    const date = new Date()

    const onSubmit = () => {
        const completeData = {
            headerData: header,
            bodyData: body,
            dateData: date,
            flagData: flag,
        }

    }

    return (
        <div className='news_wrapper'>
            <div className="news_header">
                <h2>
                    Новости
                </h2>
            </div>
            <div className="news_content">
                <div className='news_header_content'>
                    { news.header }
                </div>
                <div className='news_body_content'>
                    { news.body }
                </div>
                <div className='news_date_content'>
                    { news.date }
                </div>
            </div>
            {
                props.role == 'admin' ? (
                    <h3>
                        admin
                    </h3>
                ) : (
                        <div>
                            {
                                props.role == 'user' ? (
                                    <div>

                                    </div>
                                ) : (
                                    // to user & admin
                                        <form>
                                            <label for='news_header_input'>
                                                Заголовок:
                                            </label>
                                            <input
                                                onChange={e => setHeader(e.target.value)}
                                                type='text'
                                                id='news_header_input'
                                                name='news_header_input'
                                            />
                                            <label for='news_body_input'>
                                                Новость:
                                            </label>
                                            <input
                                                onChange={e => setBody(e.target.value)}
                                                type='text'
                                                id='news_body_input'
                                                name='news_body_input'/>
                                            <input
                                                type='button'
                                                value='Сохранить'
                                                onClick={onSubmit}/>
                                        </form>
                                )
                            }
                        </div>
                )
            }
        </div>
    )
}

export default News;