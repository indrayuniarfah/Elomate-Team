import React from 'react';
import './FinalReport.css';

const batchs = [
    { batch: '1 November 2023', name: 'Naufal Ramiz' }
];

const courses = [
    { course: 'General Development', score: 85, status: 'Done' },
    { course: 'Orientasi Divisi', score: 88, status: 'Done' },
    { course: 'BGMS', score: null, status: 'Not Yet' },
    { course: 'NEOP', score: null, status: 'Not Yet' }
];

function FinalReport() {

    const renderDesc = () => {
        return batchs.map((batch, index) => (
            <div key={index}>
                <div className="desc">
                    <div className="batch-title">Batch</div>
                    <div className="batch">: {batch.batch}</div>
                    <div className="batch-name">Nama Peserta</div>
                    <div className="name">: {batch.name}</div>
                </div>
            </div>
        ))
    };

    const renderCourses = () => {
        const totalScores = courses.reduce((accumulator, course) => {
            return course.score !== null ? accumulator + course.score : accumulator;
        }, 0);
    
        const validScoresCount = courses.reduce((count, course) => {
            return course.score !== null ? count + 1 : count;
        }, 0);
    
        const averageScore = validScoresCount > 0 ? totalScores / validScoresCount : 0;
    
        return (
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Course</th>
                        <th>Nilai</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{course.course}</td>
                            <td>{course.score || "-"}</td>
                            <td>{course.status}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Rata-rata</td>
                        <td>{averageScore.toFixed(2)}</td>
                        <td colSpan="2"></td>
                    </tr>
                </tfoot>
            </table>
        );
    };

    return (
        <div className="finalreport">
            <div className="title">
                <h><b>Final Report</b></h>
            </div>
            <hr />
            <div className="final-desc">
                {renderDesc()}
            </div>
            <div className="final-container">
                {renderCourses()}
            </div>
            <div className="graphic-title">
                <h><b>Kirkpatrick Report</b></h>
            </div>
            <hr />
        </div>
    );
}

export default FinalReport;