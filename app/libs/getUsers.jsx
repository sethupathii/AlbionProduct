
export default async function GetUsers() {
    const response = await fetch('https://backend.albionpropertyhub.com/api/properties/show')

    if (!response.ok) {
        throw new Error("failed to fetch data")
    }

    return await response.json();

}


