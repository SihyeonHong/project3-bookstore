import { Title } from "../components/common/Title";
import { Button } from "../components/common/Button";

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
      <Button size="large" scheme="primary" disabled={false} isLoading={false}>
        버튼 테스트
      </Button>
      <Button size="medium" scheme="normal" disabled={false} isLoading={false}>
        버튼 테스트
      </Button>
      <Button size="small" scheme="normal" disabled={true} isLoading={false}>
        버튼 테스트
      </Button>
      <div>home body</div>
    </>
  );
};
