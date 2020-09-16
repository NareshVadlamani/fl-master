import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container } from "@material-ui/core";
import {
  CustomInput,
  GenderSelection,
  GenderLable,
  ActionButtons,
  SubmitSection,
  ErrorMsg,
  AligningWrapper,
  Lable,
} from "./styles";
import { Radio, Select } from "antd";

const { Option } = Select;

const AddUserForm = ({
  cancelAction,
  addUser,
  deleteUser,
  fetchUnits,
  fetchDesignations,
  fetchRoles,
  preLoadedValues,
  isEditing,
  updateUser,
}) => {
  const [gender, setGender] = useState("male");
  const [designations, setDesignations] = useState([]);
  const [units, setUnits] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedUnitId, setSelectedUnit] = useState(null);
  const [selectedRoleId, setSelectedRole] = useState(null);
  const [selectedDesignationId, setSelectedDesignation] = useState(null);
  const [customError, setCustomError] = useState(null);

  const { handleSubmit, register, errors, reset } = useForm({
    defaultValues: preLoadedValues || {},
  });

  const onSubmit = async (values) => {
    // reset();
    console.log(
      "clicked data submission ===>",
      values,
      selectedUnitId,
      selectedRoleId,
      selectedDesignationId
    );
    const name = values.name;
    const role_id = 346;
    const emp_id = values.emp_id;
    const phone_number = values.phone_number;
    const email_id = values.email_id;
    const designation_id = selectedDesignationId;
    const unit_id = selectedUnitId;
    const shift_id = 133;

    const user = {
      name,
      role_id,
      emp_id,
      phone_number,
      gender,
      email_id,
      designation_id,
      unit_id,
      shift_id,
    };
    // if (!selectedUnitId || !selectedDesignationId || !selectedRoleId) {
    //   return;
    // }
    // console.log("from component user data ==>", user);
    // //need to replace updated_by & cerated_by data with user details(need to discuss with backend)
    // isEditing
    //   ? updateUser({
    //       ...preLoadedValues,
    //       ...user,
    //       created_by: "temp",
    //       updated_by: "temp",
    //     })
    //   : addUser(user);
    addUser(user);
  };

  const handleUnitChange = (value) => {
    setSelectedUnit(value);
    if (selectedUnitId && selectedDesignationId && selectedRoleId)
      setCustomError(null);
  };

  const handleDesignationChange = (value) => {
    setSelectedDesignation(value);
    if (selectedUnitId && selectedDesignationId && selectedRoleId)
      setCustomError(null);
  };

  const handleRoleChange = (value) => {
    setSelectedRole(value);
    if (selectedUnitId && selectedDesignationId && selectedRoleId)
      setCustomError(null);
  };

  useEffect(() => {
    fetchComponentData();
  }, []);

  // need to move to redux thunks after demo
  const fetchComponentData = async () => {
    const units = await fetchUnits();
    const roles = await fetchRoles();
    const designations = await fetchDesignations();
    setUnits(units);
    setRoles(roles);
    setDesignations(designations);
    console.log("fetched from form ==>", units, designations, roles);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          name="name"
          placeholder={"Name"}
          ref={register({
            required: "Required",
            validate: (value) => value !== "admin" || "Nice try!",
          })}
        />
        <ErrorMsg>{errors.name && errors.name.message}</ErrorMsg>
        <CustomInput
          name="emp_id"
          placeholder={"Employee ID"}
          ref={register({
            required: "Required",
            validate: (value) => value !== "admin" || "Nice try!",
          })}
        />
        <ErrorMsg>{errors.emp_id && errors.emp_id.message}</ErrorMsg>

        <CustomInput
          type="number"
          placeholder={"Number"}
          maxLength="10"
          name="phone_number"
          ref={register({
            required: "Required",
            validate: (value) => value.length === 10,
          })}
        />
        <ErrorMsg>{errors.phone_number && "Provide a valid number"}</ErrorMsg>

        <GenderSelection>
          <GenderLable>Gender</GenderLable>
          <Radio.Group
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            defaultValue={isEditing ? preLoadedValues.gender : "male"}
          >
            <Radio value={"male"}>Male</Radio>
            <Radio value={"female"}>Female</Radio>
          </Radio.Group>
        </GenderSelection>

        <AligningWrapper>
          <Select
            style={{ width: "100%" }}
            placeholder="Select Unit"
            onChange={handleUnitChange}
            defaultValue={
              isEditing
                ? preLoadedValues.unit_id
                : units.legth && units[0].unit_id
            }
          >
            {units.length &&
              units.map(({ unit_id: id, name }) => (
                <Option value={id}>{name}</Option>
              ))}
          </Select>
        </AligningWrapper>
        <AligningWrapper>
          <Select
            style={{ width: "100%" }}
            placeholder="Select designation"
            onSelect={handleDesignationChange}
            defaultVale={
              isEditing
                ? preLoadedValues.designation_id
                : designations.length && designations[0].designation_id
            }
          >
            {designations.length &&
              designations.map(({ designation_id: id, name }) => (
                <Option value={id}>{name}</Option>
              ))}
          </Select>
        </AligningWrapper>
        <AligningWrapper>
          <Select
            style={{ width: "100%" }}
            placeholder="Select Role"
            onChange={handleRoleChange}
            defaultValue={
              isEditing
                ? preLoadedValues.unit_id
                : roles.legth && roles[0].role_id
            }
          >
            {roles.length &&
              roles.map(({ role_id: id, name }) => (
                <Option value={id}>{name}</Option>
              ))}
          </Select>
        </AligningWrapper>
        <CustomInput
          type="email"
          placeholder={"Email"}
          maxLength="50"
          name="email_id"
          ref={register({
            required: "Required",
            validate: (value) => value.length != 0,
          })}
        />
        <ErrorMsg>{errors.email_id && "Provide a email ID"}</ErrorMsg>

        <SubmitSection>
          <ActionButtons onClick={() => cancelAction(null)}>
            Cancel
          </ActionButtons>
          <ActionButtons isSubmit type="submit">
            Submit
          </ActionButtons>
        </SubmitSection>
      </form>
    </Container>
  );
};

export default AddUserForm;
