import BlogList from './Bloglist';
import useFetch from './useFetch';


const Home = () => {
    //custom hook we created to handle fetch requests
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {/* evaluates left side and if it is falsy ignores the right side */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;