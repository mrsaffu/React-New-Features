// "use client";
import "./UseHook.css";
import { promise } from "../Api/fetchapi";

import { use, useState } from "react";

const UseHook = () => {
  let data = use(promise);

  console.log(data);

  return (
    <div className="profile-container">
      <h1 className="title">GitHub Details</h1>
      <div className="profile-card">
        <img src={data.avatar_url} alt="avatar" className="avatar" />
        <h2 className="name">Name: {data.name}</h2>
        <p className="bio">{data.bio}</p>
        <p className="followers">Followers: {data.followers}</p>
      </div>
    </div>
  );
};

export default UseHook;
