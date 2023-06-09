const baseUrl = 'https://blog-site-nine-xi.vercel.app';
// http://localhost:3000
// https://blog-site-nine-xi.vercel.app/




// Get all the user from the database
// export const getUser = async () => {
//     const response = await fetch(`${baseUrl}/api`)
//     const json = await response.json();
//     return json;
// }



// Post user to the database
export const addUser = async (formData) => {
    try {
        const Option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${baseUrl}/api`, Option);
        const json = await response.json();
        return json;
    } catch (error) {
        return (error);
    }
}


// Update user with feedback
export async function updateUserBlog(userId, formData) {
    console.log(formData);
    try {
        const Options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${baseUrl}/api/?userId=${userId}`, Options)
        const json = await response.json();
        return json;
    } catch (error) {
        return (error);
    }
}



export async function deleteUserPost (userId){
        try{
        const Options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(`${baseUrl}/api/?userId=${userId}`, Options)
        const json = await response.json(); 
        return json;
    }catch(error){
        return(error); 
    }
    
}


