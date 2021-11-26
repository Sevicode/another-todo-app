import React, {ChangeEvent, useState, FC} from "react";
import moment from "moment";

export const AddToDo = () => {
    const moment = require('moment');
    // create inputs for task, priority, and due date
    const [task, setTask] = useState<string>('');
    const [startDate, setStartDate] = useState<any>('');
    const [dueDate, setDueDate] = useState<any>('');
    const [priority, setPriority] = useState<[]>([]);
    //get the value of the input
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === task) {
            setTask(event.target.value)
            console.log(task)
        }else if (event.target.name === startDate) {
            setStartDate((event.target.value))
        }else{
            setDueDate((event.target.value))
        }
    }
    // save it to the state in an array
    // clear the input
    // add the new item to the list
    // toggle the background color of the page
    // get quote API call
    // save quote to state
    // add the quote to a paragraph
    // add the quote to the page
    // add a button to the page that will remove the quote
    // add a button to the page that will load new quote
    return (
        <div>
            
        </div>
    )
}
