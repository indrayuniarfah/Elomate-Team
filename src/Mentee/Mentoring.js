import React, { useState } from 'react';
import './Mentoring.css';

function Mentoring() {

    const [addScheduleButtonClicked, setAddScheduleButtonClicked] = useState(true);
    const [historyButtonClicked, setHistoryButtonClicked] = useState(false);
    const [feedbackFormButtonClicked, setFeedbackFormButtonClicked] = useState(false);
    const [showMentoringA, setShowMentoringA] = useState(true);
    const [showMentoringB, setShowMentoringB] = useState(false);
    const [showMentoringC, setShowMentoringC] = useState(false);

    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    };

    const handleAddScheduleButtonClick = () => {
        setAddScheduleButtonClicked(true);
        setHistoryButtonClicked(false);
        setFeedbackFormButtonClicked(false);
        setShowMentoringA(true);
        setShowMentoringB(false);
        setShowMentoringC(false);
    }

    const handleHistoryButtonClicked = () => {
        setAddScheduleButtonClicked(false);
        setHistoryButtonClicked(true);
        setFeedbackFormButtonClicked(false);
        setShowMentoringA(false);
        setShowMentoringB(true);
        setShowMentoringC(false);
    }

    const handleFeedbackFormButtonClick = () => {
        setAddScheduleButtonClicked(false);
        setHistoryButtonClicked(false);
        setFeedbackFormButtonClicked(true);
        setShowMentoringA(false);
        setShowMentoringB(false);
        setShowMentoringC(true);
    }

    const [date, setDate] = useState(new Date());
  
    const formatDate = (date) => {
      let d = new Date(date),
        day = '' + d.getDate(),
          month = '' + (d.getMonth() + 1),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
    }


    const [time, setTime] = useState('');
    const [time1, setTime1] = useState('');
      
    const handleChange = (event) => {
        setTime(event.target.value);
    }

    const handleChangeEnd = (event) => {
        setTime1(event.target.value);
    }

    const [type, setType] = useState(null);  
    const handleCheckboxTypeChange = (option) => {
        setType(option);
    };

    const [method, setMethod] = useState(null);
    const handleCheckboxMethodChange = (option) => {
        setMethod(option);
    };

    const [mentorName, setMentorName] = useState('');
    const handleInputTopicChange = (event) => {
        setTopicName(capitalizeWords(event.target.value));
    };

    const [topicName, setTopicName] = useState('');
    const handleInputMentorChange = (event) => {
        setMentorName(capitalizeWords(event.target.value));
    };

    const [dateError, setDateError] = useState('');
    const [timeError, setTimeError] = useState('');
    const [time1Error, setTime1Error] = useState('');
    const [typeError, setTypeError] = useState('');
    const [methodError, setMethodError] = useState('');
    const [mentorNameError, setMentorNameError] = useState('');
    const [topicNameError, setTopicNameError] = useState('');

    const [schedules, setSchedules] = useState([])
    const handleAddButtonClick = () => {

        setDateError('');
        setTimeError('');
        setTime1Error('');
        setTypeError('');
        setMethodError('');
        setMentorNameError('');
        setTopicNameError('');

        let valid = true;
        if (!date) {
            setDateError('*Date is required.');
            valid = false;
        }
        if (!time) {
            setTimeError('*Start time is required.');
            valid = false;
        }
        if (!time1) {
            setTime1Error('*End time is required.');
            valid = false;
        }
        if (!type) {
            setTypeError('*Type is required.');
            valid = false;
        }
        if (!method) {
            setMethodError('*Method is required.');
            valid = false;
        }
        if (!mentorName.trim()) {
            setMentorNameError('*Mentor name is required.');
            valid = false;
        }
        if (!topicName.trim()) {
            setTopicNameError('*Topic name is required.');
            valid = false;
        }

        if (!valid) return;

        const newSchedule = {
            type: type,
            datetime: `${formatDate(date)}, ${time} WIB - ${time1} WIB`,
            method: method,
            mentorName: capitalizeWords(mentorName),
            topicName: capitalizeWords(topicName),
            status: 'Ongoing',
        };
        const newFeedbackCard = {
            title: 'Feedback Form',
            status: 'Not Completed'
        };
        setSchedules([newSchedule, ...schedules]);
        setFeedbackCards([newFeedbackCard, ...feedbackCards]);
        handleHistoryButtonClicked();

        setDate(new Date());
        setTime('');
        setTime1('');
        setType(null);
        setMethod(null);
        setMentorName('');
        setTopicName('');
    };

    const [feedbackCards, setFeedbackCards] = useState([]);
    const renderFeedbackCards = () => {
        return (
            <div className="assign-details-row">
                {feedbackCards.map((card, index) => (
                    <div key={index} className="assign-card">
                        <div className="assign-desc1">
                            <img className="assign-img" src="/src/files/icons/CourseImg.png" alt="Course" />
                            <div className="assign-info">
                                <div className="assign-title">{card.title}</div>
                            </div>
                        </div>
                        <div className="assign-desc2">
                            <div className="assign-statusdet">Status</div>
                            <div className={`assign-status ${card.status.replace(' ', '-')}`}>{card.status}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    

    const assignDetailsStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    };

    return(
        <div className="mentoring">
            <div className="title">
                <h><b>Mentoring</b></h>
            </div>
                <div className="button">
                    <div className={`addSchedule-button ${addScheduleButtonClicked ? 'active' : ''}`} onClick={handleAddScheduleButtonClick}>Add Schedule</div>
                    <div className={`history-button ${historyButtonClicked ? 'active' : ''}`} onClick={handleHistoryButtonClicked}>History</div>
                    <div className={`feedbackForm-button ${feedbackFormButtonClicked ? 'active' : ''}`} onClick={handleFeedbackFormButtonClick}>Feedback Form</div>
                </div>     
            <hr />
                {showMentoringA && (
                    <div className="add">
                        <div className="schedule-container">
                            <p className='judul'>Date</p>
                            <input
                                type="date"
                                className="dateInput"
                                value={formatDate(date)}
                                onChange={(e) => setDate(new Date(e.target.value))}
                            />
                            <div className="error">
                                {dateError}
                            </div>  
                            <div className='time'>
                                <div className='start1'>
                                    <p className='judultime'>Start</p>
                                    <input
                                        type="time"
                                        className="timeInput"
                                        value={time}
                                        onChange={handleChange}
                                    />
                                    <div className="error">
                                        {timeError}
                                    </div>  
                                </div>
                                <div className='end1'>
                                    <p className='judultime'>End</p>
                                    <input
                                        type="time"
                                        className="timeInput1"
                                        value={time1}
                                        onChange={handleChangeEnd}
                                    />
                                    <div className="error">
                                        {time1Error}
                                    </div>
                                </div>                                  
                            </div>
                            <div>
                                <p className='judul'>Method</p>
                                <label className='checkbox1'>
                                    <input
                                    type="checkbox"
                                    checked={method === 'Offline'}
                                    onChange={() => handleCheckboxMethodChange('Offline')}
                                    />
                                    Offline
                                </label>

                                <label className='checkbox2'>
                                    <input
                                    type="checkbox"
                                    checked={method === 'Online'}
                                    onChange={() => handleCheckboxMethodChange('Online')}
                                    />
                                    Online
                                </label>
                                <div className="error">
                                    {methodError}   
                                </div>
                            </div>
                            <div>
                                <p className='judul'>Type</p>
                                <label className='option1'>
                                    <input
                                    type="checkbox"
                                    checked={type === 'Mentoring'}
                                    onChange={() => handleCheckboxTypeChange('Mentoring')}
                                    />
                                    Mentoring
                                </label>

                                <label className='option1'>
                                    <input
                                    type="checkbox"
                                    checked={type === 'Coaching'}
                                    onChange={() => handleCheckboxTypeChange('Coaching')}
                                    />
                                    Coaching
                                </label>

                                <label>
                                    <input
                                    type="checkbox"
                                    checked={type === 'Review'}
                                    onChange={() => handleCheckboxTypeChange('Review')}
                                    />
                                    Review
                                </label>
                                <div className="error">
                                    {typeError}     
                                </div> 
                            </div>
                            <div>
                                <p className='judul'>Mentor</p>
                                <label className='inputText'>
                                    <input
                                    type="text"
                                    className='inputan'
                                    value={mentorName}
                                    onChange={handleInputMentorChange}
                                    /> 
                                </label>
                                <div className="error">
                                    {mentorNameError}
                                </div>
                            </div>
                            <div>
                                <p className='judul'>Topic</p>
                                <label className='inputText'>
                                    <input
                                    type="text"
                                    className='inputan'
                                    value={topicName}
                                    onChange={handleInputTopicChange}
                                    />
                                </label>
                                <div className="error">
                                    {topicNameError}
                                </div>
                            </div>
                            <div className="containerButton">
                                <button className="addButton" onClick={handleAddButtonClick}>Add</button>
                            </div>
                        </div>
                    </div>
                )}
                {showMentoringB && (
                    <div className="history">
                        <div className="history-container">
                            <table className="history-table">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Date & Time</th>
                                        <th>Method</th>
                                        <th>Mentor</th>
                                        <th>Topic</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {schedules.map((schedule, index) => (
                                        <tr key={index}>
                                            <td>{schedule.type}</td>
                                            <td>{schedule.datetime}</td> 
                                            <td>{schedule.method}</td>
                                            <td>{schedule.mentorName}</td>
                                            <td>{schedule.topicName}</td>
                                            <td className='status'>{schedule.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>        
                        </div>
                    </div>
                )}
                {showMentoringC && (
                    <div className="assign-details-container" style={assignDetailsStyle}>
                        {renderFeedbackCards()}
                    </div>
                )}
                        
        </div>
    )
}

export default Mentoring;