import copyright  from "../mockData/footer3Data";


export const Copyright = ({ copyright }) => {
     return <p class="footer_03">{copyright}</p>;
};
const Footer3 = () =>{

    return (
        <>
            <div class="Footer_Footer_Footer">
                <Copyright copyright ={copyright}/>
            </div>
        </>
    );
};

export default Footer3;