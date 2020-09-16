import React from "react";
import Axios from "axios";

import "../users/addusers/addUsers.css";
import { useForm } from "react-hook-form";

export default function Editusers(user) {
  const { register, errors, handleSubmit } = useForm();

  const [designation, setDesignation] = React.useState([]);
  const [roles, setRoles] = React.useState([]);
  const [units, setUnits] = React.useState([]);
  const [shifts, setShifts] = React.useState([]);
  const [error, setError] = React.useState("");


  React.useEffect(() => {
    Axios.get("http://shark-api-v2.herokuapp.com/api/role/fetch/all")
      .then((res) => {
        console.log("role ", res.data.data);
        setRoles(res.data.data);
      })
      .catch((err) => {});
  }, []);

  React.useEffect(() => {
    Axios.get("http://shark-api-v2.herokuapp.com/api/unit/fetch/all")
      .then((res) => {
        console.log("units ", res.data.data);
        setUnits(res.data.data);
      })
      .catch((err) => {});
  }, []);

  React.useEffect(() => {
    Axios.get("http://shark-api-v2.herokuapp.com/api/designation/fetch/all")
      .then((res) => {
        console.log("designation ", res.data.data);
        setDesignation(res.data.data);
      })
      .catch((err) => {});
  }, []);

  React.useEffect(() => {
    Axios.get("http://shark-api-v2.herokuapp.com/api/shift/fetch/all")
      .then((res) => {
        console.log("shift ", res.data.data);
        setShifts(res.data.data);
      })
      .catch((err) => {});
  }, []);


  const onSubmitHandler = (data) => {
    console.log(data);
    let ans = 
    {
      name: data.Name,
      role_id: data.Roles,
      emp_id: data.EmpID,
      phone_number: data.PhoneNo,
      gender: data.Gender,
      email_id: data.EmailID,
      designation_id: data.Designation,
      unit_id: data.Units,
      shift_id:data.Shifts
    };
    console.log({ans});
    Axios.post(
      "http://shark-api-v2.herokuapp.com/api/user/create",
      {
        name: data.Name,
        role_id: data.Roles,
        emp_id: data.EmpID,
        phone_number: data.PhoneNo,
        gender: data.Gender,
        email_id: data.EmailID,
        designation_id: data.Designation,
        unit_id: data.Units,
        shift_id:data.Shifts
      }
    ).then(
      (response) => {
        console.log(response);
        window.location = "/users";
      },
      (error) => {
        setError(error.message);
        console.log(JSON.stringify(error));
      }
    );
  };

  return (
    <form className="Rectangle-12" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="Rectangle-11">
        <div className="Rectangle-6">
          <span className="heading">Edit User</span>
        </div>
        <div className="tr1">
          <div className="name">
            Name<span class="required">*</span>
          </div>
          <div className="colon">:</div>
          <input
            className="textBox"
            type="text"
            name="Name"
            ref={register({ required: true, maxLength: 80 })}
          />
        </div>
        <div className="tr1">
          <div className="name">
            Employee ID.<span class="required">*</span>
          </div>
          <div className="colon">:</div>
          <input
            className="textBox"
            type="text"
            name="EmpID"
            ref={register({ required: true, maxLength: 80 })}
          />
        </div>
        <div className="tr1">
          <div className="name">
            Phone NO.<span class="required">*</span>
          </div>
          <div className="colon">:</div>
          <input
            className="textBox"
            type="tel"
            placeholder="+91"
            name="PhoneNo"
            ref={register({ required: true, maxLength: 80 })}
          />
        </div>
      
        <div className="tr1">
          <div className="name">
            Unit<span class="required">*</span>
          </div>
          <div className="colon">:</div>
          <select
            className="textBox"
            name="Units"
            ref={register({ required: true })}
          >
            {units.map((post) => {
              return <option value={post.unit_id}>{post.name}</option>;
            })}
          </select>
        </div>
        <div className="tr1">
          <div className="name">
            Gender<span class="required">*</span>
          </div>
          <div className="colon">:</div>
          <select
            className="textBox"
            name="Gender"
            ref={register({ required: true })}
          >
             <option value="Male">Male</option>;
             <option value="Female">Female</option>;
          </select>
        </div>
        <div className="tr1">
          <div className="name">
            Designation<span class="required">*</span>
          </div>
          <div className="colon">:</div>
          <select
            className="textBox"
            name="Designation"
            ref={register({ required: true })}
          >
            {designation.map((post) => {
              return <option value={post.designation_id}>{post.name}</option>;
            })}
          </select>
        </div>
        <div className="tr1">
          <div className="name">
            Role<span class="required">*</span>
          </div>
          <div className="colon">:</div>
          <select
            className="textBox"
            name="Roles"
            ref={register({ required: true })}
          >
            {roles.map((post) => {
              return <option value={post.role_id}>{post.name}</option>;
            })}
          </select>
        </div>
        <div className="tr1">
          <div className="name">
            Role<span class="required">*</span>
          </div>
          <div className="colon">:</div>
          <select
            className="textBox"
            name="Shifts"
            ref={register({ required: true })}
          >
            {shifts.map((post) => {
              return <option value={post.shift_id}>{post.name}</option>;
            })}
          </select>
        </div>
        <div className="tr1">
          <div className="name">
            EmailID<span class="required">*</span>
          </div>
          <div className="colon">:</div>
          <input
            className="textBox"
            type="email"
            name="EmailID"
            placeholder="example@example.com"
            ref={register({ required: true, maxLength: 80 })}
          />
        </div>
        {
          error ? 
          <div>{error}</div>: ""
        }
        <input type="submit" className="submit" value="create" />
      </div>
    </form>
  );
}
