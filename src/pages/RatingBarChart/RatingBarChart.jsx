import React from 'react';
import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';
const ratingData = [
  { name: "1 star", count: 800 },
  { name: "2 star", count: 1200 },
  { name: "3 star", count: 2500 },
  { name: "4 star", count: 3200 },
  { name: "5 star", count: 10500 }
];

const RatingBarChart = ({ data = ratingData }) => {
  
  const maxCount = Math.max(...data.map(item => item.count));


  const reversedData = [...data].reverse();

  return (
    <div className="w-full h-80 p-4 bg-[#D9D9D9] rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">User Ratings Distribution</h3>
      
     
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          layout="vertical"
          data={reversedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />

          
          <YAxis 
            dataKey="name" 
            type="category" 
            stroke="#6b7280" 
            tickLine={false} 
            axisLine={false} 
          />

          
          <XAxis 
            type="number" 
            domain={[0, Math.ceil(maxCount / 1000) * 1000]} 
            stroke="#6b7280" 
            tickFormatter={(value) => (value >= 1000 ? `${value / 1000}K` : value)} 
          />

          
          <Tooltip 
            formatter={(value, name) => [value, "Count"]} 
            labelFormatter={(label) => label} 
          />

          
          <Legend wrapperStyle={{ paddingTop: '10px' }}/>

         
          <Bar 
            dataKey="count" 
            fill="#10b981" 
            barSize={15} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingBarChart;