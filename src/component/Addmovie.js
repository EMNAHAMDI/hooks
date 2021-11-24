import {Button,Modal} from "react-bootstrap";
import {useState} from 'react' ;
function Example(Movie,setMovie) { 

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,settitle]=useState(false); 
    const [description,setdescription]=useState(false);
    const [Rating,setRating]=useState(false);
    const[Posterurl,setPosterurl]=useState(false);

    const constadd=()=>[setMovie(...Movie,{title,description,Rating,Posterurl})]
    

    

  
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body><input  value={title} onChange={(e)=>settitle(e.target.value)}   />
          <input value={title} onChange={(e)=>setdescription(e.target.value)}/>
         <input value={Rating} onChange={(e)=>setRating (e.target.value)}/>
         <input value={Posterurl} onChange={(e)=>setPosterurl (e.target.value)}/>
        <Button onClick ={constadd} >add </Button>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Example   ;