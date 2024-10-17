import expectData from "../mockData/expectData";

export const Image = ({ image }) => {
    const { alt, src, type } = image;
    return (
        <>
        <div className="section request_early_access__left">
            <img src={src} alt={alt} type={type}/>
        </div>
        </>
    )
}

export const Text = ({ text }) => {
    const { type1, title1, type2, title2, type3, title3, type4, title4 } = text;
    return (
        <>
        <div className="request_early_access__right">
            <p className={type1}>{title1}</p>
            <h2 className={type2}>{title2}</h2>
            <p className={type3}>{title3}</p>
            <a className={type4}>{title4}</a>
        </div>
        </>
    )
}

const Expect = () => {
    const { image, text } = expectData;

    return (
        <>
        <div className="request_early_access__left">
            <Image image={image} />
        </div>
        <div className="request_early_access__right">
            <Text text={text} />
        </div>
        </>
    )
}

export default Expect;