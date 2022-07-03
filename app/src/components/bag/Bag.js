import BagItem from '../bagItem/BagItem';
import EmptyBag from '../emptyBag/EmptyBag';

import './bag.scss';

const Bag = ({bag, onAdd, onRemove}) => {
    const bagList = bag.map(item => {
        return (
            <>
                <BagItem id={item.id} quantity={item.quantity} onAdd={onAdd} onRemove={onRemove} />
            </>
        )
    })

    return (
        <div className="bag">
            <h1>Проверьте товары в корзине</h1>
            <div className="bag__list">
                {bag.length > 0 ? bagList : <EmptyBag/>}
            </div>
        </div>
    )
}

export default Bag;