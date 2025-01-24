import React, { useContext } from "react";
import WaiterForm from "../../components/WaiterForm";
import useUpdateUser from "../../hooks/useUpdateUser";
import { userContext } from "../../pages/waiter/Service";

function UpdateUser() {
  const user = useContext(userContext);
  let role = "";
  if (!user.is_superuser && user.is_staff) {
    role = "Bartender";
  }
  if (!user.is_staff) {
    role = "Waiter";
  }
  const {
    message,
    isLoading,
    form,
    handleChange,
    validateSubmitForm,
    clearMessage,
    fieldError,
  } = useUpdateUser(user);
  return (
    <section
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <h1>Update your profile</h1>

        <WaiterForm
          message={message}
          isLoading={isLoading}
          form={form}
          handleChange={handleChange}
          submitForm={validateSubmitForm}
          clearMessage={clearMessage}
          fieldError={fieldError}
          userRole={role}
          user={user ? user : { first_name: "", last_name: "", username: "" }}
        />
      </div>
    </section>
  );
}

export default UpdateUser;
