import { useEffect, useState } from "react"

const useDebounce = (inputText: string, delay=1000) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchText(inputText)
    }, delay);

    return () => clearTimeout(timerId);
  }, [inputText])

  return {searchText}
}

export default useDebounce
