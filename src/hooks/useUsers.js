import { useState, useEffect } from 'react';
import fetchUsers from '../api/users';

const useUsers = (page = 0, perPage = 50) => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // console.log(await fetchUsers(page, perPage));

      setIsLoading(false);
      setUsers(await fetchUsers(page, perPage));
    };

    fetchData();
  }, [page, perPage]);

  return { isLoading, users };
};

export default useUsers;
