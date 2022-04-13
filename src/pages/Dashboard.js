import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { auth } from '../logic/firebase'
import { Form, Button, Card, Container } from "react-bootstrap"
import { Doughnut, Line } from 'react-chartjs-2';
import {Tooltip, Title, ArcElement, Legend, Chart, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js"
import "@fontsource/sora";

Chart.register(
  Tooltip, Title, ArcElement, Legend, CategoryScale, LinearScale, PointElement, LineElement
);


function DashboardPage() {

  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 55, 30 ,10],
        backgroundColor: Object.values({
          red: 'rgb(255, 99, 132)',
          orange: 'rgb(255, 159, 64)',
          yellow: 'rgb(255, 205, 86)',
          green: 'rgb(75, 192, 192)',
          blue: 'rgb(54, 162, 235)',
          purple: 'rgb(153, 102, 255)',
          grey: 'rgb(201, 203, 207)'
        }),
      }
    ]
  };


  const [user, setUser] = useState(auth.currentUser);
  console.log("currUser: " + user)
  const navigation = useNavigate();
  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
  });


  
  const logout = async () => {
      const user = await signOut(auth);
  }

  return (
    <>
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}>
    <div className='left division' style={{height: 600, width: 450}}>
    <Doughnut data={data} options={{maintainAspectRatio: false}} />
    </div>
    <div className='middle division' style={{height: 600, width: 450}}>
    <div style={{height: 300, width: 450}}>
    <Line data={data} options={{maintainAspectRatio: false}} />
    </div>
    <div style={{height: 200, width: 400, marginTop: 50, background: "red"}}></div>
    </div>
    <div className='right division'  style={{height: 600, width: 450}}>
    <div style={{height: 100, width: 400, marginTop: 50, background: "red"}}></div>
    <div style={{height: 100, width: 400, marginTop: 50, background: "red"}}></div>
    </div>
    </div>
    </>
  )
}

export default DashboardPage
