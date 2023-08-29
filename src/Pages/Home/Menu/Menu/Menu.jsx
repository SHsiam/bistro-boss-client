import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from '../../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../../assets/menu/dessert-bg.jpeg'
import useMenu from "../../../../hooks/useMenu";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
     
    
        <div>
             <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover 
            img={menuImg}
            title={'Our Menu'}
            description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
                        {/* main cover */}
                        <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
              {/* pizzaImg menu items  */}
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
              {/* saladImg menu items  */}
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
              {/* soupImg menu items  */}
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;