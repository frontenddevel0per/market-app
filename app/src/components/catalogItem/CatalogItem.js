import { Link } from 'react-router-dom';

import './catalogItem.scss';

import addToBag from '../../resources/img/addtobag.png';

const CatalogItem = ({id, title, subtitle, price, src, onAdd}) => {
    return (
        <div className="catalog__list-item">
            <Link to={`/${id}`} >
                <img src={src} alt="" />
            </Link>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <div className="catalog__list-item-bottom">
            <h4>
                {price}₽
            </h4>
            <button onClick={() => onAdd(id)}>
                <img src={addToBag} alt="" />
            </button>
            </div>
        </div>
    )
}

export default CatalogItem;