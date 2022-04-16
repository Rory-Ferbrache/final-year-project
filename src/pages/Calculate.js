import {useRef, React} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Button, Card, Container } from "react-bootstrap"
import "bootstrap/js/dist/tab.js"
import "react-bootstrap"
import { db, auth } from '../logic/firebase'
import { collection, addDoc, query, where, getDocs, DocumentSnapshot, refEqual, getDoc, updateDoc } from "firebase/firestore"; 
import "./Calculate.css"
import { useNavigate } from "react-router-dom"


const Calculate = () => {

  let iterator = -1

  const navigation = useNavigate();
  
  const elecRef = useRef(0);
  const naturalGasRef = useRef(0);
  const heatingOilRef = useRef(0);
  const coalRef = useRef(0);
  const LPGRef = useRef(0);
  const propaneRef = useRef(0);
  const woodRef = useRef(0);

  const flightDistanceRef = useRef(0);
  const flightClassRef = useRef(0);

  const carDistanceRef = useRef(0);
  const carTypeRef = useRef(0);

  const busRef = useRef(0);
  const coachRef = useRef(0);
  const nationalRailRef = useRef(0);
  const internationalRailRef = useRef(0);
  const tramRef = useRef(0);
  const subwayRef = useRef(0);
  const taxiRef = useRef(0);

  const foodAndDrinkRef = useRef(0);
  const pharmaceuticalsRef = useRef(0);
  const clothesRef = useRef(0);
  const paperRef = useRef(0);
  const computerRef = useRef(0);
  const TVRef = useRef(0);
  const motorVehiclesRef = useRef(0);
  const furnitureRef = useRef(0);
  const hotelRef = useRef(0);
  const telephoneRef = useRef(0);
  const bankingRef = useRef(0);
  const insuranceRef = useRef(0);
  const educationRef = useRef(0);
  const recreationalRef = useRef(0);

  const deviceNameRef = useRef("");
  const deviceTypeRef = useRef(0);
  const deviceUsageRef = useRef(0);

  const currDate = new Date(Date.now());

  const q =  query(collection(db, "test"), where("uid", "==", auth.currentUser.uid), where("month", "==", currDate.getMonth()),where("year", "==", currDate.getFullYear()));
  


  const handleCalcSubmit = async () => {
    
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    if(!querySnapshot.docs[0]){
    try {
      const docRef = await addDoc(collection(db, "test"), {
         uid: auth.currentUser.uid,
         elec: parseInt(elecRef.current.value),
         naturalGas: parseInt(naturalGasRef.current.value),
         heatingOil: parseInt(heatingOilRef.current.value),
         coal: parseInt(coalRef.current.value),
         LPG: parseInt(LPGRef.current.value),
         propane: parseInt(propaneRef.current.value),
         wood: parseInt(woodRef.current.value),
         flightDistance: parseInt(flightDistanceRef.current.value),
         flightClass: parseInt(flightClassRef.current.value),
         carDistance: parseInt(carDistanceRef.current.value),
         carType: parseInt(carTypeRef.current.value),
         bus: parseInt(busRef.current.value),
         coach: parseInt(coachRef.current.value),
         nationalRail: parseInt(nationalRailRef.current.value),
         internationalRail: parseInt(internationalRailRef.current.value),
         tram: parseInt(tramRef.current.value),
         subway: parseInt(subwayRef.current.value),
         taxi: parseInt(taxiRef.current.value),
         foodAndDrink: parseInt(foodAndDrinkRef.current.value),
         pharmaceuticals: parseInt(pharmaceuticalsRef.current.value),
         clothes: parseInt(clothesRef.current.value),
         paper: parseInt(paperRef.current.value),
         computer: parseInt(computerRef.current.value),
         TV: parseInt(TVRef.current.value),
         motorVehicles: parseInt(motorVehiclesRef.current.value),
         furniture: parseInt(furnitureRef.current.value),
         hotel: parseInt(hotelRef.current.value),
         telephone: parseInt(telephoneRef.current.value),
         banking: parseInt(bankingRef.current.value),
         insurance: parseInt(insuranceRef.current.value),
         education: parseInt(educationRef.current.value),
         recreational: parseInt(recreationalRef.current.value),
         month: currDate.getMonth(),
         year:  currDate.getFullYear()
      });
      console.log("Document written with ID: ", docRef.id);
      navigation("/")

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }else{
    await updateDoc(querySnapshot.docs[0].ref, {
      elec: parseInt(elecRef.current.value),
      naturalGas: parseInt(naturalGasRef.current.value),
      heatingOil: parseInt(heatingOilRef.current.value),
      coal: parseInt(coalRef.current.value),
      LPG: parseInt(LPGRef.current.value),
      propane: parseInt(propaneRef.current.value),
      wood: parseInt(woodRef.current.value),
      flightDistance: parseInt(flightDistanceRef.current.value),
      flightClass: parseInt(flightClassRef.current.value),
      carDistance: parseInt(carDistanceRef.current.value),
      carType: parseInt(carTypeRef.current.value),
      bus: parseInt(busRef.current.value),
      coach: parseInt(coachRef.current.value),
      nationalRail: parseInt(nationalRailRef.current.value),
      internationalRail: parseInt(internationalRailRef.current.value),
      tram: parseInt(tramRef.current.value),
      subway: parseInt(subwayRef.current.value),
      taxi: parseInt(taxiRef.current.value),
      foodAndDrink: parseInt(foodAndDrinkRef.current.value),
      pharmaceuticals: parseInt(pharmaceuticalsRef.current.value),
      clothes: parseInt(clothesRef.current.value),
      paper: parseInt(paperRef.current.value),
      computer: parseInt(computerRef.current.value),
      TV: parseInt(TVRef.current.value),
      motorVehicles: parseInt(motorVehiclesRef.current.value),
      furniture: parseInt(furnitureRef.current.value),
      hotel: parseInt(hotelRef.current.value),
      telephone: parseInt(telephoneRef.current.value),
      banking: parseInt(bankingRef.current.value),
      insurance: parseInt(insuranceRef.current.value),
      education: parseInt(educationRef.current.value),
      recreational: parseInt(recreationalRef.current.value),
    })
    navigation("/")
  }
  }

  const handleDeviceSubmit = async () =>{
    try {
      const docRef = await addDoc(collection(db, "test"), {
         uid: auth.currentUser.uid,
         deviceName: deviceNameRef.current.value,
         deviceType: deviceTypeRef.current.value,
         deviceUsage: deviceUsageRef.current.value
        });
         console.log("Document written with ID: ", docRef.id);
         navigation("/")
   
       } catch (e) {
         console.error("Error adding document: ", e);
       }
  }

const prev = () => {
  document.getElementsByClassName("step")[iterator].style.display = "none";
  document.getElementsByClassName("step")[iterator - 1].style.display = "block";
  iterator -= 1
}

const next = () => {
  document.getElementsByClassName("step")[iterator].style.display = "none";
  document.getElementsByClassName("step")[iterator + 1].style.display = "block";
  iterator += 1
}

const monthlyForm = () => {
  document.getElementsByClassName("calcForm")[0].style.display = "block";
  document.getElementsByClassName("step")[iterator + 1].style.display = "block";
  document.getElementsByClassName("startFormButton")[0].style.display = "none";
  document.getElementsByClassName("startFormButton")[1].style.display = "none";
  iterator += 1
}

const deviceForm = () =>{
  document.getElementsByClassName("deviceForm")[0].style.display = "block";
  document.getElementsByClassName("startFormButton")[0].style.display = "none";
    document.getElementsByClassName("startFormButton")[1].style.display = "none";
}

  return (
    
<>
<Button className="startFormButton" onClick={monthlyForm}>Monthly Form</Button>
<Form className='calcForm'>
  <div className='step'>
  <h1>House</h1>
  <Form.Group className="mb-3" controlId="testing">
    <Form.Label>Electricity</Form.Label>
    <Form.Range  ref={elecRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Natural Gas</Form.Label>
    <Form.Range ref={naturalGasRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Heating oil</Form.Label>
    <Form.Range ref={heatingOilRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Coal</Form.Label>
    <Form.Range ref={coalRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>LPG</Form.Label>
    <Form.Range ref={LPGRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Propane</Form.Label>
    <Form.Range ref={propaneRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Wood</Form.Label>
    <Form.Range ref={woodRef} />
  </Form.Group>
  <Button variant="primary" type="button" onClick={next}>
    Next
  </Button>
  </div>  
  <div className='step'>
  <h1>Flights</h1>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Distance</Form.Label>
    <Form.Range ref={flightDistanceRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Select ref={flightClassRef} >
    <option value="1">Economy Class</option>
    <option value="2">Premium Economy</option>
    <option value="3">Business Class</option>
    <option value="4">First Class</option>
    <option value="5">Unknown</option>
    </Form.Select>
  </Form.Group>
  <Button variant="primary" type="button" onClick={prev}>
    Prev
  </Button>
  <Button variant="primary" type="button" onClick={next}>
    Next
  </Button>
  </div>
  <div className='step'>
  <h1>Car</h1>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Distance</Form.Label>
    <Form.Range ref={carDistanceRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Select ref={carTypeRef} >
    <option value="1">Car</option>
    <option value="2">Van</option>
    <option value="3">Motor Cycle</option>
    </Form.Select>
  </Form.Group>
  <Button variant="primary" type="button" onClick={prev}>
    Prev
  </Button>
  <Button variant="primary" type="button" onClick={next}>
    Next
  </Button>
  </div>
  <div className='step'>
  <h1>Bus & Rail</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Bus</Form.Label>
    <Form.Range ref={busRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Coach</Form.Label>
    <Form.Range ref={coachRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>National Rail</Form.Label>
    <Form.Range ref={nationalRailRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>International Rail</Form.Label>
    <Form.Range ref={internationalRailRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Tram</Form.Label>
    <Form.Range ref={tramRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Subway</Form.Label>
    <Form.Range ref={subwayRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Taxi</Form.Label>
    <Form.Range ref={taxiRef} />
  </Form.Group>
  <Button variant="primary" type="button" onClick={prev}>
    Prev
  </Button>
  <Button variant="primary" type="button" onClick={next}>
    Next
  </Button>
  </div>  
  <div className='step'>
  <h1>Secondary</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Food and drinks products</Form.Label>
    <Form.Range ref={foodAndDrinkRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Pharmaceuticals</Form.Label>
    <Form.Range ref={pharmaceuticalsRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Clothes, textiles and shoes</Form.Label>
    <Form.Range ref={clothesRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Paper based products (e.g. books, magazines, newspapers</Form.Label>
    <Form.Range ref={paperRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Computers and IT equipment</Form.Label>
    <Form.Range ref={computerRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>TV, radio and phone (equipment)</Form.Label>
    <Form.Range ref={TVRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Motor vehicles (not including fuel costs)</Form.Label>
    <Form.Range ref={motorVehiclesRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Furniture and other manufactured goods</Form.Label>
    <Form.Range ref={furnitureRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Hotels, restaurants and pubs</Form.Label>
    <Form.Range ref={hotelRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Telephone, mobile phone call costs</Form.Label>
    <Form.Range ref={telephoneRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Banking and finance (mortgage and loan interest payments)</Form.Label>
    <Form.Range ref={bankingRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Insurance</Form.Label>
    <Form.Range ref={insuranceRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Education</Form.Label>
    <Form.Range ref={educationRef} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Recreational, cultural and sporting activities</Form.Label>
    <Form.Range ref={recreationalRef} />
  </Form.Group>
  <Button variant="primary" type="button" onClick={prev}>
    Prev
  </Button>
  <Button variant="primary" type="button" onClick={handleCalcSubmit}>
    Submit
  </Button>
  </div>  
</Form>

<Button className="startFormButton" onClick={deviceForm}>New Device Form</Button>
<Form className="deviceForm">
<Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control ref={deviceNameRef} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>What type is your device?</Form.Label>
    <Form.Select ref={deviceTypeRef}>
    <option value="1">Desktop Computer</option>
    <option value="2">Smart Phone</option>
    <option value="3">Tablet</option>
    <option value="4">Other</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>How many hours a day do you use your device?</Form.Label>
    <Form.Range ref={deviceUsageRef} />
  </Form.Group>
  <Button variant="primary" type="button" onClick={handleDeviceSubmit}>
    Submit
  </Button>
</Form>
</>
  );
};

export default Calculate;