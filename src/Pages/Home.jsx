import React from 'react'

const Home = () => {

    const togglePermission = () => {
        console.log("token is added")
       localStorage.setItem("token", "i am token yeah")
    }
    const removePermission = () => {
        console.log("token is removed ")

        localStorage.removeItem('token')
    }
    const addRole = () => {
        console.log("role is added")
       localStorage.setItem("role", "admin")
    }
    const removeRole = () => {
        console.log("role is removed ")

        localStorage.removeItem('role')
    }

  return (
    <>
    <div onClick={togglePermission}>add Token click me</div>
    <div onClick={removePermission}>remove Token click me</div>

    <div onClick={addRole}>add role click me</div>
    <div onClick={removeRole}>remove role click me</div>

    </>
    

  )
}

export default Home