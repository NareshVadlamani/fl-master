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
  preLoadedValues,
  isEditing,
  updateUser,
}) => {
  const [gender, setGender] = useState("male");
  const [designations, setDesignations] = useState([]);
  const [units, setUnits] = useState([]);
  const [selectedUnitId, setSelectedUnit] = useState(null);
  const [selectedDesignationId, setSelectedDesignation] = useState(null);
  const [customError, setCustomError] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm({
    defaultValues: preLoadedValues || {},
  });

  const onSubmit = async (values) => {
    const worker = {
      ...values,
      gender,
      unit_id: isEditing ? preLoadedValues.unit_id : selectedUnitId,
      emp_id: `${new Date().getTime()}`,
      designation_id: isEditing
        ? preLoadedValues.designation_id
        : selectedDesignationId,
    };
    if (!worker.unit_id || !worker.designation_id) {
      setCustomError("select unit and designation");
      return;
    }
    //need to replace updated_by & cerated_by data with user details(need to discuss with backend)
    isEditing
      ? updateUser({
          ...preLoadedValues,
          ...worker,
          created_by: "temp",
          updated_by: "temp",
        })
      : addUser(worker);
  };

  const handleUnitChange = (value) => {
    setSelectedUnit(value);
    if (selectedUnitId && selectedDesignationId) setCustomError(null);
  };

  const handleDesignationChange = (value) => {
    setSelectedDesignation(value);
    if (selectedUnitId && selectedDesignationId) setCustomError(null);
  };

  useEffect(() => {
    fetchComponentData();
  }, []);

  // need to move to redux thunks after demo
  const fetchComponentData = async () => {
    const units = await fetchUnits();
    const designations = await fetchDesignations();
    setUnits(units);
    setDesignations(designations);
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

        <CustomInput
          name="contractor_name"
          placeholder={"Contractor Name"}
          ref={register({
            required: "Required",
            validate: (value) => value !== "admin" || "Nice try!",
          })}
        />
        <ErrorMsg>
          {errors.contractor_name && errors.contractor_name.message}
        </ErrorMsg>

        <CustomInput
          type="number"
          maxLength="10"
          name="contractor_phone_number"
          placeholder={"Contractor Phone Number"}
          ref={register({
            required: "Required",
            validate: (value) => value.length === 10,
          })}
        />
        <ErrorMsg>
          {errors.contractor_phone_number && "Provide a valid number"}
        </ErrorMsg>

        <AligningWrapper>
          <Select
            style={{ width: "100%" }}
            placeholder="Select Unit"
            onChange={handleUnitChange}
            defaultValue={
              isEditing
                ? preLoadedValues.unit_id
                : units.length
                ? units[0].unit_id
                : null
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
            defaultValue={
              isEditing
                ? preLoadedValues.designation_id
                : designations.length
                ? designations[0].designation_id
                : null
            }
          >
            {designations.length &&
              designations.map(({ designation_id: id, name }) => (
                <Option value={id}>{name}</Option>
              ))}
          </Select>
        </AligningWrapper>
        <ErrorMsg>{customError}</ErrorMsg>
        <SubmitSection>
          <ActionButtons onClick={() => cancelAction(null)}>
            Cancel
          </ActionButtons>
          <ActionButtons isSubmit type="submit">
            {isEditing ? "Update" : "Submit"}
          </ActionButtons>
        </SubmitSection>
      </form>
    </Container>
  );
};

export default AddUserForm;
