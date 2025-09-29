import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const resultData = [
    { "id": 1, "name": "Student 1", "physics": 78, "chemistry": 85, "math": 92 },
    { "id": 2, "name": "Student 2", "physics": 64, "chemistry": 72, "math": 70 },
    { "id": 3, "name": "Student 3", "physics": 90, "chemistry": 88, "math": 95 },
    { "id": 4, "name": "Student 4", "physics": 55, "chemistry": 60, "math": 58 },
    { "id": 5, "name": "Student 5", "physics": 82, "chemistry": 79, "math": 88 },
    { "id": 6, "name": "Student 6", "physics": 69, "chemistry": 73, "math": 75 },
    { "id": 7, "name": "Student 7", "physics": 95, "chemistry": 92, "math": 98 },
    { "id": 8, "name": "Student 8", "physics": 48, "chemistry": 50, "math": 52 },
    { "id": 9, "name": "Student 9", "physics": 77, "chemistry": 80, "math": 85 },
    { "id": 10, "name": "Student 10", "physics": 88, "chemistry": 86, "math": 91 }
  ]
  
const ResultChart = () => {
    return (
        <div>
            <LineChart width={1000} height={500} data={resultData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey='chemistry' stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;