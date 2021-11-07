import { NextPage } from "next";
import { Button, ButtonSize, ButtonStyle, ButtonVariant } from "components/atoms/Button/Button";
import { Form } from "components/Form/Form";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  console.log(watch("example"));
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="tw-w-full tw-h-screen tw-flex tw-items-center tw-justify-center">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" defaultValue="test" {...register("example")} />
        <input type="text" {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <Button
          onClick={() => false}
          type={"submit"}
          style={ButtonStyle.default}
          variant={ButtonVariant.rounded}
          size={ButtonSize.xl}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
