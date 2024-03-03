import { useNavigate } from "react-router-dom";
import { Title } from "../components/common/Title";
import { InputText } from "../components/common/InputText";
import { Button } from "../components/common/Button";
import { useForm } from "react-hook-form";
import { resetRequest, resetPassword } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import { SignupStyle } from "./Signup";
import { useState } from "react";
import { SignupProps } from "./Signup";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const showAlert = useAlert();
  const [resetRequested, setResetRequested] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = (data: SignupProps) => {
    if (resetRequested) {
      resetPassword(data).then((res) => {
        showAlert("비밀번호가 초기화되었습니다.");
        navigate("/login");
      });
    } else {
      resetRequest(data).then((res) => {
        setResetRequested(true);
      });
    }
  };

  return (
    <>
      <Title size="large">비밀번호 초기화</Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              inputType="email"
              placeholder="이메일"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="error-text">이메일을 입력해주세요</p>
            )}
          </fieldset>
          {resetRequested && (
            <fieldset>
              <InputText
                inputType="password"
                placeholder="비밀번호"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="error-text">비밀번호를 입력해주세요</p>
              )}
            </fieldset>
          )}
          <fieldset>
            <Button type="submit" size="medium" scheme="primary">
              {resetRequested ? "비밀번호 초기화" : "초기화 요청"}
            </Button>
          </fieldset>
        </form>
      </SignupStyle>
    </>
  );
};
