import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchHotelsThunk,
  selectAllHotels,
  selectHotelsStatus,
  selectHotelsError,
  selectFilters,
} from '../features/hotels/hotelsSlice';

export const useHotels = () => {
  const dispatch = useDispatch();
  const hotels = useSelector(selectAllHotels);

  const status = useSelector(selectHotelsStatus);
  const error = useSelector(selectHotelsError);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchHotelsThunk());
    }
  }, [status, dispatch]);

  return {
    hotels,
    status,
    error,
    filters,
    refetch: () => dispatch(fetchHotelsThunk()),
  };
};
