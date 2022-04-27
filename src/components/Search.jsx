import { useSearchParams } from "react-router-dom";
import ArticlesList from "./ArticlesList";

const Search = ({articles}) => {
    console.log(articles, "<<< from search")
    const [search, setSearch] = useSearchParams('');
    const filterAuthor = (author) => (articles) => {
        articles.includes(author)
    }
    const byAuthor = (author) => (article) => article.author.toLowerCase().includes((author || '').toLowerCase());
    // const byAuthor = (author) => (article) =>
//   article.author.toLowerCase().includes((author || '').toLowerCase());
    
    const handleSearch = (event) => {
        setSearch({author: event.target.value});
    };
    
    return ( 
        <section className="search">
            <input 
                type="text"
                placeholder="Search authors..."
                value={search.get('author')} 
                onChange={handleSearch}
            />
        </section>
    );
}
 
export default Search;