import { useEffect } from 'react';

/**
 * Hook to automatically load data when user scrolls to the end of the list
 *
 * @param {object} listRef    Reference to the list element
 * @param {function} loadMore Function that loads more items
 * @param {boolean} hasMore   True if list has more items to load
 */
const useInfiniteScroll = (listRef, loadMore, hasMore) => {
  useEffect(() => {
    const handleScroll = () => {
      const lastElement = listRef.current.lastChild;
      const pageOffset = window.pageYOffset + window.innerHeight;

      if (lastElement.offsetTop < pageOffset && hasMore) {
        loadMore();
      }
    };

    const removeScrollEvent = () => {
      window.removeEventListener('scroll', handleScroll);
    };

    if (hasMore) {
      // Load first batch on first load
      loadMore();
      window.addEventListener('scroll', handleScroll);
    } else {
      removeScrollEvent();
    }

    // Cleanup: unmount listener when it is not used anymore
    return () => {
      removeScrollEvent();
    };
  }, [hasMore, listRef, loadMore]);
};

export default useInfiniteScroll;
