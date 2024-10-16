import blogData from "../mockData/blogData";

export const blog_card_1 = ({ blog_card_1_Data }) => {
    const { src, alt, data, title_1, button: { href, articles } } = blog_card_1_Data;
    return (
        <>
        <div class="blog_articles_first">
            <img className="blog_articles_img_first" src={src} alt={alt} />
            <div class="blog_text_1">
                <div class="blog_articles_data">{data}</div>
                <h4 class="blog_articles_title_1">{title_1}</h4>
                <nav class="blog_articles_nav_1">
                    <ul class="blog_articles_link_1">
                        <li><a href={href}>{articles}</a></li>
                    </ul>
                </nav>
            </div>
        </div>
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