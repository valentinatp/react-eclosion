import dataNews from '../../../../data/data'
import { Link } from 'react-router-dom';

const CardSearchCategories = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="container-cards-categories">
                        {
                            dataNews.map((news) => (
                                <div className="cards-categories card" key={news.id} id={ news.category } >
                                    <img src={news.pathImage} className="card-image" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{news.title}</h5>
                                        <p className="card-text"> { news.paragraph } </p>
                                    </div>
                                    <button className="btn btn-primary"><Link to="/src/Components/Feed/Feed.jsx" /> </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSearchCategories;