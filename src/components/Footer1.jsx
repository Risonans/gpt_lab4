
import { button, footer1Data, question } from "../mockData/footer1Data";

export const Question = ({question})=>{
    return (
        <>        
            <h1 className="enticing__question"> {question.title} </h1>
        </>
    );
};

export const Button = ({button}) =>{
    return (
        <div class="buttons_enticing">
            <a href>
                <button className="buttons_ enticing_singin btn">{button.title}</button>
            </a>
        </div>
    );
};

const Footer1 = () => {
    const { question, button } = footer1Data;

    return(
        <>
            <div className="Footer_string">
                <div className="container">
                    <Question question = {question}/>
                    <Button button = {button}/>
                </div>
            </div>
        </>
    );

};
export default Footer1;