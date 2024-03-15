// // pages/[puid].jsx

'use client'

import { useEffect, useState } from 'react';
import GetUsers from '@/app/libs/getUsers';

export default function PropertyPage({ params: { id } }) {
    const [property, setProperty] = useState(null);

    const puidId = id;


    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const properties = await GetUsers();
                const foundProperty = properties.find(property => property.puid === puidId);
                setProperty(foundProperty);
                console.log(foundProperty);
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };

        if (puidId) {
            fetchProperty();
        }
    }, [property]);

    return (
        <div>
            {property ? (
                <div>
                    <h1>{property.property_type.pt_id}</h1>
                    <h1>{property.property_type.ptuid}</h1>
                    <h1>{property.property_type.pt_name}</h1>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

