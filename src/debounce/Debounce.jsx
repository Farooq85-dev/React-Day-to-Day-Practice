import { useEffect, useState } from "react";

const useDebounce = (query, delay) => {
  const [debounce, setDebounce] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(query);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [query, delay]);

  return debounce;
};

const Debounce = () => {
  const [query, setQuery] = useState("");
  const debouncedText = useDebounce(query, 500);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          value={query}
          onChange={handleQuery}
        />
      </div>
      <p>{debouncedText}</p>
    </>
  );
};

export default Debounce;
