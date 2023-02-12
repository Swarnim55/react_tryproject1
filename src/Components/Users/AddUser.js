import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [user, setUser] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const userInput = (e) => {
    let userName = e.target.value;
    return setUser(userName);
  };
  const ageInput = (e) => {
    let userAge = e.target.value;
    return setAge(userAge);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (user.trim().length === 0 || age === 0) {
      return setError({
        title: 'Inavlid Input',
        message: 'Please enter a valid name and age(non empty or > zero)',
      });
    }
    if (+age < 1) {
      return setError({
        title: 'Inavlid Age',
        message: 'Please enter a valid age(non empty or > zero)',
      });
    }

    let temp = { id: Math.random().toString(), name: user, age: +age };
    props.onUserAdd(temp);
    setUser('');
    setAge('');
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
        <form onSubmit={submitHandler} value={user}>
          <label htmlFor="username"> Username </label>

          <input id="username" type="text" onChange={userInput} value={user} />

          <label htmlFor="age"> Age (Years) </label>

          <input id="age" type="number" onChange={ageInput} value={age} />

          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
