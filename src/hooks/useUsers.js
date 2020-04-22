import { useState } from 'react';
import fetchUsers from '../api/users';

const BATCH_SIZE = 50;
const MAX_ITEMS = 200;

const useUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMore = () => {
    const fetchData = async () => {
      setIsLoading(true);

      const newUsers = await fetchUsers(currentPage, BATCH_SIZE);

      setUsers((currentUsers) => [...currentUsers, ...newUsers]);
      setCurrentPage(currentPage + 1);
      setIsLoading(false);
    };

    if (!isLoading) {
      fetchData();
    }
  };

  return {
    isLoading,
    users,
    loadMore,
    hasMore: currentPage * BATCH_SIZE < MAX_ITEMS,
  };
};

export default useUsers;
