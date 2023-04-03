import { useEffect, useState } from 'react';
import FoodProductStyle from '../Components/FoodProductStyle.module.css';
import { deleteUserPost, getUser } from '@/lib/healper';
import { AiFillDelete } from "react-icons/ai";
import { useRouter } from 'next/router';

const ReadPost = (props) => {
    const [blogs, setBlogs] = useState(props.blogs);
    const [deleteBlogId, setDeleteBlogId] = useState(props.blogs);
    const handleSearchBlog = (titleNameForSearching) => {
        if (titleNameForSearching) {
            const searchedBlog = blogs.filter((blog, index) => (blog.title).toLowerCase().match(titleNameForSearching));
            setBlogs(searchedBlog);
        }
        else {
            setBlogs(props.blogs);
        }
    }
    const router = useRouter();
    const [role, setRole] = useState('');
    useEffect(() => {
        const localStorageUser = JSON.parse(localStorage.getItem('user'));
        setRole(localStorageUser?.role);
    }, [])
    console.log(role);
    const deletePost = () => {
        deleteUserPost(deleteBlogId).then(res => {
            const restBlogs = blogs.filter(blog => blog?._id !== deleteBlogId);
            setBlogs(restBlogs);
        })
        console.log(deleteBlogId);
    }
    console.log(blogs);
    return (
        <div>
            <div className='min-h-screen'>
                <h1 className='flex justify-center pt-6 text-5xl'>All Posts</h1>

                <div className="flex justify-center mx-4 my-6 border-0 rounded-lg lg:mx-16 md:mx-10">
                    <input style={{
                        opacity: '0.8'
                    }} onChange={(e) => handleSearchBlog(e.target.value)} type='text' placeholder='Search by Title' className="flex justify-center w-full text-red-600 bg-white border-0 input focus:outline-none" />
                </div>


                <div className='flex justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                        {
                            blogs.map((blog, index) => <div key={index} className='p-4 border-0 cursor-pointer lg:w-[600px] md:w-[500px] w-[380px]'>
                                <div style={{
                                    backgroundColor: '#19A7CE',
                                    borderRadius: '5px'
                                }}>
                                    <div className={`${FoodProductStyle.reservationCardForIndv}`}>
                                        <div>
                                            <div className='flex items-center justify-between w-full'>

                                                <div onClick={() => router.push(blog?._id)} className='p-4'>
                                                    <h1 className='mb-2 text-2xl text-black hover:text-white'>{blog.title}</h1>

                                                    {
                                                        blog.description.length > 360 ? <p style={{
                                                            overflowY: 'scroll',
                                                            msOverflowStyle: 'none',
                                                            scrollbarWidth: 'none'
                                                        }} className='mb-2 text-black h-28 hover:text-white'>{blog.description}</p> : <p className='mb-2 text-black h-28 hover:text-white'>{blog.description}</p>
                                                    }
                                                </div>

                                                {
                                                    role != 'Reader' ? <div className='pr-2'>
                                                        {
                                                            role == 'Admin' && <label onClick={() => setDeleteBlogId(blog?._id)} htmlFor='reservationConfirmation' className='text-white cursor-pointer hover:text-red-400'><AiFillDelete size={35}></AiFillDelete></label>
                                                        }

                                                        {
                                                            (blog?.role == 'Author' && role != 'Admin' && role != 'Reader' && role != '') ? <label onClick={() => setDeleteBlogId(blog?._id)} htmlFor='reservationConfirmation' className='text-white cursor-pointer hover:text-red-400'><AiFillDelete size={35}></AiFillDelete></label> : ''
                                                        }
                                                    </div> : ''
                                                }



                                                {/* {
                                                role == '' && ''
                                            } */}

                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                </div>

                <div className='flex justify-center py-6'>
                    <div className="btn-group">
                        <button className="btn btn-sm">1</button>
                        <button className="btn btn-sm btn-active">2</button>
                        <button className="btn btn-sm">3</button>
                        <button className="btn btn-sm">4</button>
                        <button className="btn btn-sm">5</button>
                        <button className="btn btn-sm">6</button>
                    </div>
                </div>

                {/* Deletion */}
                <div>
                    <input type="checkbox" id="reservationConfirmation" className="modal-toggle" />
                    <label htmlFor="reservationConfirmation" className="cursor-pointer modal">
                        <label className="relative modal-box" htmlFor="">
                            <h3 className="flex justify-center text-lg font-bold text-red-400">Are you sure to delete?</h3>
                            <p className="flex justify-center py-4 text-red-300">This action will delete the reservation permanently.</p>

                            <div className='flex justify-end gap-x-6'>
                                <label htmlFor="reservationConfirmation" style={{
                                    backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} btn-sm border-0 text-xl text-black mt-4`}>Cancel
                                </label>

                                <label onClick={deletePost} htmlFor="reservationConfirmation" style={{
                                    backgroundImage: "linear-gradient(45deg ,green ,white)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} btn-sm border-0 text-xl text-black mt-4`}>Sure
                                </label>
                            </div>

                        </label>
                    </label>
                </div>

                {/* <ToastContainer></ToastContainer> */}
            </div>
        </div>
    );
};

export default ReadPost;

export async function getServerSideProps(context) {
    const response = await fetch(`http://localhost:3000/api`)
    const blogs = await response.json();
    return {
        props: { blogs }, // will be passed to the page component as props
    }
}





// const readPost = () => {
//     return (
//         <div>
//             <div className='min-h-screen'>
//             <h1 className='flex justify-center pt-6 text-5xl'>All Posts</h1>
//             <div className='flex justify-center'>
//                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
//                     {
//                         reservations.map((reservation, index) => <div key={index} className='p-4 border-0'>
//                             <div style={{
//                                 backgroundColor: '#19A7CE',
//                                 borderRadius: '5px',
//                                 width: '600px'
//                             }}>
//                                 <div className={`${FoodProductStyle.reservationCardForIndv}`}>
//                                     <div>
//                                         <div className='flex items-center justify-between w-full p-2'>
//                                             <div className='flex items-center gap-x-4'>
//                                                 <img className='rounded-sm w-36 h-28' src='https://i.ibb.co/KVBdb3M/3692584.jpg' alt="" />

//                                                 <div>
//                                                     <h1 className='text-2xl'>Omrrito Restaurant</h1>
//                                                     <span className='flex items-center my-2 text-green-400 gap-x-2'><RiCheckboxCircleFill size={25}></RiCheckboxCircleFill> <span className='text-white'>Reservation Confirmed by <span className='text-red-300 cursor-pointer hover:underline'>{reservation?.requesterEmail}</span></span></span>

//                                                     <div className='flex items-center'>
//                                                         <span style={{
//                                                             borderRight: '1px solid red'
//                                                         }} className='flex items-center pr-4 gap-x-3'><FaUserAlt size={20}></FaUserAlt> <span>{reservation.people}</span></span>

//                                                         <span className='flex items-center px-4 gap-x-2'><BsCalendar2DateFill></BsCalendar2DateFill> <span>{reservation?.date} at {reservation?.time}</span></span>

//                                                     </div>
//                                                     <p className='flex items-center mt-2'>
//                                                         <span style={{
//                                                             borderRight: '1px solid red'
//                                                         }} className='pr-4 mr-4'>Reserved for <span className='text-red-300 cursor-pointer hover:underline'>{reservation?.name}</span></span>
//                                                         <span className='mr-2'><MdEmail size={20}></MdEmail></span>
//                                                         <span>{reservation?.email}</span>
//                                                     </p>
//                                                 </div>

//                                             </div>

//                                             <label htmlFor='reservationConfirmation' onClick={() => setDeleteId(reservation?._id)} className='text-white cursor-pointer hover:text-red-400'><AiFillDelete size={35}></AiFillDelete></label>


//                                         </div>

//                                     </div>


//                                 </div>
//                             </div>
//                         </div>)
//                     }


//                 </div>
//             </div>
//             {
//                 deleteId && <div>
//                     <input type="checkbox" id="reservationConfirmation" className="modal-toggle" />
//                     <label htmlFor="reservationConfirmation" className="cursor-pointer modal">
//                         <label className="relative modal-box" htmlFor="">
//                             <h3 className="flex justify-center text-lg font-bold text-red-400">Are you sure to delete?</h3>
//                             <p className="flex justify-center py-4 text-red-300">This action will delete the reservation permanently.</p>

//                             <div className='flex justify-end gap-x-6'>
//                                 <label htmlFor="reservationConfirmation" style={{
//                                     backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
//                                     backgroundSize: "100%",
//                                     backgroundRepeat: "repeat",
//                                 }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} btn-sm border-0 text-xl text-black mt-4`}>Cancel
//                                 </label>

//                                 <label onClick={handleDeleteReservation} htmlFor="reservationConfirmation" style={{
//                                     backgroundImage: "linear-gradient(45deg ,green ,white)",
//                                     backgroundSize: "100%",
//                                     backgroundRepeat: "repeat",
//                                 }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} btn-sm border-0 text-xl text-black mt-4`}>Sure
//                                 </label>
//                             </div>

//                         </label>
//                     </label>
//                 </div>
//             }
//             <ToastContainer></ToastContainer>
//         </div>
//         </div>
//     );
// };

// export default readPost;