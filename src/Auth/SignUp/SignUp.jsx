import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
// import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';
import { userRegister } from '../../api/auth';
// import toast from "react-hot-toast";
import logo from '../../assets/logo/main_logo.png';
import Loading from '../../Components/Loading/Loading';

const SignUp = () => {
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [loading, setLoading] = useState(false);

	// from handle
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		// console.log(data);

		// password confirm validation
		if (data.password !== data.confirmPassword)
			return setError('confirm passwrod does not matched');
		userRegister(data, setError, Swal, setSuccess, setLoading, reset);
	};

	// password eye show hide
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open);
	};

	return (
		<div>
			<Fade>
				<Helmet>
					<title>UrbanUtopia | SignUp</title>
				</Helmet>
				<div className=''>
					<div className=''>
						<div className=' flex-col lg:flex-row-reverse'>
							<div className='xl:max-w-3xl lg:max-w-2xl md:max-w-xl max-w-sm flex-shrink-0 rounded-md shadow-md bg-white mx-auto '>
								<form
									onSubmit={handleSubmit(onSubmit)}
									className=' lg:px-28 md:px-28 px-[16px] space-y-5 py-16'
								>
									<div>
										<p>Welcome to</p>
										<Link to='/' className=''>
											<img src={logo} alt='' className='mt-3 w-[30%] -ml-2' />
										</Link>
									</div>
									<div className='form-control'>
										<input
											type='name'
											{...register('name', { required: true })}
											placeholder='Name*'
											className='input placeholder-black input-bordered h-16 rounded-none w-full border p-2 border-black text-black text-xl'
										/>
										{errors.name && (
											<p className='mt-2 text-red-600'>
												This field is required
											</p>
										)}
									</div>
									<div className='form-control'>
										<input
											type='text'
											{...register('phone', { required: true })}
											placeholder='Mobile Number*'
											className='input placeholder-black input-bordered h-16 rounded-none w-full border p-2 border-black text-black text-xl'
										/>
										{errors.mobile && (
											<p className='mt-2 text-red-600'>
												This field is required
											</p>
										)}
									</div>
									<div className='form-control'>
										<input
											type='email'
											{...register('email', { required: true })}
											placeholder='Email*'
											className='input placeholder-black input-bordered h-16 rounded-none w-full border p-2 border-black text-black text-xl'
										/>
										{errors.email && (
											<p className='mt-2 text-red-600'>
												This field is required
											</p>
										)}
									</div>
									<div className='form-control relative'>
										<input
											type={open ? 'text' : 'password'}
											{...register('password', {
												required: true,
												minLength: 4,
												// pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
											})}
											placeholder='Password'
											className='placeholder-black input h-16 rounded-none input-bordered w-full border p-2 border-black text-black text-xl placeholder-dots'
										/>
										{open ? (
											<div className='absolute right-5 top-5 cursor-pointer'>
												<Icon
													icon='mdi:eye'
													onClick={toggle}
													className='text-3xl'
												/>
											</div>
										) : (
											<div className='absolute right-5 top-5 cursor-pointer'>
												<Icon
													icon='mdi:eye-off'
													onClick={toggle}
													className='text-3xl'
												/>
											</div>
										)}
										{errors.password && (
											<p className='mt-2 text-red-600'>
												This field is required
											</p>
										)}
										{errors.password?.type === 'minLength' && (
											<p className='mt-2 text-red-600'>
												Minimum password Length 4 must
											</p>
										)}
										{/* {errors.password?.type === 'pattern' && (
											<div className='mt-2 text-red-600'>
												<ul>
													<li className='text-red-600 list-disc ml-5'>
														Must One uppercase letter.
													</li>
													<li className='text-red-600 list-disc ml-5'>
														One lowercase letter.
													</li>
													<li className='text-red-600 list-disc ml-5'>
														One special case letter.
													</li>
													<li className='text-red-600 list-disc ml-5'>
														One digit number.
													</li>
												</ul>
											</div>
										)} */}
									</div>
									<div className='form-control relative'>
										<input
											type={open ? 'text' : 'password'}
											{...register('confirmPassword')}
											placeholder='Confirm Password'
											className='placeholder-black input h-16 rounded-none input-bordered w-full border p-2 border-black text-black text-xl'
										/>
										{open ? (
											<div className='absolute right-5 top-5 cursor-pointer'>
												<Icon
													icon='mdi:eye'
													onClick={toggle}
													className='text-3xl'
												/>
											</div>
										) : (
											<div className='absolute right-5 top-5 cursor-pointer'>
												<Icon
													icon='mdi:eye-off'
													onClick={toggle}
													className='text-3xl'
												/>
											</div>
										)}
										<p className='text-red-600 text-md mt-2 flex items-center gap-1'>
											{error}
										</p>
										<p className='text-green-600 text-md mt-2 flex items-center gap-1'>
											{success}
										</p>
									</div>
									<div className='form-control mt-10'>
										<button
											disabled={loading}
											type='submit'
											className='btn bg-[#0C4E67] duration-300 w-full border p-2 text-white mt-3 normal-case text-[16px] h-16 rounded-none hover:bg-[#3B95B0]'
										>
											{loading ? <Loading /> : 'Sign Up'}
										</button>
									</div>
									<div className='text-center lg:px-20'>
										<p className='text-[17px]'>
											Already Member?{' '}
											<Link
												to='/login'
												className=' text-[#1877F2] hover:translate-x-2 duration-300 inline-block'
											>
												Log in Now
											</Link>
										</p>
										<div className='divider w-10/12 mx-auto text-black pt-8'>
											Or
										</div>
									</div>
									{/* <div className="flex flex-wrap gap-5 justify-between  my-8">
                    <Link className="btn bg-transparent hover:bg-[#E5E6E6] duration-300 rounded-none w-full lg:w-auto border border-black">
                      <div className="flex items-center justify-center gap-2 p-2">
                        <Icon
                          icon="entypo-social:google"
                          className="text-white bg-red-600 rounded-full p-2 text-3xl"
                        />
                        <span className="normal-case">Sing Up with Google</span>
                      </div>
                    </Link>
                    <Link className="btn bg-transparent hover:bg-[#E5E6E6] duration-300 rounded-none w-full lg:w-auto border border-black">
                      <div className="flex items-center justify-center gap-2 p-2">
                        <Icon
                          icon="ic:baseline-facebook"
                          className="text-3xl text-[#1877F2]"
                        />
                        <span className="normal-case">
                          Sing Up with Facebook
                        </span>
                      </div>
                    </Link>
                  </div> */}
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <DownloadMobile></DownloadMobile> */}
			</Fade>
		</div>
	);
};

export default SignUp;
