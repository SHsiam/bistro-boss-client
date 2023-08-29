import { useContext } from "react";
import { AuthContext } from "../../Pages/providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodOrder = ({item}) => {
    const {name, image, price, recipe,_id} = item;
    const{user}=useContext(AuthContext);
    const [,refetch]=useCart();
    const navigate=useNavigate();

    const handleAddToCart=item=>{
      console.log(item)
      
      if(user && user.email){
        const cartItem={menuItemId: _id, name, image, price, email: user.email}
        fetch('http://localhost:5000/carts',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(cartItem)
        })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Food added on the cart.',
            showConfirmButton: false,
            timer: 1500
          })
        }else{
          Swal.fire({
            title: 'Please login to order the food',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
        }
      })
      }
      
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image}alt="image" /></figure>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p className="absolute right-4 top-4 border-slate-900 bg-slate-600 text-white px-3 my-3 rounded">${price}</p>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
    <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodOrder;