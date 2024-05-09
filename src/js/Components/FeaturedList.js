import React from 'react';
import database from '../../database.json';
import Product from './Product';

function FeaturedList() {
    const featuredChairs = database.chairs.slice(0, 4);

    return (
        <>
            {featuredChairs.map(chair => (
                <Product
                    key={chair.id}
                    image={chair.image}
                    alt={chair.description}
                    description={chair.description}
                    price={chair.price}
                    url={chair.url}
                    badge={chair.isNew ? "new-item" : (chair.isOnSale ? "sales" : null)}
                    badgeName={chair.isNew ? "New" : (chair.isOnSale ? "Sales" : null)}
                    oldprice={chair.isOnSale ? "$30" : null}
                />
            ))}
        </>
    );
}

export default FeaturedList;