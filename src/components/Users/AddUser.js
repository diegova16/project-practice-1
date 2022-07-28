import React from "react";
import { useState } from "react";
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState();

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };
    
    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
          setError({
            title: "Invalid input",
            message: "Please enter a valid name and age.",
          });
          return;
        }

        if (+enteredUserAge < 0) {
          setError({
            title: "Invalid age",
            message: "Please enter a valid age.",
          });
          return;
        }

        const userData = {
          key: Math.random().toString(),
          name: enteredUserName,
          age: +enteredUserAge
        };
    
        props.onAddUser(userData);
    
         setEnteredUserName('');
         setEnteredUserAge('');
      };

      const errorHandler = () => {
        setError(null);
      }

    return (
      <div>
        { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={styles["input"]}>
            <form onSubmit={submitHandler}>
            <div>
                <div>
                <label htmlFor="username">User name</label>
                <input
                    id="username"
                    type="text"
                    value={enteredUserName}
                    onChange={userNameChangeHandler}
                />
                </div>
                <div>
                <label htmlFor="username">Age (Years)</label>
                <input
                    id="userage"
                    type="number"
                    value={enteredUserAge}
                    min="0"
                    max="130"
                    onChange={userAgeChangeHandler}
                />
                </div>
            </div>
            <div>
                <Button type="submit">Add User</Button>
            </div>
            </form>
        </Card>
      </div>
    );
}

export default AddUser;