import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'



const Bottles = () => {

    const [bottles, setBottles] = useState([])

    // indivisual bottle gulo k amr state ar maddhome aikhane rakhbo and amr chailei push pop karte parbona tai 
    //new array jog kare nibo handleAddToCart array function a 
    const [cart, setCart] = useState([]);



    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())

            // .then(data => console.log(data))
            .then(data => setBottles(data));
    }, [])



    {/*
    niche purchase ar jonno eventhandler add kara hose
     pucrchase button ta kintu akhane nai oita ase bottle ar moddhe but aikhane amra 
]bottle ar component use kartesi, jehetu use kartesi sehetu key, props function k pathaite pari
    handleAddToCart ={handleAddToCart} function k pathie ar man o die dia hoese dynamic hisebe, akhan theke pathaile
  oi khan theke (Bottle.jsx )amra recieve karte parbo const Bottle = ({bottle,  handleAddToCart}) => {

 */}
    const handleAddToCart = bottle => {
        // console.log('Bottle going to be added')
        const newCart = [...cart, bottle];
        setCart(newCart);
        console.log(bottle)
    }


    // console.log(bottles)
    return (
        <div>
            <h3>Bottles Available:{bottles.length}</h3>
            <h4>Cart: {cart.length}</h4>


            {/* akhane div banano hoese bcz div a class use kare  */}
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}

                        handleAddToCart={handleAddToCart}

                    > </Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;  