import { yupResolver } from "@hookform/resolvers/yup";
import { Button, InputLabel } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import DateTimeField from "src/components/common/FormField/DateTimeField";
import InputField from "src/components/common/FormField/InputField";
import SelectField from "src/components/common/FormField/SelectField";
import TextAreaField from "src/components/common/FormField/TextArea";
import * as yup from "yup";
import "./detail.css";

Detail.propTypes = {};

const schema = yup.object().shape({
  name: yup.string().required("Bạn phải nhập trường này"),
  date: yup.string().required("Bạn phải nhập trường này"),
  pioryty: yup.string().required("Bạn phải nhập trường này"),
});

function Detail(props) {
  const { todo, handleUpdate } = props;

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: todo.name,
      description: todo.description,
      date: todo.date,
      pioryty: todo.pioryty,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (formValue) => {
    handleUpdate({ id: todo.id, ...formValue });
  };

  return (
    <>
      <form
        className="main"
        onSubmit={handleSubmit(handleSubmitForm)}
        style={{
          width: "660px",
          margin: "0px auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            padding: "20px 30px",
          }}
        >
          <InputField
            name="name"
            control={control}
            label="Name"
            style={{ width: "90%" }}
          />
          <div>
            <InputLabel id="description-label" style={{ textAlign: "left" }}>
              Description
            </InputLabel>
            <TextAreaField
              name="description"
              label="description"
              control={control}
              style={{ minHeight: 100, width: "530px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: 140 }}>
              <InputLabel id="date-label" style={{ textAlign: "left" }}>
                Date
              </InputLabel>
              <DateTimeField
                name="date"
                control={control}
                style={{ width: "200px" }}
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
                style={{ width: "200px", height: "60px", marginTop: "-16px" }}
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
              width: "530px",
              backgroundColor: "#5CB85C",
              color: "black",
            }}
            type="submit"
          >
            Update
          </Button>
        </div>
      </form>
    </>
  );
}

export default Detail;
