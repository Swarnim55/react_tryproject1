import React, { useState, useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge === 0) {
      return setError({
        title: 'Inavlid Input',
        message: 'Please enter a valid name and age(non empty or > zero)',
      });
    }
    if (+enteredAge < 1) {
      return setError({
        title: 'Inavlid Age',
        message: 'Please enter a valid age(non empty or > zero)',
      });
    }

    let temp = {
      id: Math.random().toString(),
      name: enteredName,
      age: +enteredAge,
    };
    props.onUserAdd(temp);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username"> Username </label>

          <input id="username" type="text" ref={nameInputRef} />

          <label htmlFor="age"> Age (Years) </label>

          <input id="age" type="number" ref={ageInputRef} />

          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
