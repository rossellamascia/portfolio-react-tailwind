import { useCallback, useState } from "react";
import { requestConfig } from "../Models/RequestConfig";



const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

 

  const sendRequest = useCallback(async (requestConfig: requestConfig, applyData?) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? requestConfig.body : null,
      });
      // if (!response.ok) {
      //   throw new Error("Something went wrong!");
      // }
      const data = await response.json();
      applyData(data);
    } catch (error) {
      setErrorMessage(error.message)
      setError(error);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
    errorMessage,
    setIsLoading
  };
};
export default useHttp;
