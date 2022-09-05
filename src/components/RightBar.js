import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import  Fade  from 'react-reveal/Fade';

// icons
import Icon from 'react-icons-kit';
import {trash} from 'react-icons-kit/fa/trash';
import {minusSquare} from 'react-icons-kit/fa/minusSquare';



// function
import { counter } from '../helper/function';
import { splitNumber } from '../helper/function';

// context
import { ContextProvider } from '../context/ContextItemProvider';



const useStyles= makeStyles((theme)=>({
    container:{
        padding:'10px',
        position:'relative',
    },

    notShown:{
        background:'crimson',
        borderRadius:'5px',
        padding:'13px',
        border:'none',
        color:'#fff',
        textAlign:'center',
        transition:'all .3s ease',
        [theme.breakpoints.down('xs')]:{
            marginLeft:'10px',
        }
    }
,
    isShown:{
        background:'navy',
        borderRadius:'5px',
        padding:'13px',
        border:'none',
        color:'#fff',
        textAlign:'center',
        transition:'all .3s ease',
        [theme.breakpoints.down('xs')]:{
            marginLeft:'10px'
        }
    }
,

    

    cart:{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background:'#fff',
        borderBottom:'1px solid #eee',
        marginTop:'1px',
        padding:'5px 10px',

        [theme.breakpoints.down('xs')]:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center',
            width:"100%",
            margintBottom:theme.spacing(1.5)
        }
    }
,

    detailLeft:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        [theme.breakpoints.down('xs')]:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:"center",
            borderBottom:'2px solid #999'
        }
    },

    img:{
        width:'130px', 
        height:'130px',
        marginRight:theme.spacing(1),
        [theme.breakpoints.down('xs')]:{
            width:"100%",
            height:'110px'
        }
    },

    qty:{
        margin:'0 0 10px 0', 
        height:'15px', 
        borderRadius:'50%', 
        color:'#fff', 
        background:'navy',
        padding:'10px',
        display:'flex', 
        justifyContent:'center',
        alignItems:'center',
    }
    
    ,

    infoRight:{
        display:'flex',
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center',
        paddingBottom:theme.spacing(2.5)
    },


    button:{
        border:'none', 
        background:'crimson', 
        color:'#fff', 
        padding:'5px 10px',
        borderRadius:'5px',
        cursor:'pointer',
    }
    
    ,
    footer:{
        background:"rgb(125, 125, 125)",
        padding:'20px',
        marginTop:theme.spacing(2),
        textAlign:'center',
        color:'#fff',
        borderRadius:'5px',
        [theme.breakpoints.down('xs')]:{
            // padding:'10px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }
    }

}))

const RightBar = () => {

    const {state, dispatch}= useContext(ContextProvider)

    const classes= useStyles()

    const totalPrice= state.rightItems.reduce((a,b)=> a + b.qty* b.price,0)


    return (
        <div className={classes.container}>


            {
                state.rightItems.length === 0
                ?
                    <div className={classes.notShown}>
                        <p>your item's  {state.rightItems.length}</p>
                    </div>
                :

                <div className={classes.isShown}>

                    <p>your item's  {state.rightItems.length}</p>
                </div>
            }

            <div style={{marginTop:'10px'}} >
                {
                    state.rightItems.map((item, index)=> 

                    <Fade right key={item.id}>

                        <div key={item.id} className={classes.cart}>
                    

                        <div className={classes.detailLeft} >
                            <img src={item.image} className={classes.img} />
                            <p>{item.title}</p>
                        </div>

                        <div className={classes.infoRight}>
                            <p>{splitNumber(item.price)}</p>
                            <span className={classes.qty}>{item.qty}</span>

                            {counter(state, item.id) === 1&& <button onClick={()=> dispatch({type:'remove', payload:item})} className={classes.button}> <Icon icon={trash}/> </button>}
                            {counter(state, item.id) > 1&& <button onClick={()=> dispatch({type:'decrease', payload:item})} className={classes.button}> <Icon icon={minusSquare}/> </button>}
                        </div>
                    </div>
                    </Fade>
                    )
                }
            </div>

            <div className={classes.footer}>
                <p>{splitNumber(totalPrice)}</p>
            </div>
            


        </div>
    );
};

export default RightBar;