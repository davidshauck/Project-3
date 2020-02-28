import React from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import StudentSearch from "../../components/StudentSearch";
import "./accountInfo.css";





function AccountInfo(props) {

    return (
        <div class="box">
            <h2>Enter your info</h2>
        <form class="fields">
        <Input name="name" placeholder="Name (required)" />
        <Input name="email" type="email" placeholder="Email (required)" />
        <Input name="password" type="password" placeholder="Password (required)" />
        <Input name="image" type="text" placeholder="Photo url (required)" />

        </form>
        </div>
    );
  };


  export default AccountInfo;



