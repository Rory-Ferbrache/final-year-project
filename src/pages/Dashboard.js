import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { auth, db } from '../logic/firebase'
import { collection, query, where, getDocs, DocumentSnapshot, refEqual, orderBy, limit } from "firebase/firestore";
import { Form, Button, Card, Container } from "react-bootstrap"
import { Doughnut, Line } from 'react-chartjs-2';
import {Tooltip, Title, ArcElement, Legend, Chart, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js"
import "@fontsource/sora";
import { async } from '@firebase/util';

Chart.register(
  Tooltip, Title, ArcElement, Legend, CategoryScale, LinearScale, PointElement, LineElement
);

function DashboardPage() {

  const [user, setUser] = useState(auth.currentUser);
  const [firestoreData, setFirestoreData] = useState([{wood:0},{wood:0},{wood:0},{wood:0},{wood:0}])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigate();
  const [houseData, setHouseData] = useState(100);
  const [flightData, setFlightData] = useState(0);
  const [carData, setCarData] = useState(0);
  const [busData, setBusData] = useState(0);
  const [secondaryData, setSecondaryData] = useState(0);
  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
  });

  
  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [firestoreData[0]["wood"], firestoreData[1]["wood"], firestoreData[2]["wood"], firestoreData[3]["wood"], firestoreData[4]["wood"]],
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

  const q =  query(collection(db, "test"), where("uid", "==", "JXDt5V4yfJYdZlEuxlVLXq1f9qI2"), orderBy("year"), orderBy("month"), limit(5));

  async function getData(){
    const querySnapshot = await getDocs(q);
    const items = [];
    let newHouseData = 0;
    let newFlightData = 0;
    let newCarData = 0;
    let newBusData = 0;
    let newSecondaryData = 0;
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
      items.push((doc.data()));
      newHouseData += doc.data()["wood"];
      newFlightData += doc.data()["flightDistance"];
      newCarData += doc.data()["carDistance"];
      newBusData += doc.data()["bus"];
      newSecondaryData += doc.data()["computer"];

      }
    )
    setFirestoreData(items);
    setLoading(false);
    setHouseData(newHouseData);
    setFlightData(newFlightData);
    setCarData(newCarData);
    setBusData(newBusData);
    setSecondaryData(newSecondaryData);
    console.log(firestoreData)
  }

  useEffect(() => {
    getData();
  },[])
  


  
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
    <div style={{height: 200, width: 400, marginTop: 50, paddingTop: 1, background: "red", display: "flex"}}>
      {loading === false && firestoreData.length > 1 && <div style={{height: 100, width: 100, margin: 15, background: "white"}}></div> }
      {loading === false && firestoreData.length > 2 && <div style={{height: 100, width: 100, margin: 15, background: "yellow"}}></div> }
      {loading === false && firestoreData.length > 6 && <div style={{height: 100, width: 100, margin: 15, background: "blue"}}></div> }
    </div>
    </div>
    <div className='right division'  style={{height: 600, width: 450}}>

        {loading === false && (firestoreData.map((doc) => (

          <div style={{height: 100, width: 400, marginTop: 50, background: "red"}}>{doc?.wood}</div>  
        )))}
        
    </div>
    </div>
    </>
  )
}

export default DashboardPage
