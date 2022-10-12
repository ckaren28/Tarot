import React, { useState, ChangeEvent } from "react";
import CardService from "../services/CardService";
import ICard from "../types/Cards";

const DealCard: React.FC = () => {
  const initialHandState = {
    id: null,
    title: "",
    description: "",
  };
  const [card, setHand] = useState<ICard>(initialHandState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setHand({ ...card, [name]: value });
  };

  const saveCard = () => {
    var data = {
      title: card.title,
      description: card.description,
    };

    CardService.create(data)
      .then((response: any) => {
        setHand({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newCard = () => {
    setHand(initialHandState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCard}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={card.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={card.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveCard} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default DealCard;
