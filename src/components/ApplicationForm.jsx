import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import Input from "../ui/Input";
import FormRow from "../ui/FormRow";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { useCreateApplication } from "./useCreateApplication";
import { IoMdAdd } from "react-icons/io";

const StyledMainDiv = styled.div`
  padding: 20px;
  background-color: var(--color-white);
  border-radius: 10px;
  margin: 20px;
`;

const StyledHeading = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 26px;
  color: var(--color-main-text-color);
`;

const Icon = styled.span`
  font-size: 26px;
  color: var(--color-main-text-color);

  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin-top: 5px;
  color: var(--color-text-color);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

function ApplicationForm() {
  const [status, setStatus] = useState("pending");
  const { isLoading, createApplication } = useCreateApplication();

  const { register, handleSubmit, reset } = useForm();

  function handleChange(e) {
    setStatus(e.target.value);
  }

  function onSubmit({ company, date_applied, platform, url, notes }) {
    const newApplication = {
      company,
      date_applied,
      platform,
      status,
      url,
      notes,
    };

    createApplication(newApplication), { onSettled: reset };
  }

  // Have to add a way to create new applications
  return (
    <StyledMainDiv>
      <StyledHeading>
        <Icon>
          <IoMdAdd />
        </Icon>
        <Heading>&nbsp;Add New Application</Heading>
      </StyledHeading>
      <P>Record details about your latest job or internship application</P>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Company Name">
          <Input
            placeholder="Enter company name"
            disabled={isLoading}
            id="company"
            {...register("company", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Date Applied">
          <Input
            type="date"
            disabled={isLoading}
            id="date_applied"
            {...register("date_applied", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow label="Where applied?">
          <Input
            disabled={isLoading}
            id="platform"
            {...register("platform", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="URL to the position">
          <Input
            disabled={isLoading}
            id="url"
            type="text"
            {...register("url", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Response Status">
          <Select
            value={status}
            options={[
              { value: "pending", label: "Pending" },
              { value: "rejected", label: "Rejected" },
              { value: "selected", label: "Selected" },
              { value: "interview", label: "Interview Scheduled" },
            ]}
            onChange={handleChange}
          />
        </FormRow>

        <FormRow label="Notes (optional)">
          <Input
            disabled={isLoading}
            type="text"
            id="notes"
            {...register("notes")}
          />
        </FormRow>

        <Button disabled={isLoading} size="form">
          Add
        </Button>
      </Form>
    </StyledMainDiv>
  );
}

export default ApplicationForm;
