import { useEffect, useCallback } from 'react';

/**
 * Hook to automatically load data when user scrolls to the end of the list
 *
 * @param {object} listRef    Reference to the list element
 * @param {function} loadMore Function that loads more items
 * @param {boolean} hasMore   True if list has more items to load
 */
const useInfiniteScroll = (items, listRef, loadMore, hasMore, isLoading) => {
  const handleScroll = useCallback(() => {
    if (!hasMore || isLoading) {
      return;
    }

    const lastElement = listRef.current.lastChild;

    if (!lastElement) {
      // First load if list is empty
      loadMore();
    }

    const pageOffset = window.pageYOffset + window.innerHeight;

    if (lastElement && lastElement.offsetTop < pageOffset) {
      loadMore();
    }
  }, [hasMore, isLoading, listRef, loadMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    handleScroll();
  }, [items]);
};

export default useInfiniteScroll;
