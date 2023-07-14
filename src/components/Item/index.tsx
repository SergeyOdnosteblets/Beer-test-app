import { useNavigate } from "react-router-dom";
import "./Item.scss";
import { BeerStore } from "../../store";
import { ItemProps } from "../../types/ItemProps";

export const Item: React.FC<ItemProps> = ({ item }) => {
  const { addActive } = BeerStore((state) => state);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    e.preventDefault();
    if (e.type === "click") {
      navigate(`/${id}`);
    } else if (e.type === "contextmenu") {
      addActive(id);
    }
  };

  return (
    <div
      className='container'
      key={item.id}
      onClick={(e) => handleClick(e, item.id)}
      onContextMenu={(e) => handleClick(e, item.id)}
    >
      <div className={item.status ? "item active" : "item"}>
        <div className='image'>
          <img src={item.image_url} alt='' />
        </div>
        <div className='desc'>
          <p className='title'>{item.name}</p>
          <p className='text'>
            {item.description.length > 300
              ? `${item.description.slice(0, 300)}...`
              : item.description}
          </p>
          <div>
            <p className='tagline'>Tagline: {item.tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
