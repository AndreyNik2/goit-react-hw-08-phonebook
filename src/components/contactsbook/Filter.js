import { getFilter, changeFilter } from 'redux/contacts/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Typography } from '@mui/material';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <>
      <Typography>Find contacts by name:</Typography>
      <TextField
        size="small"
        label="Filter"
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </>
  );
};

export default Filter;
