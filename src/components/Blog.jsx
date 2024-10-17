import blogData from "../mockData/blogData";

/* export const blog_card_1 = ({ blog_card_1_Data }) => {
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
}; */

export const blog_card_1 = ({ blog_card_1_Data }) => {
    const { data, title_1 } = blog_card_1_Data;
    return (
      <>
        <div className="blog_articles_data">{data}</div>
        <h4 className="blog_articles_title_1">{title_1}</h4>
      </>
    );
  };

const Blog = () => {
    const {blog_card_1_Data} = blogData;

    return (
        <>
        <div className="con_1">
            <blog_card_1 blog_card_1_Data={blog_card_1_Data}/>
        </div>
        </>
    );
};

export default Blog;