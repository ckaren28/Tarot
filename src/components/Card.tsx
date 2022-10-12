import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CardService from "../services/CardService";
import ICard from '../types/Cards';

const Card: React.FC = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
  };
  const [currentCard, setcurrentCard] =
    useState<ICard>(initialTutorialState);
  const [message, setMessage] = useState<string>("");

  const getCard = (id: string) => {
    CardService.get(id)
      .then((response: any) => {
        setcurrentCard(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) getCard(id);
  }, [id]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setcurrentCard({ ...currentCard, [name]: value });
  };

  const updateCard = () => {
    CardService.update(currentCard.id, currentCard)
      .then((response: any) => {
        console.log(response.data);
        setMessage("The card was updated successfully!");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };


  return (
    <div>
      {currentCard ? (
        <div className="edit-form">
          <h4>Card</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentCard.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentCard.description}
                onChange={handleInputChange}
              />
            </div>

           
          </form>

       

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateCard}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Card...</p>
        </div>
      )}
    </div>
  );
};

export default Card;
