import { useEffect, useState } from "react";
import { BeerStore } from "../../store";
import { BeerItem } from "../../types/BeerItem";
import { Item } from "../Item";
import { Button } from "../UI/Button";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { shallow } from "zustand/shallow";
import { URL } from "../assets/constants";
import "./Home.scss";

export const Home: React.FC = () => {
  const [isButtonDelete, setIsButtonDelete] = useState(false);
  const [beerList, setBeerList] = useState<BeerItem[] | []>([]);
  const [startPos, setStartPos] = useState(0);

  const { data, deleteItems, loadData, count } = BeerStore(
    (state) => state,
    shallow
  );

  const handleDelete = () => {
    deleteItems();
  };

  useEffect(() => {
    setBeerList([...data].slice(startPos, startPos + 15));
    const hasStatus = data.some((item: BeerItem) => item.status);
    hasStatus ? setIsButtonDelete(true) : setIsButtonDelete(false);
  }, [data]);

  useBottomScrollListener(() => {
    if (data.length <= startPos + 20) {
      loadData(`${URL}${count}`);
    }
    const updateLiest = [...data].slice(startPos + 5, startPos + 20);
    setStartPos(startPos + 5);
    setBeerList(updateLiest);
  });

  return (
    <div className='container'>
      <div className='items'>
        {beerList.map((item: BeerItem) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
      {isButtonDelete && (
        <div onClick={handleDelete} className='btn'>
          <Button text='Delete' />
        </div>
      )}
    </div>
  );
};
