import React, { useState } from 'react';
import './SelfPeer.css';

const courses =[
    {selectedphase: 'option1', selectedtopic: 'OJT1'},
    {selectedphase: 'option1', selectedtopic: 'OJT2'},
    {selectedphase: 'option2', selectedtopic: 'OJT3'}
]

const cards = [
    { title: 'Self Assessment', button: 'Mulai Isi Penilaian Diri' },
    { title: 'Peer Assessment', button: 'Mulai Isi Penilaian Rekan Kerja' }
];

const task = [
    { title: 'Self Assessment', title2: 'Solution', desc: '360 Behaviour Compentency Index' },
    { title: 'Self Assessment', title2: '8 Behaviour Compentency', desc: '360 Behaviour Compentency Index' },
    { title: 'Peer Assessment', title2: 'Solution', desc: '360 Behaviour Compentency Index' },
    { title: 'Peer Assessment', title2: '8 Behaviour Compentency', desc: '360 Behaviour Compentency Index' }
];

const questions = [
    { title: 'Self Assessment', title2: 'Solution', question: 'Seberapa sering anda menerapkan nilai serve?' },
    { title: 'Self Assessment', title2: 'Solution', question: 'Seberapa besar pemahan anda tentang nilai Organized?' },
    { title: 'Self Assessment', title2: 'Solution', question: 'Seberapa besar pemahaman anda tentang nilai Vision & Business Sense?' },
    { title: 'Self Assessment', title2: 'Solution', question: 'Seberapa sering anda menerapkan nilai Interpersonal Skill dengan baik?' },
    { title: 'Self Assessment', title2: 'Solution', question: 'Seberapa besar pemahaman anda tentang nilai uniqueness?' },
    { title: 'Self Assessment', title2: '8 Behaviour Compentency', question: 'Vision and Business Sense' },
    { title: 'Self Assessment', title2: '8 Behaviour Compentency', question: 'Analysis & Judgement' },
    { title: 'Self Assessment', title2: '8 Behaviour Compentency', question: 'Customer Focus' },
    { title: 'Self Assessment', title2: '8 Behaviour Compentency', question: 'Drive & Courage' },
    { title: 'Self Assessment', title2: '8 Behaviour Compentency', question: 'Teamwork' },
    { title: 'Self Assessment', title2: '8 Behaviour Compentency', question: 'Planning & Driving Action' },
    { title: 'Self Assessment', title2: '8 Behaviour Compentency', question: 'Interpersonal Skill' },
    { title: 'Self Assessment', title2: '8 Behaviour Compentency', question: 'Leading & Motivating' },
    { title: 'Peer Assessment', title2: 'Solution', question: 'Seberapa sering anda menerapkan nilai serve?' },
    { title: 'Peer Assessment', title2: 'Solution', question: 'Seberapa besar pemahan anda tentang nilai Organized?' },
    { title: 'Peer Assessment', title2: 'Solution', question: 'Seberapa besar pemahaman anda tentang nilai Vision & Business Sense?' },
    { title: 'Peer Assessment', title2: 'Solution', question: 'Seberapa sering anda menerapkan nilai Interpersonal Skill dengan baik?' },
    { title: 'Peer Assessment', title2: 'Solution', question: 'Seberapa besar pemahaman anda tentang nilai uniqueness?' },
    { title: 'Peer Assessment', title2: '8 Behaviour Compentency', question: 'Vision and Business Sense' },
    { title: 'Peer Assessment', title2: '8 Behaviour Compentency', question: 'Analysis & Judgement' },
    { title: 'Peer Assessment', title2: '8 Behaviour Compentency', question: 'Customer Focus' },
    { title: 'Peer Assessment', title2: '8 Behaviour Compentency', question: 'Drive & Courage' },
    { title: 'Peer Assessment', title2: '8 Behaviour Compentency', question: 'Teamwork' },
    { title: 'Peer Assessment', title2: '8 Behaviour Compentency', question: 'Planning & Driving Action' },
    { title: 'Peer Assessment', title2: '8 Behaviour Compentency', question: 'Interpersonal Skill' },
    { title: 'Peer Assessment', title2: '8 Behaviour Compentency', question: 'Leading & Motivating' }
];

const PeerList = [
    { nama: 'Naufal Romiz', status: 'Done', PeerAssessment: 'Isi Penilaian' },
    { nama: 'Ali Alban', status: 'Not Yet', PeerAssessment: 'Isi Penilaian' },
    { nama: 'Emmanuela Evelyn', status: 'Not Yet', PeerAssessment: 'Isi Penilaian' }
];

function SelfPeer() {
    const [currentPage, setCurrentPage] = useState('main');
    const [selectedTask, setSelectedTask] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [peerList, setPeerList] = useState(PeerList); 
    const [selectedPeer, setSelectedPeer] = useState(null); 

    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    const handleMain = () => {
        setCurrentPage('main');
        setSelectedTask(null);
        setSelectedQuestion(null);
        setSelectedPeer(null);
    };

    const handleSecond = (task) => {
        setCurrentPage('second');
        setSelectedTask(task);
        setSelectedQuestion(null);
    };

    const handleThird = () => {
        if (selectedTask === 'Peer Assessment') {
            setCurrentPage('peerList');
        } else {
            setCurrentPage('third');
        }
    };

    const handleQuestion = (title, title2) => {
        setSelectedQuestion({ title: title, title2: title2 });
    };

    const handlePeerSelected = (person) => {
        setSelectedPeer(person);
        setCurrentPage('third');
    };

    const renderCard = () => {
        return cards.map((selfpeer, index) => (
            <div key={index} className="selfpeer-item">
                <div className="description">
                    <img className="selfpeer-img" src="/src/files/icons/SelfPeerImg.png" />
                    <div className="selfpeer-text">
                        <div className="selfpeer-title">{selfpeer.title}</div>
                        <div className="selfpeer-date">{formattedDate}</div>
                    </div>
                </div>
                <div className="selfpeer-button" onClick={() => handleSecond(selfpeer.title)}>{selfpeer.button}</div>
            </div>
        ));
    };

    const renderTaskDetails = () => {
        if (selectedTask) {
            const taskDetails = task.filter(item => item.title === selectedTask);
            return taskDetails.map((item, index) => (
                <div key={index} className="task-details" onClick={() => handleQuestion(item.title, item.title2)}>
                    <img className="task-img" src="/src/files/icons/TaskImg.png" />
                    <div className="task-description">
                        <div className="task-title">{item.title2}</div>
                        <div className="task-desc">{item.desc}</div>
                    </div>
                </div>
            ));
        }
        return null;
    };

    const renderQuestion = () => {
        if (selectedTask && selectedQuestion) {
            const taskQuestions = questions.filter(item => item.title === selectedQuestion.title && item.title2 === selectedQuestion.title2);
            return taskQuestions.map((question, index) => (
                <div key={index}>
                    {index + 1}. {question.question}
                    <div className="buttonPosition">
                        <button className="btnGhost">1</button>
                        <button className="btnGhost">2</button>
                        <button className="btnGhost">3</button>
                        <button className="btnGhost">4</button>
                        <button className="btnGhost">5</button>
                    </div>
                </div>
            ));
        }
        return null;
    };

    const taskDetailsStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    };

    if (selectedTask && task.filter(item => item.title === selectedTask).length % 3 === 0 && task.filter(item => item.title === selectedTask).length % 6 !== 0 && task.filter(item => item.title === selectedTask).length % 9 !== 0) {
        taskDetailsStyle.flexDirection = 'column';
    }

    const renderPage = () => {
        switch (currentPage) {
            case 'main':
                return (
                    <div className="selfpeer">
                        <div className="title">
                            <h><b>Self & Peer Assessment</b></h>
                        </div>
                        <hr />
                        <div className="selfpeer">
                            {renderCard()}
                        </div>
                    </div>
                );
            case 'second':
                return (
                    <div className="selfpeer">
                        <div className="title">
                            <img src="/src/files/icons/backbutton.png" onClick={handleMain} alt="Back Button" />
                            <h><b>{selectedTask}</b></h>
                        </div>
                        <hr />
                        <div className="task-details-container" onClick={handleThird} style={taskDetailsStyle}>
                            {renderTaskDetails()}
                        </div>
                    </div>
                );
            case 'peerList':
                return (
                    <div className="selfpeer">
                        <div className="title">
                            <img src="/src/files/icons/backbutton.png" onClick={handleMain} alt="Back Button" />
                            <h><b>Peer Assessment - Daftar Nama</b></h>
                        </div>
                        <hr />
                        <div className="table-header">
                            <div className="peer-name">Nama</div>
                            <div className="peer-status">Status</div>
                            <div className="peer-assessment">Peer Assessment</div>
                        </div>
                        <div className="peer-list">
                            {peerList.map((person, index) => (
                                <div key={index} className="peer-item" onClick={() => handlePeerSelected(person)}>
                                    <div className="peer-name">{person.nama}</div>
                                    <div className="peer-status">{person.status}</div>
                                    <div className="peer-assessment">{person.PeerAssessment}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'third':
                return (
                    <>
                        <div className="selfpeer">
                            <div className="title">
                                <img className="backbutton" onClick={handleMain} src="/src/files/icons/backbutton.png" />
                                <h><b>{selectedQuestion && selectedQuestion.title2}</b></h>
                                <div className="phase">
                                </div>
                            </div>
                            <hr></hr>
                            <div className="question-container">
                                {renderQuestion()}
                                <div className="submitButton">
                                    <button className="submit"> <b>Submit</b> </button>
                                </div>
                            </div>
                            <div className="question-container-scale">
                                <h><b>Skala Penilaian</b></h>
                                <p className="numberOne">1 &nbsp;&nbsp; Sangat Kurang </p>
                                <p className="numberTwo">2 &nbsp;&nbsp; Kurang </p>
                                <p className="numberThree">3 &nbsp;&nbsp; Cukup </p>
                                <p className="numberFour">4 &nbsp;&nbsp; Baik </p>
                                <p className="numberFive">5 &nbsp;&nbsp; Sangat Baik </p>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="App">
            {renderPage()}
        </div>
    );
}

export default SelfPeer;