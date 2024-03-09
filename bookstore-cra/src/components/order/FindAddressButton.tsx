import styled from "styled-components";
import { Button } from "../common/Button";
import { useEffect } from "react";

interface Props {
  onCompleted: (address: string) => void;
}

const SCRIPT_URL =
  "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

export const FindAddressButton = ({ onCompleted }: Props) => {
  const handleOpen = () => {
    new window.daum.Postcode({
      onCompleted: (data: any) => {
        console.log(data);
        onCompleted(data.address as string);
      },
    }).open();
  };
  useEffect(() => {
    const script = document.createElement("script"); // script 태그
    script.src = SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script); // head 안에 script 넣기

    return () => {
      // FindAddressButton 컴포넌트 제거 시
      document.head.removeChild(script);
    };
  }, []);

  return (
    <FindAddressButtonStyle>
      <Button type="button" size="medium" scheme="normal" onClick={handleOpen}>
        주소 찾기
      </Button>
    </FindAddressButtonStyle>
  );
};

const FindAddressButtonStyle = styled.div``;
