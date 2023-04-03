import { updateUserBlog } from '@/lib/healper';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';
import { BsArrowLeft } from "react-icons/bs";

const SinglePost = (props) => {
    console.log(props.post);
    const router = useRouter();
    const [role, setRole] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [userComment, setUserComment] = useState('');
    const [userNewComment, setUserNewComment] = useState('');

    const [title, setTitle] = useState(props?.post?.title);
    const [description, setDescription] = useState(props?.post?.description);

    const handleUpdateBlog = () => {
        const formData = { title: newTitle, description: newDescription };
        updateUserBlog(router?.query.singlePost, formData);
        setTitle(newTitle);
        setDescription(newDescription);
    }

    useEffect(() => {
        const localStorageUser = JSON.parse(localStorage.getItem('user'));
        setRole(localStorageUser?.role);
    }, [])

    // For commenting
    const commentArray = props?.post?.comment;
    const handleCommentButton = () => {
        commentArray.push(userComment);
        setUserNewComment(userComment);
        const formData = { comment: commentArray };
        updateUserBlog(router?.query.singlePost, formData);
    }
    return (
        <div className='mx-4 lx:mx-16 md:mx-10'>
            <div className='w-12 pt-6'>
                <span onClick={() => router.push('/readPost')} className='text-4xl cursor-pointer hover:text-red-500'><BsArrowLeft></BsArrowLeft></span>

            </div>
            <div className='flex items-center justify-center lg:min-h-screen md:min-h-screen'>
                <div>
                    <h1 className='flex items-center justify-center text-3xl text-white'>{title}</h1>

                    <p className='flex items-center justify-center mt-6 text-xl text-white '>{description}</p>

                    <div className='p-4 mt-2 text-white bg-black border border-red-600 rounded'>
                        <h1 className='text-2xl text-red-600'>Comments for this blog</h1>
                        {
                            commentArray.map((singleComment, index) => <p key={index} className='mt-2'>{singleComment} <br /></p>)
                        }

                    </div>

                    <div className='flex justify-between'>
                        <div className=''>
                            <label htmlFor='forComment' style={{
                                backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} className="mt-4 border-0 btn"> <span className='flex items-center text-xl text-black normal-case gap-x-2'><span>Leave a comment</span> <span><AiTwotoneEdit></AiTwotoneEdit></span></span>
                            </label>
                        </div>

                        {
                            role == 'Admin' && <div className=''>
                                <label htmlFor='editBlog' style={{
                                    backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className="mt-4 border-0 btn"> <span className='flex items-center text-xl text-black normal-case gap-x-2'><span>Edit</span> <span><AiTwotoneEdit></AiTwotoneEdit></span></span>
                                </label>
                            </div>
                        }

                        {
                            props?.post?.role == 'Author' && <div className=''>
                                <label htmlFor='editBlog' style={{
                                    backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className="w-32 mt-4 border-0 btn"> <span className='flex items-center text-xl text-black normal-case gap-x-2'><span>Edit</span> <span><AiTwotoneEdit></AiTwotoneEdit></span></span>
                                </label>
                            </div>
                        }
                    </div>

                </div>
            </div>


            <div>
                <input type="checkbox" id="editBlog" className="modal-toggle" />
                <div className="modal">
                    <div style={{
                        background: '#247f9e'
                    }} className="w-11/12 max-w-5xl modal-box">
                        <div className='flex items-end justify-between modal-action gap-x-12'>
                            <div className='w-full'>
                                <div className="w-full form-control">
                                    <input onChange={(e) => setNewTitle(e.target.value)} type="text" placeholder={props?.post?.title + ' (Title)'} className="w-full bg-black input focus:outline-none focus:border-white" />

                                    <textarea onChange={(e) => setNewDescription(e.target.value)} type='text' placeholder={props?.post?.description} className="w-full h-24 pt-3 my-4 bg-black input input-lg focus:outline-none focus:border-white" />

                                </div>
                            </div>

                        </div>

                        {
                            (newTitle || newDescription) ? <div className='flex justify-end'>
                                <label onClick={handleUpdateBlog} style={{
                                    backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} htmlFor="editBlog" className="w-32 border-0 btn"> <span className='text-xl text-red-600 normal-case'>Update</span>
                                </label>
                            </div> : <div className='flex justify-end'>
                                <label style={{
                                    backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} htmlFor="editBlog" className="w-32 border-0 btn"> <span className='text-xl text-red-600 normal-case'>Close</span>
                                </label>
                            </div>
                        }

                    </div>
                </div>
            </div>

            {/* For commenting */}
            <div>
                <input type="checkbox" id="forComment" className="modal-toggle" />
                <div className="modal">
                    <div style={{
                        background: '#247f9e'
                    }} className="w-11/12 max-w-5xl modal-box">
                        <div className='flex items-end justify-between modal-action gap-x-12'>
                            <div className='w-full'>
                                <div className="w-full form-control">
                                    <textarea onChange={(e) => setUserComment(e.target.value)} type='text' placeholder='Leave a comment here.' className="w-full h-24 pt-3 my-4 bg-black input input-lg focus:outline-none focus:border-white" />
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-end gap-x-6'>

                            <label style={{
                                backgroundImage: "linear-gradient(45deg, green, white)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} htmlFor="forComment" className="w-32 border-0 btn"> <span className='text-xl text-black normal-case'>Cancel</span>
                            </label>

                            <label onClick={handleCommentButton} style={{
                                backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} htmlFor="forComment" className="w-32 border-0 btn"> <span className='text-xl text-red-600 normal-case'>Comment</span>
                            </label>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SinglePost;

export async function getServerSideProps(context) {
    const { singlePost } = context.query;
    const response = await fetch(`http://localhost:3000/api/${singlePost}`)
    const post = await response.json();
    return {
        props: { post }, // will be passed to the page component as props
    }
}