import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../sidenav/SidebarData";
import Modal from "../../components/modal/Modal";
import "./create.css";
import Nav from "../../admin/admin_page/Nav";
import { useForm } from "react-hook-form";

const Create_store_vender = () => {
  
  const [sidebar, setSidebar] = useState(false);
  
  const [show, setShow] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
  
    console.log(data);

}

  return (
    <>
      <div className="container">
        <Nav />
        <div className="sidebar_container_style">
          <div className="sidebar_Container">
            <div className="sidebar_menu_dashboard">
              <div className="menu_icon">
                <i class="ri-dashboard-line"></i>
              </div>
              <div className="menu_text">
                <li>Manage</li>
              </div>
            </div>

            {SidebarData.map((item, index) => {
              return (
                <div className="sidebar_menu">
                  <div className="menu_icon" key={index}>
                    {item.icon}
                  </div>
                  <div className="menu_text">
                    <NavLink className="menu_Navlink" to={item.path}>
                      <li>{item.title}</li>{" "}
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="register_new_container col-lg-12">
          <div className="admin_main_container  shadow p-3 mb-5 bg-body rounded">
            <h6 className="fw-bold text-center"> Create New Store</h6>
            <form class="form-card"  onSubmit={handleSubmit(onSubmit)}>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-4 flex-column d-flex">
                  <label class="form-control-label px-3">
                    Name<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter Name"
                    {...register("firstName", { required: true, maxLength: 10 })}
                  />{" "}
                   {errors.firstName && <p className="text-error">Please check the First Name</p>}
                </div>

                <div class="form-group col-sm-4 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Phone<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    placeholder=" Phone"
                    {...register("phone", {
                            required: true,
                            maxLength:10,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                  />{" "}
                   {errors.phone && <p className="text-error">Please check Phone Number</p>}
                </div>
                <div class="form-group col-sm-4 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Email<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter Email"
                    onblur="validate(2)"
                    {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                  />{" "}
                   {errors.email && <p className="text-error">Please check Email</p>}
                </div>
              </div>
              <div class="row justify-content-between text-left">
               
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Addresh Line 1<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="lname"
                    name="addresh1"
                    placeholder="Addresh Line 1"
                    onblur="validate(2)"
                    {...register("addresh1", {
                            required: true,
                         
                          
                        })}
                  />{" "}
                    {errors.addresh1 && <p className="text-error">Check Addresh 1</p> }
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Addresh Line 2
                  </label>{" "}
                  <input
                    type="text"
                    id="lname"
                    name="addresh2"
                    placeholder="Addresh Line 2"
                    onblur="validate(2)"
                    {...register("addresh2", {
                            required: true,
                         
                          
                        })}
                  />{" "}
                   {errors.addresh2 && <p className="text-error">Check Addresh 2</p> }
                </div>
              </div>

              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-4 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    City<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="mob"
                    name="city"
                    placeholder="City"
                    onblur="validate(4)"
                    {...register("city", {
                            required: true,
                         
                          
                        })}
                  />{" "}
                   {errors.city && <p className="text-error">Check City</p> }
                </div>
                <div class="form-group col-sm-4 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    State<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="mob"
                    name="state"
                    placeholder="State"
                    onblur="validate(4)"
                    {...register("state", {
                            required: true,
                         
                          
                        })}
                  />{" "}
                   {errors.state && <p className="text-error">Check State</p> }
                </div>
                <div class="form-group col-sm-4 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Country<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="email"
                    name="country"
                    placeholder="Country"
                    onblur="validate(3)"
                    {...register("country", {
                            required: true,
                         
                          
                        })}
                  />{" "}
                   {errors.state && <p className="text-error">Check State</p> }
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-4 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">Pincode</label>{" "}
                  <input
                    type="text"
                    id="ans"
                    name="pincode"
                    placeholder="Pincode"
                    onblur="validate(6)"
                    {...register("pincode", {
                            required: true,
                         
                          
                        })}
                  />{" "}
                    {errors.pincode && <p className="text-error">Check Country</p> }
                </div>
                <div class="form-group col-sm-4 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">latitude</label>{" "}
                  <input
                    type="text"
                    id="job"
                    name="latitude"
                    placeholder="latitude"
                    onblur="validate(5)"
                    {...register("latitude", {
                            required: true,
                         
                          
                        })}
                  />{" "}
                  {errors.latitude && <p className="text-error">Check Latitude</p> }
                </div>
                <div class="form-group col-4 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    longitude<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="ans"
                    name="ans"
                    placeholder="longitude"
                    onblur="validate(6)"
                    {...register("longitude", {
                            required: true,
                         
                          
                        })}
                  />{" "}
                   {errors.longitude && <p className="text-error">Check Longitude</p> }
                </div>
              </div>

              <div class="row justify-content-end m-3 ml-n5">
                <div class="form-group col-sm-6">
                  {" "}
                  <button type='submit' class="btn-block ">
                    Add New Store
                  </button>{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create_store_vender;
