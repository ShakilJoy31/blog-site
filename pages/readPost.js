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
    }

    // For pagination
    const [page, setPage] = useState(0);
    // const url = `http://localhost:3000/api?page=${page}`
    // router.push(url); 

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
                    <div className=" btn-group">
                        {
                            [...Array(props?.blogs.length).keys()].map((number, index) => <button key={index}
                                onClick={()=> setPage(number + 1)}
                                className={ `btn-md rounded-sm text-xl ${number + 1 === page ? FoodProductStyle.selectedPaginationButton : FoodProductStyle.PaginationButton}`}>{number + 1}</button>)
                        }
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
    // const {query} = context; 
    // const {url} = query; 
    // console.log(url); 
    const response = await fetch(`http://localhost:3000/api`)
    const blogs = await response.json();
    return {
        props: { blogs },
    }
}