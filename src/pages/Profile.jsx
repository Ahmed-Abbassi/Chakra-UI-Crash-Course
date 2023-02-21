import React from 'react'

const Profile = () => {
  const nb = 5
  let k = 1
  for (let i = 1; i <= nb; i++) {


    for (let j = 0; j <= k; j++) {
      console.log("*");
    }
    k++


  }
  return (
    <div>Profile</div>
  )
}

export default Profile