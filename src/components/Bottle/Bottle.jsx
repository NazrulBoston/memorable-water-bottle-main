import './Bottle.css';

const Bottle = ({bottle, handleAddToCart}) => {
    // console.log(bottle)
    const {name, img, price}= bottle;
    return (
        <div className='bottle'>
            <h3>Bottle:{name}</h3>
            <img src={img}alt="" />
            <p>Price:${price}</p>
            {/* function a paramete pathaite gele, array function banai dite hobe */}
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;