import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';


import { makeStyles } from '@material-ui/core';


// function
import {checkItem} from '../helper/function';
import {counter} from '../helper/function';
import { splitNumber } from '../helper/function';



// context
import { ContextProvider } from '../context/ContextItemProvider';


const useStyles= makeStyles((theme)=>({
    

    boxHolder:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        padding:'10px',
    },

    box:{
        width:'30%',
        margin:'10px 5px',
        background:'#fff',
        borderRadius:'7px',
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        [theme.breakpoints.down('xs')]:{
            width:"100%"
            
        }
    },

    img:{
        width:'100%', 
        height:'140px', 
        objectFit:'contain', 
        marginBottom:'5px'
    }
,
    info:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'20px 5px',
        [theme.breakpoints.down('xs')]:{
            display:'flex',
            flexDirection:'column',

        }
    }
    
    ,

    button:{
        border:'none', 
        color:'#fff', 
        background:'navy', 
        borderRadius:'5px', 
        padding:'5px', 
        cursor:'pointer',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        [theme.breakpoints.down('xs')]:{
            marginTop:theme.spacing(2),
            fontSize:'1rem'

        }
        
    },


}))

const Leftbar = ({data}) => {

    const classes = useStyles();

    const {state, dispatch} = useContext(ContextProvider);


    return (
        <div style={{display:'flex' , flexWrap:'wrap'}}>

            {
                data.map((item, index)=>{
                    
                    
                    return(
                        <Fade bottom key={index}>
                        <div className={classes.box} key={item.id} >
                        <img className={classes.img} src={item.image} />

                        <p style={{borderBottom:'1px solid #999', paddingLeft:'13px'}}>{item.title}</p>

                        <div className={classes.info}>
                            <span>{splitNumber(item.price)}</span>
                        
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                           {
                               checkItem(state, item.id) ?
                               
                               <button className={classes.button} onClick={()=> dispatch({type:'increase', payload:item})}>increase</button>
                               :
                               <button
                               className={classes.button}
                               onClick={()=> dispatch({type:'add-item', payload:item})}>add item</button>

                            }


                        </div>
                           

                            

                        </div>
                    </div>
                </Fade>
                    )
                })    
            }

        </div>
    );
};

export default Leftbar;