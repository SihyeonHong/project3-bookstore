import { Title } from "../components/common/Title";
import { Button } from "../components/common/Button";
import { InputText } from "../components/common/InputText";

export const Home = () => {
  return (
    <>
      <Title size="large">제목 테스트</Title>
      <Title size="medium" color="secondary">
        제목 테스트
      </Title>
      <Title size="small" color="third">
        제목 테스트
      </Title>
      <Button size="large" scheme="primary">
        버튼 테스트
      </Button>
      <Button size="medium" scheme="normal">
        버튼 테스트
      </Button>
      <Button size="small" scheme="normal">
        버튼 테스트
      </Button>
      <InputText placeholder="여기에 입력하세요" />
      <div>home body</div>
    </>
  );
};
