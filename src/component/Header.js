import React from 'react';
export default function Header({ info }) {
  console.log(info);
  return (
    <div style={{ backgroundColor: 'green' }}>
      <h3>{info.id}</h3>
      <h3>{info.name}</h3>
      <h3>{info.age}</h3>
    </div>
  );
}
