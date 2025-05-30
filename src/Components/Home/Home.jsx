import CardsNews from "./CardsNews/CardsNews";
import SearchCategory from "./SearchCategory/SearchCategory";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <CardsNews />
            <SearchCategory />
        </>
    )
}

export default Home;