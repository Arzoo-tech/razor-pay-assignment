import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";

export default function CheckoutForm({values,setValues}) {
  const [form] = Form.useForm();
  const tempval=[];
  let Name='';
  let Mail='';
  let Phone='';
  let Address='';
  let State='';
  let Country='';
  let Pin='';



  const handleName = (e) => {
    Name=e.target.value;
    // setValues(values => [values, Name]);
  }
  const handleMail = (e) => {
    Mail=e.target.value;
    // setValues(values => [values, Mail]);
  }
  const handlePhone = (e) => {
    Phone=e.target.value;
    // setValues(values => [values, Phone]);
  }
  const handleAddress = (e) => {
    Address=e.target.value;
    // setValues(values => [values, Address]);
  }

  const handleState = (e) => {
    State=e.target.value;
    // setValues(values => [values, State]);
  }

  const handleCountry = (e) => {
    Country=e.target.value;
    // setValues(values => [values, Country]);
  }

  const handlePin = (e) => {
    Pin=e.target.value;
    //setValues(values => [values, Pin]);
  }
  const handlePayment = (e) => {
    e.preventDefault();
    setValues(values => [...values, Name]);
    setValues(values => [...values, Mail]);
    setValues(values => [...values, Phone]);
    setValues(values => [...values, Address]);
    setValues(values => [...values, State]);
    setValues(values => [...values, Country]);
    setValues(values => [...values, Pin]);
    let options = {
      key: 'rzp_test_uApVnpDHbvXhdf',
      currency: 'INR',
      name: 'SCHULEWISE',
      description: `Subscription from xyz plan`,
      prefill: {
          name: `${values[0]}`,
          email: `${values[1]}`,
          contact: `${values[2]}`,
      },
      notes: {
          address: `${values[3]}`,
      },
      theme: {
          color: '#3399cc',
      },
      modal: {
          ondismiss: () => {},
      },
  }
    const rzp1 = new window.Razorpay(options);
    rzp1.open();

}

console.log('Name:',values[0]);
console.log('Mail:',values[1]);
console.log('Phone:',values[2]);
console.log('Address:',values[3]);
console.log('State:',values[4]);
console.log('Country:',values[5]);
console.log('Pin:',values[6]);
  return (
    <Form
      layout='vertical'
      form={form}
      initialValues={{
        layout: 'vertical',
      className: 'form'
      }}
      >

      <Form.Item label="Name" >
        <Input placeholder="Enter Name" onChange={(e)=> handleName(e)} />
      </Form.Item>
      <Form.Item label="Email">
        <Input placeholder="Enter Email" onChange={(e)=> handleMail(e)}/>
      </Form.Item>
      <Form.Item label="Phone">
        <Input placeholder="Enter Phone" onChange={(e)=> handlePhone(e)}/>
      </Form.Item>
      <Form.Item label="Address">
        <Input placeholder="Enter Address" onChange={(e)=>handleAddress(e)}/>
      </Form.Item>
      <Form.Item label="State">
        <Input placeholder="Enter State"onChange={(e)=> handleState(e)} />
      </Form.Item>
      <div style={{display:'flex',flexFlow: 'row wrap',alignItems: 'center'}}>
      <Form.Item label="Country" style={{justifyContent:'flex-start'}}>
        <Input placeholder="Enter State" onChange={(e)=> handleCountry(e)}/>
      </Form.Item>
      <Form.Item label="Pincode" style={{marginLeft:305}}>

        <Input placeholder="Enter Pincode" onChange={(e)=> handlePin(e)}/>
      </Form.Item>
      </div>
      <Form.Item style={{marginLeft:-585}} onClick={(e) =>{handlePayment (e)}} >
        <Button type="primary">Pay with RazorPay</Button>
      </Form.Item>
    </Form>
  );
    }