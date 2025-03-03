import React, { useEffect, useState } from 'react';
import { getUserHomeworks } from '@/api/authApi';

function Home() {
    const [homeworks, setHomeworks] = useState([]);
    const userData = localStorage.getItem("user");
    const userObject = JSON.parse(userData);



    useEffect(() => {
        async function fetchData() {
            try {
                console.log(localStorage)
                const response = await getUserHomeworks();
                if (response.data && Array.isArray(response.data)) {
                    setHomeworks(response.data); // Update state
                }
            } catch (error) {
                console.error("Error fetching homeworks:", error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        // This effect runs whenever `homeworks` state updates
        homeworks.forEach(element => {
            console.log(element.text);
        });
    }, [homeworks]); // Dependency array ensures it runs only when homeworks change

    return (
        <div>
            <h1>arabic lesons for user: {userObject.username} </h1>
            <ul>
                {homeworks.map((hw, index) => (
                    <li key={index}>{hw.text}</li> // Assuming each item has a `text` field
                ))}
            </ul>
        </div>
    );
}

export default Home;
