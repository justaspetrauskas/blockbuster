import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export type TApiResponse = {
  status: number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
};

export const useApiGetProgramById = (): TApiResponse => {
  let { programId } = useParams();
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<String>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    const blockbusterURL = `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas/${programId}?form=json`;
    setLoading(true);
    try {
      const apiResponse = await fetch(blockbusterURL);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return { status, statusText, data, error, loading };
};
