import { Field, Input } from "@chakra-ui/react";

const InputField = ({ register, errors, label, name, type = "text" }) => {
  return (
    <Field.Root invalid={errors[name]}>
      <Field.Label color="gray.500" fontSize="small" marginTop="big2" fontFamily="main">
        {label}
      </Field.Label>
      <Input
        bg="gray.50"
        borderRadius="medium"
        padding="medium"
        border="none"
        fontSize="small2"
        fontFamily="main"
        type={type}
        {...register(name, { required: "Required field" })}
      />
      <Field.ErrorText>{errors[name]?.message}</Field.ErrorText>
    </Field.Root>
  );
};

export default InputField;
