import './bagItem.scss';

import decreaseimg from '../../resources/img/decrease.png';
import increaseimg from '../../resources/img/increase.png';

import DB from '../../service/DB.json';

const BagItem = ({id, quantity, onAdd, onRemove}) => {
    const {data} = DB;

    return (
        <div className="bag__list-item">
            <img src={data[id].src1} alt="Dell XPS 13" />
            <div className="bag__list-item-info">
                <h2>{data[id].title}</h2>
                <h3>{data[id].subtitle}</h3>
                <p className="bag__list-item-info-desc">{data[id].shortdesc}</p>
                <p className="bag__list-item-info-rating">Оценка: {data[id].rating}</p>
                <div className="bag__list-item-info-priceholder">
                    <p>{data[id].price}₽ x {quantity}</p>
                    <div className="bag__list-item-info-priceholder-quant">
                        <button onClick={() => onRemove(id)}>
                            <img src={decreaseimg} alt="decrease" />
                        </button>
                        <p>{quantity}</p>
                        <button onClick={() => onAdd(id)} >
                            <img src={increaseimg} alt="increase" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BagItem;