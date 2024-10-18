import footer2Data from "../mockData/footer2Data";

export const Collum1 = ({ collum1 }) => {
    const { src, alt, type, title } = collum1;
    return (
        <>
        <img src={src} alt={alt} />
        <p className={type}>{title}</p>
        </>
    );
};

export const Collum2 = ({ collum2 }) => {
    const { title1, title2, title3, title4, title5 } = collum2;
    return (
        <>
        <h11>{title1}</h11>
        <ul className="Footer_Footer_links">
            <li><a href="#!">{title2}</a></li>
            <li><a href="#!">{title3}</a></li>
            <li><a href="#!">{title4}</a></li>
            <li><a href="#!">{title5}</a></li>
        </ul>
        </>
    );
};

export const Collum3 = ({ collum3 }) => {
    const {title1, title2, title3, title4} = collum3;
    return (
        <>
        <h12>{title1}</h12>
        <ul className="Footer_Footer_company">
            <li><a href="#!">{title2}</a></li>
            <li><a href="#!">{title3}</a></li>
            <li><a href="#!">{title4}</a></li>
        </ul>
        </>
    );
};

export const Collum4 = ({ collum4 }) => {
    const {title, type1, title1, type2, title2, type3, title3} = collum4;
    return (
        <>
        <h13>{title}</h13>
        <p className={type1}>{title1}</p>
        <p className={type2}>{title2}</p>
        <p className={type3}>{title3}</p>
        </>
    );
};

const Footer2 = () => {
    const {collum1 ,collum2, collum3, collum4} = footer2Data;

    return (
        <>
        <div className="Footer_Footer">
            <div className="Footer_Footer_png">
                <Collum1 collum1 = {collum1} />
            </div>
            <nav className="yadurak">
                <Collum2 collum2 = {collum2} />
            </nav>
            <nav className="nedurak">
                <Collum3 collum3 = {collum3} />
            </nav>
            <div className="Footer_Footer_contacts">
                <Collum4 collum4 = {collum4} />
            </div>
        </div>
        </>
    );
};

export default Footer2;