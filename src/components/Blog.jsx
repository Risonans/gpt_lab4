import blogData from "../mockData/blogData";

export const BlogCard1 = ({ blog_card_1_Data }) => {
    const { src, alt, data, title_1, button: { href, articles } } = blog_card_1_Data;
    return (
        <>
        <div className="blog_articles_first">
            <img src={src} alt={alt} />
            <div className="blog_text_1">
                <div className="blog_articles_data">{data}</div>
                <h4 className="blog_articles_title_1">{title_1}</h4>
                <nav className="blog_articles_nav_1">
                    <ul className="blog_articles_link_1">
                        <li><a href={href}>{articles}</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    );
};

export const BlogCard2 = ({ blog_card_2_Data }) => {
    const {src, alt, data, title_1, button: { href, articles }} = blog_card_2_Data;
    return (
        <>
        <div className="blog_articles">
            <img src={src} alt={alt} />
            <div className="blog_text">
                <div className="blog_articles_data">{data}</div>
                <h4 className="blog_articles_title">{title_1}</h4>
                <nav className="blog_articles_nav">
                    <ul className="blog_articles_link">
                        <li><a href={href}>{articles}</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    );
};


const Blog = () => {
    const {blog_card_1_Data, blog_card_2_Data} = blogData;

    return (
        <>
        <div className="con_1">
            <BlogCard1 blog_card_1_Data={blog_card_1_Data} />
        </div>
        <div className="con_2">
            {blog_card_2_Data.slice(0, 2).map((data, index) => (
                <BlogCard2 key={index} blog_card_2_Data={data} />
            ))}
        </div>
        <div className="con_3">
            {blog_card_2_Data.slice(2, 5).map((data, index) => (
                <BlogCard2 key={index} blog_card_2_Data={data} />
            ))}
        </div>
        </>
    );
};

export default Blog;