import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { selectProductLoadingStatus, selectProducts, fetchProductsAsync } from '../../slices/catalogue/productSlice'
import { selectBillItems, addItem, increaseQuantity, decreaseQuantity } from '../../slices/catalogue/billingSlice'
import Modal from '../../components/modal/Modal'
import { NavLink } from 'react-router-dom'
import { SidebarData } from '../../components/sidenav/SidebarData'
import './BillingDashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Tabs } from 'react-bootstrap'
import { Scrollbars } from 'react-custom-scrollbars-2';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList } from 'react-tabs'




const BillingDashboard = () => {
  const [sidebar, setSidebar] = useState(false);

  const [show, setShow] = useState(false)

    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const status = useSelector(selectProductLoadingStatus);

    const billItems = useSelector(selectBillItems);

    const total_amount = billItems.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    const total_quantity = billItems.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    const total_cgst = billItems.reduce((acc, item) => {
        return acc + item.cgst;
    }, 0);

    const total_sgst = billItems.reduce((acc, item) => {
        return acc + item.sgst;
    }, 0);


    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);


    if (status === 'fetching') {
        return <div>Loading...</div>
    }

    const showSidebar = () => {
      setSidebar(!sidebar);

    } 
    
    return (
        <div>

    
  

<div className="App">
      
      <Container fluid>
      <Row>

      <Col  lg={4}  className="left_side_div">
    <div className='left_header_style'>
      <div className='logo_titile  flex '>
        <div className='logo_text'><h6>Casper Billing</h6></div>
        <div className='logo_icon'><i class="ri-apps-line ri-lg"></i></div>

      </div>
      <div className='search_select_style  flex'>
        <div className='search_style'>
          <input type="text" placeholder='Search products...' />
        </div>
        <div className='select_style'>
            <select>
              <option>Choose Category</option>
              <option>Clothing</option>
              <option>Fashion</option>
              <option>Accessory</option>
            </select>
        </div>

      </div>
      </div>

      <Row>
      <Col className='left_side_product_style'>
      <aside>
      <Scrollbars style={{ width: 420, height: 500,  }}>
       
      {
          products.map((product) => {
                   return(
                         <>

                         
              <div className='sidebar_style'>
              <div className='product_image_container'>
              <img src={product.image} width="25"   alt="No Image"  onClick={() => dispatch(addItem({ product }))}/> 
              </div>
              <div className='product_features'>
              
              <h6>{product.name}</h6>
              <p>{product.selling_price} | <span>In stock</span></p>

              </div>
              <div className='product_info'>
              <button><i class="ri-information-line ri-xl"></i></button>

              </div>
              </div>


                                    
                                     </>
                                 )
                             })
                         }
                         
                                        
             
                                        
                                
                                





       </Scrollbars>
    
      </aside>
     

      </Col>
    </Row>

    </Col>


    <Col lg={8}  className="right_side_div">
  
    <header>
        <Row>
          <Col lg={10} className="right_side_tab_style">
            <Tab>
              <TabList>
                <p>Subendra Mandal</p>
              </TabList>
            </Tab>
            <Tab>
              <TabList>
                <p>Raj Yadav</p>
              </TabList>
            </Tab>

            <button className="new_oreder_tab">New order</button>
          </Col>

          <Col lg={2} className="right_side_user_icon">
            <div className="right_side_header_icon">
              <i class="ri-user-fill ri-lg"></i>
            </div>
          </Col>
        </Row>
      </header>

       


    <Row>


    {billItems.length > 0 ? 

      <Col xl={12} className="added_product ">

      <div className='product_header flex-container  '>
        <div>Particular</div>
        <div>Rate</div>
        <div>Quantity </div>
        <div>Amount</div>
      </div>


       
   <Scrollbars style={{ width: 888, height: 450,   }}>

        
   {
                            billItems.map((item, index) => {
                                return(
                                    <>

                                    
                            
                          <div className='added_product_container '>

                      <div className='product_image'>

                      <img src={item.product.image} alt="product Added Image" /> 

                      </div>
                      <p className='product_title'>{item.product.name}</p>

                      <div className='product_rate'>
                        <p>{item.product.selling_price} </p>
                      </div>

                      <div className='product_quantity'>
                      <span><i class="ri-subtract-line" onClick={() => { dispatch(decreaseQuantity({ productId:item.product.id})) }}></i></span>
                      <span> {item.quantity}</span>
                        <span> <i class="ri-add-line"  onClick={() => { dispatch(increaseQuantity({ productId:item.product.id})) }}></i></span>

                      </div>

                        <div className='product_amount'>
                            <p>{item.total}</p>
                        </div>


                        </div>
                                              

                                    </>
                                )
                            })
                         }
                             
             







</Scrollbars>


   

{/*  RIGHT SIDE FOOTER SECTION DESIGN    */}






  
<Row >
<div  className='right_footer'>
  <Col xl={3}>
  <div className='checkout_footer_style'>
    <div className='right_side_footer_icon'>
    <i class="ri-user-line"></i>
    </div>
    <div className='user_title_mobile'>
        <p>Subendra</p>
        <span>9878955655</span>
    </div>
    </div>
  </Col>
 
  <Col xl={3}>
  <div className='checkout_price_items'>
    <div className='checkout_icon_cart'>
    <i class="ri-shopping-cart-2-line"></i>
    </div>
    <div className='checkout_footer_price_items'>
        <p> {total_amount}</p>
        <span> {total_quantity} items</span>
    </div>
    </div>

  </Col>

 
  <Col xl={3}>
    <div className='checkout_button_clear'>
        <button>Clear</button>
    </div>
  </Col>
  <Col  xl={3}>
  <div className='checkout_button_checkout'>
        <button>Checkout</button>
    </div>
  </Col>

</div>
 
</Row>

  
   
    </Col>
   

        
        
:

<div className='empty_cart_style'>
                                <img src='images/emptycart.png'  width="100%"/>

                            </div>


}
    

  

    </Row>

   
   

    </Col>
        
      </Row>

      </Container>
         
             
                   
                 
                 </div>

           
        </div>





    )
}

export default BillingDashboard