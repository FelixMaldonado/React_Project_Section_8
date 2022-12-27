import React, {useState} from 'react';
import ReactModal from 'react-modal';


const Form = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [negModal, setNegModal] = useState(false);

    
    const userNameHandler = (event) =>{
        setEnteredName(event.target.value);
    };

    const userAgeHandler = (event) => {
        setUserAge(event.target.value);
    };

    const closeModal =() => {
        setIsOpen(false);
    }

    const closeNegModal =() => {
        setEnteredName('');
        setUserAge('');
        setNegModal(false);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredName === "" && userAge === ""){
            return setIsOpen(true);
        }

        if (userAge < 0) {
            return setNegModal(true);
        }

        const userList = {
            id: Math.random().toString(),
            name: enteredName,
            age: userAge,
        }
        console.log('EnteredName: ', {enteredName});
        props.addUsers(userList);

        setEnteredName('');
        setUserAge('');
    };
    

    return(
        <form onSubmit={submitHandler}>
            <ReactModal
                isOpen={modalIsOpen}
                contentLabel="Blank Entry Modal"
            >
            <div>
                <h2>No Blank Entries Allowed</h2>
                <button onClick={closeModal}>Close Window</button>
            </div> 
            </ReactModal>
            <ReactModal
                isOpen={negModal}
                contentLabel="Negative Age Entered"
            >
            <div>
                <h2>Please enter an Age greater than 0</h2>
                <button onClick={closeNegModal}>Close Window</button>
            </div> 
            </ReactModal>
            <div>
                <label>UserName</label>
                <input type='text' value={enteredName} onChange={userNameHandler}></input>
            </div>
            <div>
                <label>Age(Years)</label>
                <input type='text' value={userAge} onChange={userAgeHandler}></input>
            </div>
            <button>Add User</button>
        </form>
    );

};

export default Form;