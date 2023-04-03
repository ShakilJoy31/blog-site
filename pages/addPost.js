import { useEffect, useState } from 'react';
import FoodProductStyle from '../Components/FoodProductStyle.module.css';
import { addUser } from '@/lib/healper';
const AddPost = () => {
    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState('');
    const [user, setUser] = useState(''); 
    useEffect(()=>{
        const localStorageUser = JSON.parse(localStorage.getItem('user'));
        setUser(localStorageUser); 
    },[])
    const handleAddPostButton = () =>{
        const formData = {title: title, description: description, email: user?.email, role: user?.role, comment: []};
        addUser(formData).then(res => console.log(res));
    }
    return (
        <div className='flex items-center justify-center pt-16'>
            <div>
                <div style={{
                    backgroundColor: '#19A7CE',
                    borderRadius: '5px'
                }} className="hover:shadow-white w-[370px] lg:w-[650px] md:w-[600px]">
                    <div className="p-3">
                        <h1 className='flex justify-center mb-4 text-3xl text-white'>Add your blog here</h1>
                        <div>
                            <div className="flex justify-center">
                                <div>
                                    <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Title' className="w-full bg-black input focus:outline-none focus:border-white" />

                                    <textarea onChange={(e)=>setDescription(e.target.value)} type='text' placeholder='Type your address' className="w-full pt-3 my-4 bg-black input input-lg focus:outline-none focus:border-white" />

                                    <label onClick={handleAddPostButton} htmlFor="confirmOrderFoodModal" className={`w-full text-xl normal-case border-0 btn btn-md ${FoodProductStyle.confirmOrder} mb-6`}>Add Post</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* {
                ( orderConfirmationModal || orderConfirmationModalInfo) && <div>
                    <input type="checkbox" id="confirmOrderFoodModal" className="modal-toggle" />
                    <div className="modal">
                        <div style={{
                            backgroundColor: '#19A7CE',
                            borderRadius: '5px',
                            width: '550px'
                        }} className="relative modal-box">
                            <label htmlFor="confirmOrderFoodModal" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>

                            {
                                orderConfirmationModalInfo ? <div className='mt-4'>
                                    <h3 className="flex justify-center text-2xl font-bold text-red-700"> <span className='mr-4 '><MdError size={35}></MdError></span>User information is required!</h3>
                                    <p className="flex justify-center py-4 text-xl text-black">Fill the client information up first.</p>
                                    <p className='flex justify-center text-black'>Thanks for your patience.</p>
                                </div> : <div className='mt-4'>
                                    <h3 className="flex justify-center text-2xl font-bold text-black"> <span className='mr-4 '><RiCheckboxCircleFill size={35}></RiCheckboxCircleFill></span> Your order is successfully placed.</h3>
                                    <p className="flex justify-center py-4 text-xl text-black">We will reach the food for you <span className='ml-2 text-2xl text-white'>ASAP!</span></p>
                                    <p className='flex justify-center text-black'>Thanks for your patience.</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            } */}
            </div>
        </div>
    );
};

export default AddPost;