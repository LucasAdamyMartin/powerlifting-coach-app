'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { CheckCircle, Clock } from 'lucide-react'
import { useState } from 'react'
const squat = [
  { name: '01/01/2025', lift: 120 },
  { name: '01/02/2025', lift: 130 },
  { name: '01/03/2025', lift: 140 },
  { name: '01/04/2025', lift: 135 },
  { name: '01/05/2025', lift: 145 }];

const bench = [
    { name: '01/01/2025', lift: 100 },
    { name: '01/02/2025', lift: 110 },
    { name: '01/03/2025', lift: 90 },
    { name: '01/04/2025', lift: 130},
    { name: '01/05/2025', lift: 140 }];

const deadlift = [
      { name: '01/01/2025', lift: 200 },
      { name: '01/02/2025', lift: 210 },
      { name: '01/03/2025', lift: 240 },
      { name: '01/04/2025', lift: 200},
      { name: '01/05/2025', lift: 250 }];  

const weekPlan = [
  {
    day: 'Lundi',
    workouts: [
      { name: 'Squat 5x5@8', done: true },
      { name: 'Bench 3x6 80%', done: true },
    ],
  },
  {
    day: 'Mardi',
    workouts: [
      { name: 'Bench 3x10@7', done: true },
      { name: 'Deadlift 1x5@6', done: true },
    ],
  },
  {
    day: 'Jeudi',
    workouts: [
      { name: 'Squat 5x5@6', done: false },
      { name: 'Bench 1x3@6', done: null },
    ],
  },
]

export default function AthletePage() {
  const [data, setData] = useState(squat);
  const changeGraph = (lift : string) => {
    switch (lift) {
    case "Squat":
      setData(squat);
      break;
    case "Bench":
      setData(bench);
      break;
    case "Deadlift":
      setData(deadlift);
      break;
    }
  }
  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 p-10 space-y-10">
        <h1 className="text-4xl font-bold text-center">Lucas</h1>

        {/* 1RM Cards */}
        <div className="flex justify-center gap-6">
          {['Squat', 'Bench', 'Deadlift'].map((lift) => (
            <button key={lift} onClick={() => changeGraph(lift)} className="rounded-2xl border border-gray-400 p-6 w-[150px] text-center shadow-sm bg-white">
              <h2 className="text-xl font-bold">{lift}</h2>
              <p className="text-sm text-gray-500">1RM</p>
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className="flex justify-center">
          <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="lift" stroke="#8884d8" />
          </LineChart>
        </div>

        {/* Weekly Plan */}
        <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Semaine en cours ⬇️</h2>
          <ul className="space-y-4">
            {weekPlan.map((day) => (
              <li key={day.day}>
                <h3 className="text-lg font-semibold text-gray-700">{day.day} :</h3>
                <ul className="ml-4 mt-1 space-y-1">
                  {day.workouts.map((w, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-800">
                      <span>- {w.name}</span>
                      {w.done === true && <CheckCircle className="text-green-500 w-5 h-5" />}
                      {w.done === false && <Clock className="text-yellow-500 w-5 h-5" />}
                      {w.done === null && <Clock className="text-yellow-500 w-5 h-5 animate-pulse" />}
                    </li>
                  ))}
                </ul>
                <button className="text-sm bg-blue-100 text-blue-700 px-3 py-1 mt-2 rounded-full hover:bg-blue-200 transition">
                Voir la note
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
