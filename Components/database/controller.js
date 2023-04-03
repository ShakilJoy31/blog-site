import Users from "../../model/user";

// Getting all the users from DB.
export async function getUser (req, res) {
    try{
        const users = await Users.find({}); 
        if(!users){
            return res.status(404).json({error: 'Data is not found'})
        }
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
            console.log(data); 
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



// Specific post
export async function getSpecificPost(req, res) {
    try{
        const {singlePost} = req.query; 
        if(singlePost){
            const user = await Users.findById(singlePost); 
            return res.status(200).json(user); 
        }
        res.status(404).json({error: 'User id is not found.'}); 
    }catch(error){
        res.status(404).json({error: 'Operation failed to get a specific user.'}); 
    }
}

// Deleting the blog by admin or Authors

export async function deleteUser (req, res){
    try{
        const {userId} = req.query; 
        if(userId){
            const user = await Users.findByIdAndDelete(userId); 
            return res.status(200).json({deleted: user}); 
        }
        res.status(404).json({error:'User id is not selected'}); 
    }catch(error){
        res.status(404).json({error: 'Operation failed to delete the data....!'})
    }
}