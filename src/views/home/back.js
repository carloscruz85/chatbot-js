import React, { useState } from "react";
import "./index.scss";
import Data from "../../assets/data/data.json";

const App = () => {
  // arrow to control the current languaje, category and answer
  const [arrow, setArrow] = useState({lg: 1, category:0, question: -1, questionAnswer: 'null'})

  const animationRatio = 0.1;

  //console.log(Data[arrow.lg].welcome);
  return <div className="container">
    <div className="row">
      <div className="col-12">
           {/*language switch*/
            /*Data.map( (c, i)=>{
              return  <div key={i} onClick={ () => setArrow( {...arrow, lg: i} ) }>{c.language}</div>
           })*/
         }
        { /*show initial options if is first visit */ 
        arrow.category === -1 ? 
        <div>
          <h4>{Data[arrow.lg].msg}</h4>
          {/* map categories for current language*/
            Data[arrow.lg].data.map( (c, i)=>{
              const animation = animationRatio * i;
               return <div key={i} onClick={ () => setArrow( {...arrow, category: i} ) } className="item alert alert-primary" style={{'animationDelay': `${animation}s`}}>{c.title}</div>
            })
          }
        </div>
        : null
        }

      { /*show questions if category is selected */ 
        arrow.category !== -1 && arrow.question === -1? 
        <div>
          {/* map questions*/
            Data[arrow.lg].data[arrow.category].questions.map( (c, i)=>{
              const animation = animationRatio * i;
              const question = Object.keys(c)
              //console.log(question, c[question]);
              return <div key={i} onClick={ ()=> setArrow( {...arrow, question: i, questionAnswer: c[question]} ) } className="item alert alert-info" style={{'animationDelay': `${animation}s`}}>{question}</div>
           })
         }
         {/* Whatsapp */}
          <div>
          <a className="btn btn-warning mb-3 mt-1" href="https://wa.me/+503-79229225?text=I'm%20interested%20in%20in%20tourism%20information%20">Talk to agent</a>
          </div>
          {/* back to questions */}
          <div className="button" onClick={ () => setArrow( {...arrow, category: -1} ) } className="btn btn-dark">Back</div>
        </div>
        : null
        }

        { /*show answers if question is selected */ 
        arrow.question !== -1 ? 
        <div>
          <div className="item alert alert-success">
            {
              arrow.questionAnswer
            }
           </div>
           {/* back to questions */}
           <div className="button" onClick={ () => setArrow( {...arrow, question: -1} ) } className="btn btn-dark">Back</div>
        </div>
    
        : null
        } 
      </div>
    </div>
  </div>;
};

export default App;