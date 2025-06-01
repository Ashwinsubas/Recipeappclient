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
    <div>
        <img style={{width:'100%',height:'70vh'}} src="https://i.pinimg.com/originals/72/9b/17/729b174fb8d50fce2c76e2dcc4aa14e4.gif" alt="" />

        <div className='d-flex justify-content-center align-items-center mt-2 text-warning'><h3 className='bg-secondary border-1 rounded p-2'>Below button to add Recipes</h3></div>
     <div className="row mt-5">
        <div className='d-flex justify-content-center align-items-center m-2'>
    <button onClick={handleShow} className='btn border-1 bg-danger rounded '>Add Recipe</button></div>
   </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recipes</Modal.Title>
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
      </div>
      </>
  )
}

export default Add