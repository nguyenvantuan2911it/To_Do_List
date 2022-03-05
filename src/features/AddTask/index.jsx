import { yupResolver } from "@hookform/resolvers/yup";
import { Button, InputLabel } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import DateTimeField from "src/components/common/FormField/DateTimeField";
import InputField from "src/components/common/FormField/InputField";
import SelectField from "src/components/common/FormField/SelectField";
import TextAreaField from "src/components/common/FormField/TextArea";
import * as yup from "yup";

AddTask.propTypes = {};

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Bạn phải nhập trường này"),
    date: yup.string().required("Bạn phải nhập trường này"),
    pioryty: yup.string().required("Bạn phải nhập trường này"),
  })
  .required();

function AddTask(props) {
  const { defaultValues } = props;
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { handleAddTask } = props;

  const handleSubmitForm = (formValue) => {
    handleAddTask({ ...formValue, id: Math.floor(Math.random() * 101123) });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: 34 }}>
        New Task
      </h1>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: "700px",
          margin: "0px auto",
        }}
      >
        <InputField
          name="name"
          control={control}
          label="Name"
          placeholder="Add new task ..."
          style={{ width: "100%" }}
        />
        <div>
          <InputLabel id="description-label" style={{ textAlign: "left" }}>
            Description
          </InputLabel>
          <TextAreaField
            name="description"
            label="description"
            control={control}
            style={{ minHeight: 100, width: "100%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <InputLabel id="date-label" style={{ textAlign: "left" }}>
              Date
            </InputLabel>
            <DateTimeField
              name="date"
              control={control}
              style={{ width: "300px" }}
            />
          </div>

          <div>
            <InputLabel id="pioryty-label" style={{ textAlign: "left" }}>
              Pioryty
            </InputLabel>
            <SelectField
              name="pioryty"
              control={control}
              label="Pioryty"
              style={{ width: "300px", height: "60px", marginTop: "-16px" }}
              options={[
                { value: "Normal", label: "Normal" },
                { value: "High", label: "High" },
                { value: "Low", label: "Low" },
              ]}
            />
          </div>
        </div>
        <Button
          style={{
            display: "block",
            marginTop: "15px",
            backgroundColor: "#5CB85C",
            color: "black",
          }}
          type="submit"
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddTask;
