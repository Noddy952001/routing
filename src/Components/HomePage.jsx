import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const HomePage = () => {
  return (
    <>
      <div
        style={{
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {[].map((el) => {
          return <li>{el.title}</li>
        })}
      </div>
    </>
  );
};
