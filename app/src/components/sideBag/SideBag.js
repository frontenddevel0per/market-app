import { Link } from 'react-router-dom';
import EmptyBag from '../emptyBag/EmptyBag';

import './sideBag.scss';

import bagimg from '../../resources/img/bag-white.png'

import DB from '../../service/DB.json';

const SideBag = ({bag}) => {
    const {data} = DB;

    const bagList = bag.map(item => {
        return (
            <div className="sidebag-list">
                <div className="sidebag-list-item">
                    <img src={data[item.id].src1} alt="" />
                </div>
            </div>
        )
    })

    return (
        <div className="sidebag">
            <h2>Корзина</h2>
            {bag.length > 0 ? bagList : <EmptyBag/>}
            <div className="sidebag-viewbag">
                <Link to="/bag">
                    <button>
                        <img src={bagimg} alt="Bag icon" />
                        <p>Перейти в корзину</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default SideBag;