'use client'
import InputTask from '@/app/components/InputTask'
import React, { useState } from 'react'
import Task from '@/app/components/Task'
import Sidenav from '../components/Sidenav'
const Page = () => {
  const [itemList,setItemList]=useState<{task:string, time:string}[]>([]);
  function additem(item:{task:string, time:string}) {
    setItemList([...itemList,item]);
  }
  return (
    <div>
      <Sidenav />
      <main className='ml-20'>
      <br/>
      <div className='m-10'>
      <h3 className='flex justify-center font-bold'>Schedule for the Day</h3>
      <br />
      {itemList.map((item,index)=>{
        return (
          <div key={index} >
          <Task id={index} task={item.task} time={item.time} />
          </div>
        );
      })}
      <br />
      <InputTask addTask={additem} />
      </div>
      </main>
    </div>
  )
}

export default Page
