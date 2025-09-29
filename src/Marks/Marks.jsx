import React, { use } from 'react';

const Marks = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    console.log(marksData);

    // data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.physics,
            chemistry: studentData.chemistry,
            math: studentData.math

        } 
        return student
    })
    console.log(marksChartData);
    return (
        <div>

        </div>
    );
};

export default Marks;