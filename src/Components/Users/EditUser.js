import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const EditUser = () => {

    let Navigation = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });

    const { name, username, email, phone, website } = user;//DESTRUCTION//

    const onInputChange = e => {
        // console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadUser();
    }, [])

    const onSubmit = async e => {
        e.preventDefault()
        await axios.put(`http://localhost:3003/users/${id}`, user);
        Navigation("/")
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);

    }

    return (
        <>
            <h1 style={{ paddingTop: "5%", }}>Edit User</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-control'>
                    <div className='d-flex justify-content-center '>

                        <div style={{ width: "90%", height: "100%", boxShadow: '1px 2px 9px #000000', }}  >
                            <div className="form-group" style={{ paddingLeft: "20%", paddingRight: "20%" }}>



                                <input
                                    type="text"
                                    className="form-control form-control-lg "
                                    placeholder="Enter your Name"
                                    name="name"
                                    style={{ marginTop: "5%" }}
                                    value={name}
                                    onChange={e => onInputChange(e)}
                                />

                                <input
                                    type="text"
                                    className="form-control form-control-lg "
                                    placeholder="Enter your Username"
                                    name="phone"
                                    style={{ marginTop: "2%" }}
                                    value={phone}
                                    onChange={e => onInputChange(e)}
                                />
                                <input
                                    type="text"
                                    className="form-control form-control-lg "
                                    placeholder="Enter your E-mail Address"
                                    name="email"
                                    style={{ marginTop: "2%" }}
                                    value={email}
                                    onChange={e => onInputChange(e)}
                                />
                                <input
                                    type="text"
                                    className="form-control form-control-lg "
                                    placeholder="Enter your Phone Number"
                                    name="username"
                                    style={{ marginTop: "2%" }}
                                    value={username}
                                    onChange={e => onInputChange(e)}
                                />
                                <input
                                    type="text"
                                    className="form-control form-control-lg "
                                    placeholder="Enter your Website Name"
                                    name="website"
                                    style={{ marginTop: "2%" }}
                                    value={website}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                            <button style={{ marginTop: "2%", width: "70%", marginBottom: "10%" }} className="btn btn-warning">Add User</button>
                        </div>

                    </div>
                </div>

            </form>
        </>
    )
}

export default EditUser;