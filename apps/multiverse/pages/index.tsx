import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function Public() {
  const query = useQuery(['test'], () => {
    return axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.data);
  });

  return (
    <div>
      main
      <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block text-red-600">Welcome multiverse 👋</span>
      </div>
      <pre>
        <code>{JSON.stringify(query, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Public;
