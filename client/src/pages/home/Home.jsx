import React from 'react'
import Featured from '../../component/featured/Featured'
import Navbar from '../../component/navbar/Navbar'
import List from '../../component/list/List';
import "./home.scss";

import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  // useEffect(() => {
  //   const getRandomLists = async () => {
  //     try {
  //       const res = await axios.get(
  //         `lists${type ? "?type=" + type : ""}${
  //           genre ? "&genre=" + genre : ""
  //         }`,
  //         {
  //           headers: {
  //             token:
  //             "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
  //           },
  //         }
  //       );
  //       setLists(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getRandomLists();
  // }, [type, genre]);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`http://localhost:8085/lists${type ? "?type=" + type : ""}${
                    genre ? "&genre=" + genre : ""
                  }`,
        {
          headers:{
            token:  "Bearer "+JSON.parse(localStorage.getItem("user")).acessToken,
            // token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTNkNDNmOWIzODUwMDU1YmYzN2UyOSIsImlhdCI6MTY1MDI3NzkwOSwiZXhwIjoxNjUwNzA5OTA5fQ.OuEPbYTuqaq4vBgj0RbMZL9wgZSpSID_KRsaKtskMKI"
          }
        }
        );
        console.log(res);
        setLists(res.data);
      
      } catch (error) {
        console.log(error)
      }
    };
    getRandomLists();
  }, [type,genre])
  return (
    <>
      {/* <div className="home">
        <Navbar />
        <Featured type={type} />
        <List />
      </div> */}
      <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
    </>
  )
}

export default Home