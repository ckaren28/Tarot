import React, { useState, useEffect, ChangeEvent } from "react";
import CardService from "../services/CardService";
import { Link } from "react-router-dom";
import ICard from '../types/Cards'
import { useParams, useNavigate } from 'react-router-dom';


const CardsList: React.FC = () => {
    const [cards, setCards] = useState<Array<ICard>>([]);
    const [currentCard, setcurrentCard] = useState<ICard | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const [searchTitle, setSearchTitle] = useState<string>("");
  
    useEffect(() => {
      retreveAllCards();
    }, []);
  
    const onChangeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
      const searchTitle = e.target.value;
      setSearchTitle(searchTitle);
    };
  
    const retreveAllCards = () => {
      CardService.getAll()
        .then((response: any) => {
          setCards(response.data);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };
  
    const refreshList = () => {
      retreveAllCards();
      setcurrentCard(null);
      setCurrentIndex(-1);
    };
  
    const setActiveCard = (tutorial: ICard, index: number) => {
      setcurrentCard(tutorial);
      setCurrentIndex(index);
    };
  
    const removeAllCards = () => {
      CardService.removeAll()
        .then((response: any) => {
          console.log(response.data);
          refreshList();
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };
  
    const findByTitle = () => {
      CardService.findByTitle(searchTitle)
        .then((response: any) => {
          setCards(response.data);
          setcurrentCard(null);
          setCurrentIndex(-1);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };
  
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={findByTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>All Cards</h4>
  
          <ul className="list-group">
            {cards &&
              cards.map((card, index) => (
                <li
                  className={
                    "list-group-item " + (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveCard(card, index)}
                  key={index}
                >
                  {card.title}
                </li>
              ))}
          </ul>
  
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={removeAllCards}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentCard ? (
            <div>
              <h4>Card</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentCard.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentCard.description}
              </div>
  
              <Link
                to={"/cards/" + currentCard.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Card...</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default CardsList;