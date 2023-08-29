import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const[tabIndex,setTabIndex]=useState(initialIndex)
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
          <Helmet>
                <title>Bistro Boss | Oder Food</title>
            </Helmet>
           <Cover img={orderCoverImg} title={'Order Food'} description={'Would you like to try dish?'}></Cover> 

           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
  <Tab>Salad</Tab>
  <Tab>Pizza</Tab>
  <Tab>Soup</Tab>
  <Tab>Desserts</Tab>
  <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
   <OrderTab item={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={desserts}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={drinks}></OrderTab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;