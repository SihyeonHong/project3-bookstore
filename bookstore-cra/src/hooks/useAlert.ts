import { useCallback } from "react";

export const useAlert = () => {
  const showAlert = useCallback((message: string) => {
    window.alert(message);
  }, []); // useCallback: 필요할때만 이 함수가 생성되라고

  return showAlert;
};
