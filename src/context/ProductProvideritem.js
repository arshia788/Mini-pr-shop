import React, {createContext, useState} from 'react';
import data from '../data.json';

export const ProviderItem= createContext()

const ProductProvideritem = ({children}) => {

    const [goods, setGoods] = useState(data.products)

    return (
        <div>

            <ProviderItem.Provider value={{goods, setGoods}}>
                {children}
            </ProviderItem.Provider>

        </div>
    );
};

export default ProductProvideritem;