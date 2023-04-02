import Users from "../../model/user";

// Getting all the users from DB.
export async function getUser (req, res) {
    try{
        const users = await Users.find({}); 
        if(!users){
            return res.status(404).json({error: 'Data is not found'})
        }
        // console.log(users); 
        res.status(200).json(users)
    }catch(errors){
        res.status(404).json({errors: 'Got error while fetching the data'})
    }
}

// Posting a user to the database
export async function postUsers(req, res){
    try{
        const formData = req.body;
        if(!formData){
            return res.status(404).json({error: 'Form data is not provided!'})
        }
        Users.create(formData)
        .then(data => {
            console.log(''); 
        })
    }catch(errors){
        return res.status(404).json({error: 'Posting the user is failed'});
    }
}

export async function updateUserWithFeedBack (req, res) {
    try{
        const {userId} = req.query; 
        const formData = req.body; 
        console.log(formData);
        if(userId && formData){
            const user = await Users.findByIdAndUpdate(userId, formData)
            res.status(200).json(user); 
            console.log(user); 
        }
        res.status(404).json({error: 'User is not selected...!'}); 
    }catch(errors){
        return res.status(404).json({error: 'Operation failed to update the data....!'}); 
    }
}