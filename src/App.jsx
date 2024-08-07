import React, { useEffect, useState } from 'react'

const App = () => {
    const [record, setRecord] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then( response => response.json())
        .then(data => setRecord(data))
        .catch(error => console.log(error))
    })

    return (
        <section className='bg-black text-white h-[100vh] flex flex-col justify-center items-center'>
            <h1 className='text-[35px] font-[700] tracking-wide pb-10'>FETCH API</h1>
            <table className="table-auto border-spacing-2 border-separate border border-white text-center">
                <thead className='bg-red-900'>
                    <tr>
                        <th className='px-4'>ID</th>
                        <th className='w-[250px]'>Name</th>
                        <th className='w-[250px]'>Username</th>
                        <th className='w-[250px]'>Email</th>
                        <th className='w-[250px]'>Address (St.)</th>
                    </tr>
                </thead>
                <tbody className='bg-gray-500'>
                    {record.map((list, index) => (
                    <tr>
                        <td key={index}>{list.id}</td>
                        <td key={index}>{list.name}</td>
                        <td key={index}>{list.username}</td>
                        <td key={index}>{list.email}</td>
                        <td key={index}>{list.address.street}</td>
                    </tr>
                    ) )}
                </tbody>
            </table>
            
        </section>
    )
}
export default App
