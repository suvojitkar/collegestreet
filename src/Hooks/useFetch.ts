import { useEffect, useState } from "react";

interface FetchProps {
    url: string;
}

const useFetch = (props: FetchProps) => {
  const [resp, setResp]: [any, any] = useState([]);
  const {url} = props;

  useEffect(() => {
    const getApi = async () => {
      try {
        const fetchResp = await fetch(url);
        const resp = await fetchResp.json();
        setResp(resp);
      }
      catch {
        setResp([]);
      }
    }
    getApi();
  }, [url]);
  
  return {resp};
}

export default useFetch
