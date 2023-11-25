import React from 'react'
import { useEffect , useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect (() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => setData(data) )
    //  },[] ) 
    
    const data = useLoaderData()
  return (
    <div className="flex flex-col items-center card card-side bg-base-100 shadow-xl justify-center">
  <img  src={data.avatar_url} height={300} width={300}/>
  <div className="flex flex-col item-center card-body">
    <h2 className="card-title items-center text-2xl font-semibold">Github followers: {data.followers} </h2> 
    <h2 className="card-title items-center text-2xl font-semibold">Github id: {data.id} </h2>
    <h2 className="card-title  text-2xl font-semibold">Github url: {data.url} </h2>
  </div>
</div>
  )
}

export const githubloader = async () => {
    const res =await fetch('https://api.github.com/users/projit-biswas')
    return res.json()
}

export default Github