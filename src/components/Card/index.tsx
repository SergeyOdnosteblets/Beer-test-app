import { useNavigate, useParams } from "react-router-dom";
import "./Card.scss";
import { BeerStore } from "../../store";
import { Button } from "../UI/Button";

export const Card: React.FC = () => {
  const { data } = BeerStore((state) => state);
  const { id } = useParams();
  const navigate = useNavigate();

  const card = data.filter((item) => item.id === Number(id))[0];

  return (
    <div className='card'>
      <p className='name'>{card.name}</p>

      <img src={card.image_url} alt={card.name} className='image' />
      <div className='info'>
        <p>
          <strong>Description:</strong> {card.description}
        </p>
        <p>
          <strong>abv:</strong> {card.abv}
        </p>
        <p>
          <strong>Brewers tips: </strong>
          {card.brewers_tips}
        </p>
        <p>
          <strong>Contributed by: </strong>
          {card.contributed_by}
        </p>
        <p>
          <strong>First brewed: </strong>
          {card.first_brewed}
        </p>

        <p>
          <strong>Food pairing: </strong>
          {card.food_pairing.join(" ")}
        </p>

        <p>
          <strong>Tagline: </strong>
          {card.tagline}
        </p>
      </div>
      <div onClick={() => navigate(-1)}>
        <Button text='Go Back' />
      </div>
    </div>
  );
};
