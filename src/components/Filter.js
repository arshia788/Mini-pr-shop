import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core'

import { ProviderItem } from '../context/ProductProvideritem';



const useStyles= makeStyles((theme)=>({
    container:{
        padding:theme.spacing(3),
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },

    new:{
        [theme.breakpoints.down('xs')]:{
            marginTop:theme.spacing(2)
        }
    },

    boxRadio:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('xs')]:{    
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
        }
    }
}))

const Filter = ({radioSort, brand, byBrand}) => {

    const classes= useStyles()

    const {goods, setGoods} = useContext(ProviderItem)


    return (
        <div className={classes.container}>
            
            <h2>{goods.length}</h2>


            <div style={{textAlign:"center"}}>
                
                <label>which type do you want</label>
                
                <div className={classes.boxRadio}>

                    <div className={classes.new}>
                        <label >by new</label>
                        <input type='radio' name='radioValue' value="new" onChange={radioSort} />
                    </div>

                    <div style={{margin:'10px'}} >
                        <label>by old</label>
                        <input type='radio' name='radioValue' value="old" onChange={radioSort}/>
                    </div>

                    <div>
                        <label>by lowest price</label>
                        <input type='radio' name='radioValue' value="cheap" onChange={radioSort}/>
                    </div>

                </div>
            </div>

            <select onChange={byBrand} value={brand} >
                <option value=''>all</option>
                <option value="iphone">iphone</option>
                <option value="motorola">motorola</option>
                <option value="blackberry">blackberry</option>
                <option value="lg">lg</option>
                <option value="sony">sony</option>
            </select>


        </div>
    );
};

export default Filter;