import { getFilter, changeFilter } from 'redux/filterSlice';
import { FilterInput, FilterLabel } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';



const Filter = ({ value, onChange }) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

    return (
      <FilterLabel>
        Find contacts by name:
        <FilterInput type="text" value={filter} onChange={onChangeFilter} />
      </FilterLabel>
    );}



export default Filter;
