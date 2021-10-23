import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
    const { id, name, description, price, full_background } = props;

    const { addToBasket } = useContext(ShopContext);

    return (
        <div className="card">
            <div className="card-image">
                <img className="activator" alt="" src={full_background} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Buy
                </button>
                <span className="right" style={{ fonSize: '11rem' }}>
                    {price}$
                </span>
            </div>
        </div>
    );
}
export { GoodsItem };
