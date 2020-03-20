import { useCallback, useEffect, useState } from 'react';
import { getMembers } from '../../services/members.service';

export const useMembersList = () => {
  const [membersList, setMembersList] = useState([])
  const [perPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setIsLoading] = useState(true);
  const [lastPageReached, setLastPageReached] = useState(false);

  const loadMore = useCallback(() => setIsLoading(true), []);

  const loadAnotherPage = useCallback(async () => {
    const res = await getMembers({ perPage, page: currentPage });
    setIsLoading(false);
    if (res.length > 0) {
      setCurrentPage(currentPage + 1);
      setMembersList(membersList => [...membersList, ...res]);
    } else {
      setLastPageReached(true);
    }
  }, [currentPage, perPage])

  // hook listen to isFetching indicator to load more content
  useEffect(() => {
    if (loading && !lastPageReached) {
      loadAnotherPage();
    }
  }, [loading, loadAnotherPage, lastPageReached]);

  return { loading, membersList, loadMore };
}