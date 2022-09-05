import React, {useContext} from 'react';

import Navbar from './Navbar';
import Landing from './Landing';

// context
import ProductProvideritem from './context/ProductProvideritem';
import ContextItemProvider from './context/ContextItemProvider';

const App = () => {


  return (
    <div>

      <Navbar />

        <ProductProvideritem>
          <ContextItemProvider>

      
            <Landing />



          </ContextItemProvider>
        </ProductProvideritem>


    </div>
  );
};

export default App;