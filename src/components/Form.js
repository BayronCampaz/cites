
import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form = ({createCite}) => {

    const [cite, updateCite] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    });

    const [error, updateError] = useState(false);

    const handleChange = e => {
        updateCite({
            ...cite,
            [e.target.name] : e.target.value
        })
    }

    const {pet, owner, date, time, symptoms} = cite;

    const submitCite = e => {
        e.preventDefault();

        if(pet.trim() === '' || owner.trim() === ''
            || date.trim() === '' || time.trim() === '' ||
            symptoms.trim() === ''){
                updateError(true)
                return;
            }
        updateError(false);

        cite.id = uuidv4();
        createCite(cite);

        updateCite({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptoms: ''
        })
    }

    return (
        <Fragment>
            <h2>Desde formulario</h2>

            <form
            onSubmit={submitCite}>
                <div class="form-group">
                    <label>Pet Name</label>
                    <input
                        type="text"
                        name="pet"
                        placeholder="Pet Name"
                        className="form-control"
                        onChange={handleChange}
                        value={pet} />
                </div>

                <div class="form-group">
                    <label>Owner Name</label>
                    <input
                        type="text"
                        name="owner"
                        placeholder="Owner Name"
                        className="form-control"
                        onChange={handleChange} 
                        value={owner}/>
                </div>

                <div class="form-group">
                    <label>Date</label>
                    <input
                        type="date"
                        name="date"
                        className="form-control"
                        onChange={handleChange}
                        value={date}
                    />
                </div>

                <div class="form-group">
                    <label>Time</label>
                    <input
                        type="time"
                        name="time"
                        className="form-control"
                        onChange={handleChange}
                        value={time}
                    />
                </div>

                <div class="form-group">
                    <label>Symtoms</label>
                    <textarea
                        name="symptoms"
                        rows="3"
                        className="form-control"
                        onChange={handleChange}
                        value={symptoms}>
                    </textarea>
                </div>
                
                {error ? <p className="alert alert-warning">All fields are required</p>: null}

                <button
                    type="submit"
                    className="btn btn-primary">
                        Send
                </button>
            </form>
        </Fragment>


    );
}

export default Form;