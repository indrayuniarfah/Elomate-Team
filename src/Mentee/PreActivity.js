import React, { useState, useEffect } from 'react';
import './PreActivity.css';

const courses = [
    {selectedPhase: 'option1', selectedTopic: 'General Development', name: 'On Boarding', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'General Development', name: 'SOLUTION Culture', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'General Development', name: 'Behaviour Competencies', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'General Development', name: 'Business Process UT', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'General Development', name: 'Kebhinekaan', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'General Development', name: 'BMS', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'General Development', name: 'Basic Mentoring', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'General Development', name: 'Project Management', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'Orientasi Divisi', name: 'Business Process Divisi', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'Orientasi Divisi', name: 'Functional BMC', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'Orientasi Divisi', name: 'Case Studies', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'BGMS', name: 'Character Building', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'BGMS', name: 'Teamwork', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'BGMS', name: 'Drive & Courage', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'NEOP', name: 'Executive Sharing', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'NEOP', name: 'Corporate Value', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'NEOP', name: 'AHEMCE Value Chain', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'NEOP', name: 'Business Process AHEMCE', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'NEOP', name: 'Personal Branding', no: 'No Batch'},
    {selectedPhase: 'option1', selectedTopic: 'Review1', name: 'Review 1', no: 'No Batch'},
    {selectedPhase: 'option2', selectedTopic: 'Project', name: 'Final Project', no: 'No Batch'},
    {selectedPhase: 'option2', selectedTopic: 'Review2', name: 'Review 2', no: 'No Batch'},
    {selectedPhase: 'option2', selectedTopic: 'Review2', name: 'Review 3', no: 'No Batch'},
    {selectedPhase: 'option2', selectedTopic: 'Review2', name: 'Review 4', no: 'No Batch'},
    {selectedPhase: 'option2', selectedTopic: 'Review2', name: 'Review 5', no: 'No Batch'},
    {selectedPhase: 'option2', selectedTopic: 'Review2', name: 'Final Review', no: 'No Batch'}
]

const activity = [
    {name: 'On Boarding', title: '1'},
    {name: 'On Boarding', title: '2'},
    {name: 'On Boarding', title: '3'},
    {name: 'SOLUTION Culture', title: '1'},
    {name: 'SOLUTION Culture', title: '2'},
    {name: 'SOLUTION Culture', title: '3'},
    {name: 'Behaviour Competencies', title: '1'},
    {name: 'Behaviour Competencies', title: '2'},
    {name: 'Behaviour Competencies', title: '3'},
    {name: 'Business Process UT', title: '1'},
    {name: 'Business Process UT', title: '2'},
    {name: 'Business Process UT', title: '3'},
    {name: 'Kebhinekaan', title: '1'},
    {name: 'Kebhinekaan', title: '2'},
    {name: 'Kebhinekaan', title: '3'},
    {name: 'BMS', title: '1'},
    {name: 'BMS', title: '2'},
    {name: 'BMS', title: '3'},
    {name: 'Basic Mentoring', title: '1'},
    {name: 'Basic Mentoring', title: '2'},
    {name: 'Basic Mentoring', title: '3'},
    {name: 'Project Management', title: '1'},
    {name: 'Project Management', title: '2'},
    {name: 'Project Management', title: '3'},
    {name: 'Business Process Divisi', title: '1'},
    {name: 'Business Process Divisi', title: '2'},
    {name: 'Business Process Divisi', title: '3'},
    {name: 'Functional BMC', title: '1'},
    {name: 'Functional BMC', title: '2'},
    {name: 'Functional BMC', title: '3'},
    {name: 'Case Studies', title: '1'},
    {name: 'Case Studies', title: '2'},
    {name: 'Case Studies', title: '3'},
    {name: 'Character Building', title: '1'},
    {name: 'Character Building', title: '2'},
    {name: 'Character Building', title: '3'},
    {name: 'Teamwork', title: '1'},
    {name: 'Teamwork', title: '2'},
    {name: 'Teamwork', title: '3'},
    {name: 'Drive & Courage', title: '1'},
    {name: 'Drive & Courage', title: '2'},
    {name: 'Drive & Courage', title: '3'},
    {name: 'Executive Sharing', title: '1'},
    {name: 'Executive Sharing', title: '2'},
    {name: 'Executive Sharing', title: '3'},
    {name: 'Corporate Value', title: '1'},
    {name: 'Corporate Value', title: '2'},
    {name: 'Corporate Value', title: '3'},
    {name: 'AHEMCE Value Chain', title: '1'},
    {name: 'AHEMCE Value Chain', title: '2'},
    {name: 'AHEMCE Value Chain', title: '3'},
    {name: 'Business Process AHEMCE', title: '1'},
    {name: 'Business Process AHEMCE', title: '2'},
    {name: 'Business Process AHEMCE', title: '3'},
    {name: 'Personal Branding', title: '1'},
    {name: 'Personal Branding', title: '2'},
    {name: 'Personal Branding', title: '3'}
];

const prereading = [
    {name: 'On Boarding', title: 'On Boarding 1'},
    {name: 'On Boarding', title: 'On Boarding 2'},
    {name: 'On Boarding', title: 'On Boarding 3'},
    {name: 'On Boarding', title: 'On Boarding 4'},
    {name: 'On Boarding', title: 'On Boarding 5'},
    {name: 'On Boarding', title: 'On Boarding 6'},
    {name: 'SOLUTION Culture', title: 'SOLUTION Culture 1'},
    {name: 'SOLUTION Culture', title: 'SOLUTION Culture 2'},
    {name: 'SOLUTION Culture', title: 'SOLUTION Culture 3'},
    {name: 'SOLUTION Culture', title: 'SOLUTION Culture 4'},
    {name: 'SOLUTION Culture', title: 'SOLUTION Culture 5'},
    {name: 'SOLUTION Culture', title: 'SOLUTION Culture 6'},
    {name: 'Behaviour Competencies',  title: 'Behaviour Competencies 1'},
    {name: 'Behaviour Competencies',  title: 'Behaviour Competencies 2'},
    {name: 'Behaviour Competencies',  title: 'Behaviour Competencies 3'},
    {name: 'Behaviour Competencies',  title: 'Behaviour Competencies 4'},
    {name: 'Behaviour Competencies',  title: 'Behaviour Competencies 5'},
    {name: 'Behaviour Competencies',  title: 'Behaviour Competencies 6'},
    {name: 'Business Process UT',  title: 'Business Process UT 1'},
    {name: 'Business Process UT',  title: 'Business Process UT 2'},
    {name: 'Business Process UT',  title: 'Business Process UT 3'},
    {name: 'Business Process UT',  title: 'Business Process UT 4'},
    {name: 'Business Process UT',  title: 'Business Process UT 5'},
    {name: 'Business Process UT',  title: 'Business Process UT 6'},
    {name: 'Kebhinekaan', title: 'Kebhinekaan 1'},
    {name: 'Kebhinekaan', title: 'Kebhinekaan 2'},
    {name: 'Kebhinekaan', title: 'Kebhinekaan 3'},
    {name: 'Kebhinekaan', title: 'Kebhinekaan 4'},
    {name: 'Kebhinekaan', title: 'Kebhinekaan 5'},
    {name: 'Kebhinekaan', title: 'Kebhinekaan 6'},
    {name: 'BMS', title: 'BMS 1'},
    {name: 'BMS', title: 'BMS 2'},
    {name: 'BMS', title: 'BMS 3'},
    {name: 'BMS', title: 'BMS 4'},
    {name: 'BMS', title: 'BMS 5'},
    {name: 'BMS', title: 'BMS 6'},
    {name: 'Basic Mentoring', title: 'Basic Mentoring 1'},
    {name: 'Basic Mentoring', title: 'Basic Mentoring 2'},
    {name: 'Basic Mentoring', title: 'Basic Mentoring 3'},
    {name: 'Basic Mentoring', title: 'Basic Mentoring 4'},
    {name: 'Basic Mentoring', title: 'Basic Mentoring 5'},
    {name: 'Basic Mentoring', title: 'Basic Mentoring 6'},
    {name: 'Project Management', title: 'Project Management 1'},
    {name: 'Project Management', title: 'Project Management 2'},
    {name: 'Project Management', title: 'Project Management 3'},
    {name: 'Project Management', title: 'Project Management 4'},
    {name: 'Project Management', title: 'Project Management 5'},
    {name: 'Project Management', title: 'Project Management 6'},
    {name: 'Business Process Divisi', title: 'Business Process Divisi 1'},
    {name: 'Business Process Divisi', title: 'Business Process Divisi 2'},
    {name: 'Business Process Divisi', title: 'Business Process Divisi 3'},
    {name: 'Business Process Divisi', title: 'Business Process Divisi 4'},
    {name: 'Business Process Divisi', title: 'Business Process Divisi 5'},
    {name: 'Business Process Divisi', title: 'Business Process Divisi 6'},
    {name: 'Functional BMC', title: 'Functional BMC 1'},
    {name: 'Functional BMC', title: 'Functional BMC 2'},
    {name: 'Functional BMC', title: 'Functional BMC 3'},
    {name: 'Functional BMC', title: 'Functional BMC 4'},
    {name: 'Functional BMC', title: 'Functional BMC 5'},
    {name: 'Functional BMC', title: 'Functional BMC 6'},
    {name: 'Case Studies', title: 'Case Studies 1'},
    {name: 'Case Studies', title: 'Case Studies 2'},
    {name: 'Case Studies', title: 'Case Studies 3'},
    {name: 'Case Studies', title: 'Case Studies 4'},
    {name: 'Case Studies', title: 'Case Studies 5'},
    {name: 'Case Studies', title: 'Case Studies 6'},
    {name: 'Character Building', title: 'Character Building 1'},
    {name: 'Character Building', title: 'Character Building 2'},
    {name: 'Character Building', title: 'Character Building 3'},
    {name: 'Character Building', title: 'Character Building 4'},
    {name: 'Character Building', title: 'Character Building 5'},
    {name: 'Character Building', title: 'Character Building 6'},
    {name: 'Teamwork', title: 'Teamwork 1'},
    {name: 'Teamwork', title: 'Teamwork 2'},
    {name: 'Teamwork', title: 'Teamwork 3'},
    {name: 'Teamwork', title: 'Teamwork 4'},
    {name: 'Teamwork', title: 'Teamwork 5'},
    {name: 'Teamwork', title: 'Teamwork 6'},
    {name: 'Drive & Courage', title: 'Drive & Courage 1'},
    {name: 'Drive & Courage', title: 'Drive & Courage 2'},
    {name: 'Drive & Courage', title: 'Drive & Courage 3'},
    {name: 'Drive & Courage', title: 'Drive & Courage 4'},
    {name: 'Drive & Courage', title: 'Drive & Courage 5'},
    {name: 'Drive & Courage', title: 'Drive & Courage 6'},
    {name: 'Executive Sharing', title: 'Executive Sharing 1'},
    {name: 'Executive Sharing', title: 'Executive Sharing 2'},
    {name: 'Executive Sharing', title: 'Executive Sharing 3'},
    {name: 'Executive Sharing', title: 'Executive Sharing 4'},
    {name: 'Executive Sharing', title: 'Executive Sharing 5'},
    {name: 'Executive Sharing', title: 'Executive Sharing 6'},
    {name: 'Corporate Value', title: 'Corporate Value 1'},
    {name: 'Corporate Value', title: 'Corporate Value 2'},
    {name: 'Corporate Value', title: 'Corporate Value 3'},
    {name: 'Corporate Value', title: 'Corporate Value 4'},
    {name: 'Corporate Value', title: 'Corporate Value 5'},
    {name: 'Corporate Value', title: 'Corporate Value 6'},
    {name: 'AHEMCE Value Chain', title: 'AHEMCE Value Chain 1'},
    {name: 'AHEMCE Value Chain', title: 'AHEMCE Value Chain 2'},
    {name: 'AHEMCE Value Chain', title: 'AHEMCE Value Chain 3'},
    {name: 'AHEMCE Value Chain', title: 'AHEMCE Value Chain 4'},
    {name: 'AHEMCE Value Chain', title: 'AHEMCE Value Chain 5'},
    {name: 'AHEMCE Value Chain', title: 'AHEMCE Value Chain 6'},
    {name: 'Business Process AHEMCE', title: 'Business Process AHEMCE 1'},
    {name: 'Business Process AHEMCE', title: 'Business Process AHEMCE 2'},
    {name: 'Business Process AHEMCE', title: 'Business Process AHEMCE 3'},
    {name: 'Business Process AHEMCE', title: 'Business Process AHEMCE 4'},
    {name: 'Business Process AHEMCE', title: 'Business Process AHEMCE 5'},
    {name: 'Business Process AHEMCE', title: 'Business Process AHEMCE 6'},
    {name: 'Personal Branding', title: 'Personal Branding 1'},
    {name: 'Personal Branding', title: 'Personal Branding 2'},
    {name: 'Personal Branding', title: 'Personal Branding 3'},
    {name: 'Personal Branding', title: 'Personal Branding 4'},
    {name: 'Personal Branding', title: 'Personal Branding 5'},
    {name: 'Personal Branding', title: 'Personal Branding 6'}
];

function PreActivity() {
    const [currentPage, setCurrentPage] = useState('main');
    const [selectedPhase, setSelectedPhase] = useState('option1');
    const [selectedTopic, setSelectedTopic] = useState('General Development');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [activityButtonClicked, setActivityButtonClicked] = useState(true);
    const [preReadingButtonClicked, setPreReadingButtonClicked] = useState(false);
    const [showContentA, setShowContentA] = useState(true);
    const [showContentB, setShowContentB] = useState(false);
    const [currentActivity, setCurrentActivity] = useState(null);
    const [currentPreReading, setCurrentPreReading] = useState(null);

    useEffect(() => {
        if (selectedCourse) {
            const selectedActivity = activity.find(item => item.name === selectedCourse.name);
            setCurrentActivity(selectedActivity);

            const selectedPreReading = prereading.find(item => item.name === selectedCourse.name);
            setCurrentPreReading(selectedPreReading);
        }
    }, [selectedCourse]);

    const handleMain = () => {
        setCurrentPage('main');
    };

    const handleSecond = () => {
        setCurrentPage('second');
    };

    useEffect(() => {
        if (selectedPhase === 'option1') {
            setSelectedTopic('General Development');
        } else if (selectedPhase === 'option2') {
            setSelectedTopic('Project');
        }
    }, [selectedPhase]);

    const handlePhaseChange = (event) => {
        setSelectedPhase(event.target.value);
    };

    const handleTopicChange = (event) => {
        setSelectedTopic(event.target.value);
    };

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
        handleSecond();
    };

    const handleActivityButtonClick = () => {
        setActivityButtonClicked(true);
        setPreReadingButtonClicked(false);
        setShowContentA(true);
        setShowContentB(false);
    };

    const handlePreReadingButtonClick = () => {
        setActivityButtonClicked(false);
        setPreReadingButtonClicked(true);
        setShowContentA(false);
        setShowContentB(true);
    };

    const handleDownload = () => {
        const selectedPreReading = currentPreReading;
    
        const blob = new Blob([selectedPreReading.title], { type: 'text/plain' });
    
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `${selectedPreReading.title}.txt`;
        document.body.appendChild(link);
    
        link.click();
    
        document.body.removeChild(link);
    };

    const getDescription = () => {
        const filteredCourses = courses.filter(course => course.selectedPhase === selectedPhase && course.selectedTopic === selectedTopic);
        return (
            <div>
                {filteredCourses.map(course => (
                    <div key={course.id} className="course">
                        <div className="description">
                            <img className="courseimg" src="/src/files/icons/CourseImg.png" alt="Course" />
                            <div className="course-text">
                                <div className="course-name">{course.name}</div>
                                <div className="course-no-batch">{course.no}</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="course-button" onClick={() => handleCourseClick(course)}>Click to View the activity</div>
                    </div>
                ))}
            </div>
        );
    };

    const getActivity = () => {
        if (!selectedCourse) return null;
    
        const selectedActivities = activity.filter(item => item.name === selectedCourse.name);
        
        return (
            <div className="activity-card-container">
                {selectedActivities.map((activity, index) => (
                    <div key={index} className="activity-card" onClick={handleMain}>
                        <img className="activity-img" src="/src/files/icons/Day.png" />
                        <div className="activity-title">{activity.title}</div>
                    </div>
                ))}
            </div>
        );
    };

    const getPreReading = () => {
        if (!selectedCourse) return null;
    
        const selectedPreReadings = prereading.filter(item => item.name === selectedCourse.name);
    
        return (
            <div className="pre-reading-card-container">
                {selectedPreReadings.map((preReading, index) => (
                    <div key={index} className="pre-reading-card">
                        <img className="pre-reading-img" src="/src/files/icons/CourseImg.png" />
                        <div className="pre-reading-title">{preReading.title}</div>
                        <img className="pre-reading-download" onClick={handleDownload} src="/src/files/icons/Download.png" />
                    </div>
                ))}
            </div>
        );
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'main':
                return (
                    <div className="preactivity1">
                        <div className="title1">
                            <h><b>Pre-Activity</b></h>
                        </div>
                        <div className="selecttile">
                            <div className="phase">
                                <a>Phase</a>
                                <select className="phaseselect" id="phaseDropdown" value={selectedPhase} onChange={handlePhaseChange}>
                                    <option value="option1">Phase 10</option>
                                    <option value="option2">Phase 20 + 70</option>
                                </select>
                            </div>
                            <div className="topic">
                                <a>Topic</a>
                                <select className="topicselect" id="topicDropdown" value={selectedTopic} onChange={handleTopicChange}>
                                    {selectedPhase === "option1" && (
                                        <>
                                            <option value="General Development">General Development</option>
                                            <option value="Orientasi Divisi">Orientasi Divisi</option>
                                            <option value="BGMS">BGMS</option>
                                            <option value="NEOP">NEOP</option>
                                            <option value="Review1">Review</option>
                                        </>
                                    )}
                                    {selectedPhase === "option2" && (
                                        <>
                                            <option value="Project">Project</option>
                                            <option value="Review2">Review</option>
                                        </>
                                    )}
                                </select>
                            </div>
                        </div>
                        <hr />
                        <div className="class">
                            {getDescription()}
                        </div>
                    </div>
                );
            case 'second':
                return (
                    <div className="preactivity2">
                        <div className="title2">
                            <h><b>Pre-Activity</b></h>
                        </div>
                        <hr />
                        <img className="backbutton" onClick={handleMain} src="/src/files/icons/backbutton.png" alt="Back" />
                        <div className="description">
                            <div className="course-text">
                                {selectedCourse && (
                                    <>
                                        <div className="course-name">{selectedCourse.name}</div>
                                        <div className="course-no-batch">{selectedCourse.no}</div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="button">
                            <div className={`activity-button ${activityButtonClicked ? 'active' : ''}`} onClick={handleActivityButtonClick}>Activity</div>
                            <div className={`prereading-button ${preReadingButtonClicked ? 'active' : ''}`} onClick={handlePreReadingButtonClick}>Pre-Reading</div>
                        </div>
                        <hr />
                        {showContentA && currentActivity && (
                            <div className="activity">
                                {getActivity()}
                            </div>
                        )}
                        {showContentB && currentPreReading && (
                            <div className="prereading">
                                {getPreReading()}
                            </div>
                        )}
                    </div>
                );
            default:
                return null;
        }
    };

    
    return(
        <div className="App">
            {renderPage()}
        </div>
    );
}

export default PreActivity;