import { researchData } from "../mockData/researchData"

export const Text1 = ({text1}) => {
    const {type, title} = text1;
    return (
        <>
        <p className={type}>{title}</p>
        </>
    );
};

export const Text2 = ({text2}) => {
    const {type, title} = text2;
    return (
        <>
        <h5 className={type}>{title}</h5>
        </>
    );
};

export const Button = ({bttn}) => {
    const {type, title} = bttn;
    return (
        <>
        <button className={type}>{title}</button>
        </>
    );
};

const Research = () => {
    const {text1, text2, bttn,} = researchData;

    return(
        <>
        <div className="up_text">
            <Text1 text1 = {text1} />
            <Text2 text2 = {text2} />
        </div>
        <Button bttn = {bttn} />
        </>
    );
};

export default Research;