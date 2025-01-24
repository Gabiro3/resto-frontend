// import TeaForm from "../components/TeaForm";
import TeaForm from "@/components/ui/tea-formv2";
import { useState } from "react";
import axios from "axios";
import fieldValidation from "../utils/fieldValidation.mjs";

export default function AddTea() {
  const [message, setMessage] = useState();
  const clearMessage = () => {
    setMessage();
  };
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    price: 0,
    tea_type: "",
  });

  // handle form input error
  const [fieldError, setFieldError] = useState({});
  const validateSubmitForm = async (e) => {
    e.preventDefault();
    const inputFields = {
      name: form.name,
      price: form.price,
      tea_type: form.tea_type,
    };
    const validatedFields = fieldValidation(inputFields);
    setFieldError(validatedFields);

    if (Object.keys(validatedFields).length == 0) {
      submitForm();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((oldForm) => {
      return { ...oldForm, [name]: value };
    });
  };
  const submitForm = (e) => {
    setIsLoading(true);
    const isDevelopment = import.meta.env.MODE === "production";
    const url = isDevelopment
      ? import.meta.env.VITE_REACT_APP_ADD_TEA_API_DEPLOY
      : import.meta.env.VITE_REACT_APP_ADD_TEA_API;
    axios
      .post(
        url,
        {
          name: form.name,
          price: form.price,
          tea_type: form.tea_type,
        },
        {
          headers: {
            Authorization:
              "Token " +
              localStorage.getItem(import.meta.env.VITE_REACT_APP_TOKEN),
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          setMessage(res.data);
        } else {
          setMessage(res.data);
        }
      })
      .catch((err) => {
        setMessage({
          success: false,
          message: err.message,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="add-tea-content">
      <div className="tea-header" style={{ textAlign: "center" }}>
        <h2>Add Tea/Coffee</h2>
        <p style={{ fontSize: "14px" }}>
          Add Tea, Coffee and Drinks such as Juice, Ice Cream and Smoothies
        </p>
      </div>
      <TeaForm
        message={message}
        isLoading={isLoading}
        form={form}
        handleChange={handleChange}
        submitForm={validateSubmitForm}
        clearMessage={clearMessage}
        fieldError={fieldError}
      />
    </div>
  );
}
