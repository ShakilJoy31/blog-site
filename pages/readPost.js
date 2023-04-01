import FoodProductStyle from '../Components/FoodProductStyle.module.css';

const readPost = () => {
    return (
        <div>
            <div className='min-h-screen'>
                <h1 className='flex justify-center pt-6 text-5xl'>All Posts</h1>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                        <div className='p-4 border-0'>
                            <div style={{
                                backgroundColor: '#19A7CE',
                                borderRadius: '5px',
                                width: '600px'
                            }}>
                                <div className={`${FoodProductStyle.reservationCardForIndv}`}>
                                    <div>
                                        <div className='flex items-center justify-between w-full p-2'>
                                            <div className='flex items-center gap-x-4'>
                                                <img className='rounded-sm w-36 h-28' src='https://i.ibb.co/KVBdb3M/3692584.jpg' alt="" />
                                            </div>

                                            {/* <label htmlFor='reservationConfirmation' onClick={() => setDeleteId(reservation?._id)} className='text-white cursor-pointer hover:text-red-400'><AiFillDelete size={35}></AiFillDelete></label> */}


                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {
                deleteId && <div>
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

                                <label onClick={handleDeleteReservation} htmlFor="reservationConfirmation" style={{
                                    backgroundImage: "linear-gradient(45deg ,green ,white)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} btn-sm border-0 text-xl text-black mt-4`}>Sure
                                </label>
                            </div>

                        </label>
                    </label>
                </div>
            } */}
                {/* <ToastContainer></ToastContainer> */}
            </div>
        </div>
    );
};

export default readPost;





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