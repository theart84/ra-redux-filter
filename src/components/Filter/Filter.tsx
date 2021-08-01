// Core
import React from 'react';
import {useDispatch, useSelector} from "react-redux";

// Types
import {RootState} from "../../store";

// Actions
import {changeFilterValue, clearFilterForm} from "../../bus/form/reducer";

const Filter: React.FC = () => {
  const filterValue = useSelector((store: RootState) => store.form.filter);
  const dispatch = useDispatch();

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    dispatch(changeFilterValue({value}));
  }

  const onResetHandler = () => {
    dispatch(clearFilterForm());
  }

  return (
    <form className="row g-3" onSubmit={onSubmitHandler}>
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          id="filter"
          placeholder="Search..."
          value={filterValue}
          onChange={onChangeHandler}/>
      </div>
      <div className="col-auto">
        <button
          type="reset"
          className="btn btn-primary mb-3"
          onClick={onResetHandler}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default Filter;
