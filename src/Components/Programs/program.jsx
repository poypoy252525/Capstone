import "./program.css"
import program1 from "../../assets/program1.png"
import program2 from "../../assets/program2.png"
import program3 from "../../assets/program3.png"

const Programs = () => {
  return (
    <div className='program'>
        <div className="programs">
            <img src={program1} alt=""/>
                </div>
        <div className='programs'>
            <img src={program2} alt=""/>
                </div>
        <div className='programs'>
            <img src={program3} alt=""/>
                </div>
    </div>
  );
};

export default Programs;