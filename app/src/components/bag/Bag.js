import BagItem from '../bagItem/BagItem';

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
            <h1>Check your Bag Items</h1>
            <div className="bag__list">
                {bagList}        
            </div>
        </div>
    )
}

export default Bag;