import { useState } from 'react';
import useFetch from 'react-fetch-hook';

export default function App() {
  const [path, setPath] = useState('/');
  const { data } = useFetch("http://127.0.0.1:8080/path", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ path }),
    depends: [path]
  });
  return <>
    <div>path: <input type="text" value={path} onChange={event => setPath(event.currentTarget.value)} /></div>
    <div>data: <pre>{
      JSON.stringify(data, null, 2)
    }</pre></div>
  </>;
};
