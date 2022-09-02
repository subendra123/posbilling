import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../sidenav/SidebarData";
import Modal from "../../components/modal/Modal";
import "./create.css";
import Nav from "../../admin/admin_page/Nav";
import { useForm } from "react-hook-form";

const Create_store_staff = () => {
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
            <h6 className="fw-bold text-center"> Create User</h6>
            <form class="form-card"  onSubmit={handleSubmit(onSubmit)}>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3">
                    First Name<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="First Name"
                    {...register("fname", { required: true, maxLength: 10 })}
                  />{" "}
                   {errors.fname && <p className="text-error">Please check the First Name</p>}
                </div>

                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                   Last Name
                  </label>{" "}
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder=" Last Name"
                    {...register("lname", { required: true, maxLength: 10 })}
                    
                  />{" "}
                   {errors.lname && <p className="text-error">Please check Last Name</p>}
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Email<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="lname"
                    name="email"
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
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Phone<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    {...register("phone", {
                            required: true,
                            maxLength:10,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                  />{" "}
                     {errors.phone && <p className="text-error">Please check Phone</p>}
                </div>
              </div>
              <div class="form-group col-sm-12 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Position<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="position"
                    name="position"
                    placeholder="Position"
                    onblur="validate(2)"
                    {...register("position",
                            {
                                required: true,
                               
                            })}
                  />{" "}
                   {errors.position && <p className="text-error">Please check Position</p>}
                </div>
              <div class="row justify-content-between text-left">
               
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Password<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onblur="validate(2)"
                    {...register("password", {
                            required: true,
                           
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                  />{" "}
                   {errors.password && <p className="text-error">Please check password</p>}
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Confirm Password
                  </label>{" "}
                  <input
                    type="password"
                    id="confpass"
                    name="confpass"
                    placeholder="Confirm Password"
                    onblur="validate(2)"
                    {...register("confpass", {
                            required: true,
                           
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                  />{" "}
                    {errors.confpass && <p className="text-error">Please check Confirm password</p>}
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

export default Create_store_staff;
