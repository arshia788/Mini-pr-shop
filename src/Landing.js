import React, {useContext, useState} from 'react';
import { Grid } from '@material-ui/core';


import Filter from './components/Filter';
import Leftbar from './components/Leftbar';
import RightBar from './components/RightBar';

import data from './data.json';

import { ProviderItem } from './context/ProductProvideritem';


const Landing = () => {


    const {goods, setGoods}=useContext(ProviderItem)

    const [sort, setSort]=useState('new')

    const [brand, setBrand]=useState('')



    const radioSort=(event)=>{
        setSort(event.target.value)

        if(event.target.value === 'new'){
            setGoods(goods.sort((a,b)=> a.id - b.id))
        }

        if(event.target.value === 'old'){
            setGoods(goods.sort((a,b)=> b.id - a.id))
        }

        if(event.target.value === 'cheap'){
            setGoods(goods.sort((a,b)=> a.price - b.price))
        }
    }

    const byBrand=(event)=>{
        
        setBrand(event.target.value)
        
        if(event.target.value === ''){
            setGoods(data.products)
        }

        else{
            setGoods(data.products.filter((item)=> item.availableBrand.indexOf(event.target.value) >=0 ))
        }
    }



    


    return (
        <div>
            <Grid container>

                <Grid item xs={12}>

                  <Filter 
                  radioSort={radioSort}
                  sort={sort}
                  byBrand={byBrand}
                  brand={brand}

                  
                  />

                </Grid>

                <Grid item xs={8}>
                  <Leftbar  data={goods}/>
                </Grid>

                <Grid item xs={4}>
                  <RightBar />
                </Grid> 

            </Grid>
        </div>
    );
};

export default Landing;