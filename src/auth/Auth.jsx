import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Auth = () => {
   const [signUp, setSignUp] = useState(false);
   const navigate = useNavigate();
   const axiosPublic = useAxiosPublic();

   const { user, updateUserProfile, signInWithGoogle, signIn, createUser, setUser } = useAuth();

   const apiKey = import.meta.env.VITE_ImgBB_api_key;
   const imageUpload = `https://api.imgbb.com/1/upload?key=${apiKey}`


   const handleGoogleLogin = () => {
      signInWithGoogle()
         .then(result => {
            console.log(result);
            const postedUser = {
               name: result.user.displayName,
               photo: result.user.photoURL,
               email: result.user.email
            }
            axiosPublic.post('/users', postedUser)
               .then(res => {
                  console.log(res.data);
                  if (res.data.insertedId) {
                     toast.success('Sing Up Successful!')
                     navigate('/')
                  }
               })


         })
         .catch(error => {
            console.log(error);
         })

   }

   //register

   const handleRegister = async e => {
      e.preventDefault();
      const form = e.target;

      const currentPhoto = form.photo.files[0];
      console.log(currentPhoto);
      if (!currentPhoto) {
         toast.error('Please upload a photo.')
         return
      }

      const formData = new FormData();
      formData.append("image", currentPhoto);

      try {
         //
         const res = await axiosPublic.post(imageUpload, formData, {
            headers: {
               "Content-Type": "multipart/form-data",
            }
         })

         console.log(res.data);

         const photo = res.data.data.display_url;
         if (res.data.success) {
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            try {
               await createUser(email, password)
               await updateUserProfile(name, photo)
               setUser({ ...user, photoURL: photo, displayName: name })

               //user info save to the database.
               const postedUser = {
                  name,
                  photo,
                  email,
               }
               await axiosPublic.post('/users', postedUser)
                  .then(res => {
                     console.log(res.data);
                     if (res.data.insertedId) {
                        toast.success('Sing Up Successful!')
                        navigate('/')
                     }
                  })

            } catch (error) {
               toast.error(error.message)

            }

         }
      } catch (error) {
         console.log(error);

      }

   }

   if (user) {
      return <Navigate to='/'></Navigate>
   }

   const handleLogin = async (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      try {
         await signIn(email, password)
         toast.success('Sing In Successful!')
         navigate('/')
      } catch (error) {
         toast.error(error.message)
         console.log(error);

      }


   }

   return (
      <div className="min-h-[calc(100vh-337px)] flex items-center justify-center py-4">
         <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border bg-white">
            <div className={`flex select-none gap-2 border-b p-2.5 *:flex-1 *:rounded-md *:border *:p-2 *:text-center *:uppercase *:shadow-inner *:outline-none  ${signUp ? 'last-of-type:*:bg-zinc-600 last-of-type:*:text-white' : 'first-of-type:*:bg-zinc-600 first-of-type:*:text-white'}`}>
               <button onClick={() => setSignUp(false)}>signin</button>
               <button onClick={() => setSignUp(true)}>signup</button>
            </div>

            <div className="w-full flex-col items-center overflow-hidden p-4 sm:p-8">
               {/* sign up form  */}
               <form onSubmit={handleRegister} className={`${signUp ? 'h-full duration-300' : 'invisible h-0 opacity-0'} space-y-3 sm:space-y-5`}>
                  <h1 className="mb-6 uppercase backdrop-blur-sm sm:text-2xl">Sign Up</h1>
                  <div className="space-y-4">
                     <input type="text" placeholder="Name" name="name" className="block w-full rounded-md border p-2.5 outline-none focus:ring-1 ring-zinc-700" required/>
                     <input type="file" placeholder="photo URL" name="photo" className="block w-full rounded-md border p-2.5 outline-none focus:ring-1 ring-zinc-700" />
                     <input type="email" placeholder="Email" name="email" className="block w-full rounded-md border p-2.5 outline-none  focus:ring-1 ring-zinc-700" required/>
                     <input type="password" placeholder="Password" name="password" className="block w-full rounded-md border p-2.5 outline-none  focus:ring-1 ring-zinc-700" required/>
                  </div>
                  {/* button type will be submit for handling form submission*/}
                  <input type="submit" value="SIGN UP" className="mx-auto block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 hover:bg-zinc-400/10" />
                  <p className="text-center">Already have an account?
                     <button type="button" onClick={() => setSignUp(!signUp)} className="font-semibold underline">
                        Signin
                     </button>
                  </p>
               </form>



               {/* signin form */}
               <form onSubmit={handleLogin} className={`${signUp ? 'h-0 opacity-0' : 'h-full duration-300'} space-y-3 sm:space-y-5`}>
                  <h1 className="mb-3 uppercase sm:mb-5 sm:text-2xl">Sign In</h1>
                  <input type="email" placeholder="Email" name="email" className="block w-full rounded-md border p-2.5 outline-none focus:ring-1 ring-zinc-700" />
                  <input type="password" placeholder="Password" name="password" className="block w-full rounded-md border p-2.5 outline-none focus:ring-1 ring-zinc-700" required/>
                  <p className="text-end text-sm text-zinc-600">
                     <a href="#" className="hover:underline">forget password?</a>
                  </p>
                  {/* button type will be submit for handling form submission*/}
                  <input type="submit" value="SIGN IN" className="mx-auto block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 hover:bg-zinc-400/10" required/>
                  <p className="text-center">Don&apos;t have an account?
                     <button onClick={() => setSignUp(!signUp)} type="button" className="font-semibold underline">
                        Signup
                     </button>
                  </p>
               </form>

               <div className="mt-3 space-y-3 sm:space-y-5">
                  <hr className="border-zinc-700" />
                  <button onClick={handleGoogleLogin} className="mx-auto mb-4 mt-8 block rounded-md border px-5 py-2 shadow-lg duration-200 hover:bg-zinc-400/10">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="mr-2 inline-block h-5 w-5 fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
                     Continue with Google
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Auth;