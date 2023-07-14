import React, { useState } from "react";
import { Button, Card, Input } from "../../components";
import { FIELDS, INITIAL_FORM } from "./SignUp.constants";
import { Form } from "./SignUp.styles";

const SignUp = () => {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const onChange = ({ target }: any) => {
    const { name, value } = target;

    setForm((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card title="Sign Up">
      <Form onSubmit={handleSubmit}>
        {FIELDS.map((field) => (
          <Input
            key={field.id}
            value={form[field.name]}
            onChange={onChange}
            {...field}
          />
        ))}

        <Button type="submit">register</Button>
      </Form>
    </Card>
  );
};

export default SignUp;
