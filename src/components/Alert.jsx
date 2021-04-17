import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

function Alert() {
    const { alertName: name = '', closeAlert } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
        //eslint-disable-next-line
    }, [name]);
    return (
        <div id="toast-container">
            <div className="toast">{name} added to cart</div>
        </div>
    );
}

export { Alert };
