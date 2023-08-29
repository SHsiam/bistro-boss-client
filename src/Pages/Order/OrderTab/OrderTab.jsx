import FoodOrder from "../../../components/FoodOrder/FoodOrder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


const OrderTab = ({item}) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
};
    return (
      <div>
         <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
      <SwiperSlide>
        <div className="grid md:grid-cols-3 gap-10">
        {
          item.map(item=><FoodOrder
          key={item._id}
          item={item}
          ></FoodOrder>)
        }
      </div>
      </SwiperSlide>
      </Swiper>
      </div>
    );
};

export default OrderTab;