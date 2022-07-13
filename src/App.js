import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Blogs from './pages/Blogs';
import NoPage from "./pages/NoPage";
import Users from './component/Users';
import Members from './component/Members';
import Test from './pages/Test';
import MapList from './pages/MapList';
import Reuse from './pages/Reuse';
import LiftingStateUp from './component/LiftingStateUp';
import PureComponent from './component/PureComponent';
import MemoFunctional from './component/MemoFunctional';
import FormData from './component/FormData';
import React, {useRef, useState} from 'react';
import Student from './component/Student';
import DynamicUser from './component/DynamicUser';
import User from './component/User';
import GetApi from './component/GetApi';
import PostApi from './component/PostApi';

function App() {
  const InputParentRef = useRef(null);
  function fRef()
  {
    InputParentRef.current.value=1111000;
    InputParentRef.current.style.color = "red";
    InputParentRef.current.focus();
  }
  function getData(val)
  {
    alert(`data from ${val}`)
  }
  function getName(myName)
  {
    return myName
  }
  return (
    <div className="App">
      <Users data={() => getData('users')} ref={InputParentRef}/>
      <button onClick={fRef}>Forward Ref</button>
      <Student />
      <HOC cmp={Counter} col="red"/>
      <HOC cmp={Counter} col="green"/>
      {/* <Members data={() => getData('members')}/> */}
      <Routes>
      {/* <Route path='ddd'><div>Roml</div></Route> */}
      
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="test" element={<Test />} />
          <Route path="map-list" element={<MapList />} />
          <Route path="reuse" element={<Reuse />} />
          <Route path="lifting" element={<LiftingStateUp name={getName}/>} />
          <Route path="pure" element={<PureComponent />} />
          <Route path="use-memo" element={<MemoFunctional />} />
          <Route path="ref" element={<FormData />} />
          <Route path="dynamic" element={<DynamicUser />} />
          <Route path='user/:id/:name' element={<User />} />
          <Route path='get-data' element={<GetApi />} />
          <Route path='post-data' element={<PostApi />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

function HOC(props){
  return <h1 style={{backgroundColor:props.col}}><props.cmp /></h1>
}

function Counter()
{
  const [count, setVal] = useState(0)
  function addCount()
  {
    return setVal(count+1)
  }
  return(
    <>
      <h1>count: {count}</h1>
      <button onClick={()=>addCount()}>update count</button>
    </>
  )
}

export default App;
