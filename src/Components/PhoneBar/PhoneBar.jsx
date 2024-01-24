import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhoneBar = () => {
    const [phones, setPhone] = useState([])
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhone(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                
                const phoneData = loadedData.map( phone => {
                    const parts = phone.slug.split('-')
                    const price = parseInt(parts[1])
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price                        
                    }
                    return phoneInfo;
                })
                console.log(phoneData)
                setPhone(phoneData)
            })
    }, [])
    return (
        <div>

                <BarChart width={1000} height={500} data={phones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="name" ></XAxis>
                    <YAxis dataKey="price"></YAxis>                    
                </BarChart>


        </div>
    );
};

export default PhoneBar;