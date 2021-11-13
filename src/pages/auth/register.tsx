import { NextPage } from "next";
import { Button, ButtonSize, ButtonStyle, ButtonVariant } from "components/atoms/Button/Button";
import { Form } from "components/Form/Form";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "components/atoms/TextInput/TextInput";
import { inputRequired } from "helpers/defaultValues";

type Inputs = {
  login: string;
  email: string;
  password: string;
};

const Register: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="tw-w-full tw-h-screen tw-flex tw-items-center tw-justify-center">
      <div className="tw-w-1/3">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="tw-flex tw-justify-center tw-text-black tw-uppercase tw-text-4xl tw-font-bold">
            DRAFT
          </div>
          <TextInput {...register("login", { ...inputRequired })} error={errors.login?.message} />
          <TextInput {...register("email", { ...inputRequired })} error={errors.email?.message} />
          <TextInput
            {...register("password", { ...inputRequired })}
            type="password"
            error={errors.password?.message}
          />
          <Button
            onClick={() => false}
            type={"submit"}
            style={ButtonStyle.default}
            variant={ButtonVariant.rounded}
            size={ButtonSize.lg}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
