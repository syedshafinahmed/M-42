import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

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
        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;
        return student
    })
    console.log(marksChartData);
    return (
        <div>
            <BarChart width={1500} height={400} data={marksChartData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='avg' fill='yellow'></Bar>
                <Bar dataKey='chemistry' fill='blue'></Bar>
                <Bar dataKey='physics' fill='red'></Bar>
                <Bar dataKey='math' fill='white'></Bar>
            </BarChart>
        </div>
    );
};

export default Marks;