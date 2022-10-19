import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartslice";
import "./cart.css";
function Cart() {
  const dispatch = useDispatch();

  const cartList = useSelector((store) => store.cartStore.cartList);
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart());
  };
  return (
    <div className="parent">
      {cartList.map((item) => {
        console.log(item);
        return (
          <div className="card">
            <div className="name">
              <p>{item.title}</p>
            </div>
            <div className="img-wrap">
              <img className=" img" src={item.image} alt="" />
            </div>
            <div className="price">
              <p>price: {item.price}</p>
            </div>
            <div className="name">
              <p>Rate: {item.rating.rate}</p>
            </div>
            <button className="removebtn"
              type="button"
              onClick={() => handleRemoveFromCart()}
            >Remove from cart</button>
          </div>
        );
      })}
    </div>
  );
}
export default Cart;
