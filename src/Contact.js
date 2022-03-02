import React, { useState } from "react";
import { useFormik } from 'formik';
import axios from "axios";

export default function Contacts() {

    const [data,setdata]=useState("")
    const formik = useFormik({
        initialValues: {
            name: "",
            email: '',
            number: "",
            comment: "",
        },
        onSubmit:async values => {
            setdata("")
            try {
                let data = await axios.post("https://guvimentor.herokuapp.com/createstudent",values).then(function(response){
                    setdata(response.data.message)
                   
                })
               
               } catch (error) {
                   console.log(error)
               }
             },
           });
     
  
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-6 bg-light">
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8" >
                                <div className="card" id="forms">
                                    <div className="card-body">
                                        <div className="card-title text-center"><h3>Drop Message here</h3></div>
                                        <div style={{color: "blue"}} className="text-center">{data}</div>
                                        <form onSubmit={formik.handleSubmit}>
                                            <div class="mb-3">
                                                <label htmlFor="name">Enter your Name</label>
                                                <input
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.name}
                                                    placeholder="Name"
                                                    required
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label htmlFor="email">Enter your Email</label>
                                                <input
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.email}
                                                    placeholder=" Email"
                                                    required
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label htmlFor="number">Enter your Phone-Number</label>
                                                <input
                                                    className="form-control"
                                                    id="number"
                                                    name="number"
                                                    type="number"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.number}
                                                    placeholder="Phone Number"
                                                    required
                                                />
                                            </div><br></br>
                                            <div class="mb-3">
                                                <div class="form-floating">
                                                    <textarea class="form-control" placeholder="Leave a comment here" id="comment" name="comment" type="text" onChange={formik.handleChange}
                                                        value={formik.values.comment}></textarea>
                                                    <label for="floatingTextarea">Comments</label>
                                                </div>
                                            </div><br></br>

                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">

                            <div className="col-lg-6  mb-5" id="contactsinfo">
                                <h4>Contact info</h4>
                                <i>
                                    <h5>Kathiresan</h5>
                                    <h6> B.E.Electrical and Electronics Engineering</h6>
                                    <h6> 8189970957</h6>
                                    <h6>hkathiresan@gmail.com</h6>
                                </i>
                                <a href="https://github.com/kathiresanh" target="_blank"><div><span><img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" id="git"></img></span><span><i>&nbsp;View GitHub</i></span></div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}