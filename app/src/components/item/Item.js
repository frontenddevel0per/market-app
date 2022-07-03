import { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

import './item.scss';

import back from '../../resources/img/back.png';
import addToBag from '../../resources/img/addtobag.png';

import DB from '../../service/DB.json';

const Item = ({onAdd}) => {
    const {data} = DB;
    const {id} = useParams();
    let navigate = useNavigate();

    const [activeImage, setActiveImage] = useState(data[id].src1);

    const description = data[id].desc.map(item => {
        return (
            <>
                <p>
                    {item}
                </p>
            </>
        )
    })

    return (
        <div className="item">
            <button className="item-back" onClick={() => navigate("/")}>
                <img src={back} alt="Back" />
                <p>Back</p>
            </button>
            <div className="item__header">
                <div className="item__header-collage">
                    <div className="item__header-collage-list">
                        <img src={data[id].src1} alt="Mini Img" onClick={() => setActiveImage(data[id].src1)}/>
                        <img src={data[id].src2} alt="Mini Img" onClick={() => setActiveImage(data[id].src2)} />
                        <img src={data[id].src3} alt="Mini Img" onClick={() => setActiveImage(data[id].src3)} />
                    </div>
                    <div className="item__header-collage-active">
                        <img src={activeImage} alt="Main Img" />
                    </div>
                </div>
                <div className="item__header-info">
                    <h1>{data[id].title}</h1>
                    <h2>{data[id].subtitle}</h2>
                    <p classname="item__header-info-rating">Рейтинг: {data[id].rating}/5</p>
                    <h3>{data[id].price}₽</h3>
                    <p className="item__header-info-shortdesc">
                        {data[id].shortdesc}
                    </p>
                    <button onClick={() => onAdd(id)} >
                        <img src={addToBag} alt="Добавить" />
                        <p>Добавить в корзину</p>
                    </button>
                </div>
            </div>
            <div className="item__footer">
                <h3>Description</h3>
                {description}
            </div>
        </div>
    )
}

export default Item;