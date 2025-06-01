import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { addRecipeAPI } from '../services/allApi';

const Add = () => {
    const [recipeDetails, setRecipeDetails] = useState({
    title: "",
    imgUrl: "",
    ingredient: "",
    desc: "",
    prepTime: "",
  });
const handleSaveClick = async () => {
   if(recipeDetails.title && recipeDetails.imgUrl && recipeDetails.ingredient && recipeDetails.desc && recipeDetails.prepTime){
    let result = await addRecipeAPI(recipeDetails)
    if (result.status >= 200 && result.status <= 300){
        alert('Recipe added sucessfully')
    }else{
        alert('Something went wrong')
    }
   }
   else{
    alert('Please fill the form')
   }
  };
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<>
     <div className="row mt-5">
    <button onClick={handleShow} className='btn border-1'>Add Recipe</button>
   </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
     <FloatingLabel
        controlId="floatingInput"
        label="Recipe Title"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setRecipeDetails({...recipeDetails,title:e.target.value})} type="text" placeholder="Recipe Title" />
      </FloatingLabel>
     <FloatingLabel
        controlId="floatingInput"
        label="Image url"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setRecipeDetails({...recipeDetails,imgUrl:e.target.value})} type="text" placeholder="Image url" />
      </FloatingLabel>
     <FloatingLabel
        controlId="floatingInput"
        label="Ingrediants"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setRecipeDetails({...recipeDetails,ingredient:e.target.value})} type="text" placeholder="Incrediants" />
      </FloatingLabel>
     <FloatingLabel
        controlId="floatingInput"
        label="Description"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setRecipeDetails({...recipeDetails,desc:e.target.value})} type="text" placeholder="Description" />
      </FloatingLabel>
     <FloatingLabel
        controlId="floatingInput"
        label="Expect Time"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setRecipeDetails({...recipeDetails,prepTime:e.target.value})} type="text" placeholder="Expect Time" />
      </FloatingLabel>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveClick}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default Add