import React, { useEffect, useState } from "react";
import { deleteRecipeApi, viewRecipeAPI } from "../services/allApi";
import { Button, Card } from "react-bootstrap";

const View = () => {
  const [recipeData, setRecipeData] = useState([]);
  const ViewRecipe = async () => {
    let result = await viewRecipeAPI();
    console.log(result);
    if (result.status >= 200 && result.status <= 300) {
      setRecipeData(result.data);
    } else {
      alert("Error fetching data!!!");
    }
  };
  useEffect(() => {
  ViewRecipe();
}, []);
 const deleteRecipe = async (id) => {
  await deleteRecipeApi(id);
  await ViewRecipe();
};

  return (
    <>
      <div className="border shadow">
        <h1 className="text-center">All Recipes</h1>
        <div className="row container">
         {recipeData?.map((eachRecipe) => (
  <div className="col-lg-3" key={eachRecipe.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img style={{minHeight:'30vh',width:'17.9rem'}} variant="top" src={eachRecipe.imgUrl} />
                <Card.Body>
                  <Card.Title>{eachRecipe.title}</Card.Title>
                  <Card.Text>{eachRecipe.ingredient}</Card.Text>
                  <Card.Text>{eachRecipe.desc}</Card.Text>
                  <Card.Text>{eachRecipe.prepTime}</Card.Text>
                  <div className="d-flex justify-content-between">
                  <Button variant="primary">Edit</Button>

                 <Button onClick={() => deleteRecipe(eachRecipe.id)}>Delete</Button></div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default View;
