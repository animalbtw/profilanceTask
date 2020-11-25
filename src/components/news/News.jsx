import * as React from 'react';
import newsStore from "../../store/newsStore";
import Table from "./Table";
import AddNews from "./AddNews";

function News(props) {
    const [news, setNews] = React.useState(newsStore);

    function addNews(item) {
        item.id = news.length + 1;
        setNews([...news, item]);
    };

    const deleteUser = id => {
        setNews( news.filter(item => item.id !== id))
    }

    const renderAppender = (role) => {
        switch (role) {
            case 'admin':
               return (
                   <div>
                       <AddNews addNews={addNews} role={props.role}/>
                   </div>
               );
               break;
            case 'user':
                return(
                    <div>
                        <AddNews addNews={addNews} role={props.role}/>
                    </div>
            );
                break;
            default:
                break;
        }
    }

    return (
        <div className='news-wrapper'>
            <Table news={news} role={props.role} deleteUser={deleteUser}/>
            {
                renderAppender(props.role)
            }
        </div>
    )
}

export default News;