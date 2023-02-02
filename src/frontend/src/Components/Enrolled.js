import React from 'react';
import { useState } from 'react';
import { Alert } from '@mui/material';
import jsPDF from 'jspdf';





const Syllabus = ({ course }) => {


  const videoId = course.previewLink.split("=")[1];

  return (
    <div>
       
    <div className='d-flex justify-content-center align-items-center'>
      
      <h2><p><strong>{course.Title}</strong></p></h2>
      
      </div>
      {course.Subtitles&&course.Subtitles.map((subtitle,index)=>
      <div className="row">
      <div className="col-3 ml-auto pr-20">
      <Sub key={subtitle._id} Subtitle={subtitle} index={index}></Sub>
      
      </div>
  </div>
     )}
      
      <div class="embed-responsive embed-responsive-16by9 text-center align-items-center justify-content-center" >
            <iframe class="embed-responsive-item" style={{width: "300px", height: "300px"}} src={`https://www.youtube.com/embed/${videoId}?rel=0`}  frameborder="0" allow="accelerometer; autoplay; encrypted-media;  picture-in-picture" allowFullScreen></iframe>
        </div>
       
      
 </div>
    
 )
}






const Sub = ({Subtitle , index})=>{
  const [notes, setNotes] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);
  const videoId = Subtitle.weekOne.video.split("=")[1];
  const examModalId = `exam-modal-${index}`;



const handleNotesChange = e => {
  setNotes(e.target.value);
}
const handleDownloadPdf = () => {
  const pdf = new jsPDF();
  pdf.text(notes, 10, 10);
  pdf.save("notes.pdf");
}
  const videoContainerId = `video-container-${index}`;
  return  (<div className="text-left">
    <ExamModal subtitleId={Subtitle._id} key={Subtitle._id} questions={Subtitle.exam.question} />
 <button className="btn-link" data-toggle="collapse" data-target={`#${videoContainerId}`}><p><strong>Subtitle {index+1}: </strong>{Subtitle.weekOne.title}</p></button>
 
 <div id={videoContainerId} class="collapse">
 
  <iframe src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div className='py-1'>
   <textarea id="notes-textarea" value={notes} onChange={handleNotesChange} />
   <button className='btn btn-outline-danger btn-block' onClick={handleDownloadPdf} disabled={notes.length===0}>
      <i className='fas fa-download' aria-hidden='true'>Notes as PDF</i>
    </button>
    </div>
  <div className='py-1'><p>{Subtitle.weekOne.videoDescription}</p></div>
  <div className='py-1'><p><strong>Hours : </strong>{Subtitle.TotalHours}</p></div>
  <div className='py-1'><button className='btn btn-outline-danger btn-block' data-toggle='modal'  data-target='#exam'>
                            <i className='fas fa-danger' aria-hidden='true'> Exam</i>

                        </button>
                        
                        </div>
 </div>
    </div>
  )


}

const ExamModal = ({subtitleId, questions }) => {
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showExam, setShowExam] = useState(false);

  const handleAnswerChange = (e) => {
    
    
    setAnswers({...answers, [questions[currentQuestion]._id]: e.target.value});
  }
  
  const handleNextQuestion = () => {
    if(currentQuestion < questions.length -1 )
    setCurrentQuestion(currentQuestion + 1);
    }



  const handleSubmit = async (evt) => {
    evt.preventDefault(); 
    console.log(answers)

      const response = await fetch('/instructor/submit-answers', {
        method: 'POST',
        body: JSON.stringify(answers),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      console.log(data);
      if(response.ok){
        setExamSubmitted(true);
        setSuccess(data.success)
      }
    if(!response.ok){

      setError(data.error)
      setExamSubmitted(false)
      setSuccess('')
 }
    

    

  }

  return (
    <div className="modal fade" id="exam" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-center modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-info text-white">
            <h5 className="modal-title" id="exampleModalLongTitle">The Exam</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>     
            {error && <Alert variant="danger">{error}</Alert>}
             {success && <Alert variant="success">{success}</Alert>}                            
          </div>  
          <div className="modal-body">
            <h6>Question {currentQuestion + 1} of {questions.length}</h6>
            <p>{questions[currentQuestion].Q}</p>
            <form>
            <input type="radio" name='answer' value={questions[currentQuestion].firstAnswer} onChange={ (e)=>handleAnswerChange(e)} /> {questions[currentQuestion].firstAnswer} <br />
            <input type="radio" name='answer' value={questions[currentQuestion].secondAnswer} onChange={ (e)=>handleAnswerChange(e)} /> {questions[currentQuestion].secondAnswer} <br />
            <input type="radio" name='answer' value={questions[currentQuestion].thirdAnswer} onChange={ (e)=>handleAnswerChange(e)} /> {questions[currentQuestion].thirdAnswer} <br />
            <input type="radio" name='answer' value={questions[currentQuestion].fourthAnswer} onChange={ (e)=>handleAnswerChange(e)} /> {questions[currentQuestion].fourthAnswer} <br />
            

            
            
            </form> 
          </div>
          <div className="modal-footer">
            
            {/* <button type="button" className="btn btn-secondary" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>Previous</button> */}
            <button type="button" className="btn btn-secondary " onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>Next</button>
            <button type="button" className="btn  btn-info"  onClick={handleSubmit} disabled={examSubmitted}>Submit</button>
          </div>
       </div>
    </div>
  </div>
  );
}








const Exam = ({ exam }) => {
  return <div>Exam </div>;
};

const TotalHours = ({ hours }) => {
  return <div>Total hours: {hours}</div>;
};

export default Syllabus;









{/* <button className='btn btn-outline-danger btn-block' data-toggle='modal'  data-target='#exam' onClick={() => this.showExam()}>
    <i className='fas fa-danger' aria-hidden='true'> Exam</i>
</button> */}
