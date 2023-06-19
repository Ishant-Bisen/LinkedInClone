import React from 'react'
import { Spin ,Space } from 'antd' ;
import './Common.scss'

export default function Spinner() {
  return (
    <div className='spinner'>
    <Space size="large">
        
        <Spin/>
        <span><em>loading...</em></span>
   </Space>
    </div>
  )
} 
