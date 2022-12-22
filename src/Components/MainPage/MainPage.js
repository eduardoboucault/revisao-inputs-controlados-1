import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";

const MainPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [emailC, setEmailC] = useState("");
  const [formFlow, setFormFlow] = useState(1);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeEmailC = (event) => {
    setEmailC(event.target.value);
  };

  const sendData = () => {
    if (
      name.length > 10 &&
      age > 18 &&
      email.includes("@") &&
      email === emailC
    ) {
      setFormFlow(2);
    } else {
      alert("Preencha os campos corretamente!");
    }
  };
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? (
        <NameForm
          name={name}
          age={age}
          email={email}
          emailC={emailC}
          onChangeName={onChangeName}
          onChangeAge={onChangeAge}
          onChangeEmail={onChangeEmail}
          onChangeEmailC={onChangeEmailC}
          sendData={sendData}
        />
      ) : (
        <ConfirmationForm />
      )}
    </MainContainer>
  );
};

export default MainPage;
