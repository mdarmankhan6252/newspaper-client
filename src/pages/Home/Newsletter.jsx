
const Newsletter = () => {
   return (
      <section className="w-full rounded-xl p-[20px] py-24">
         <h1 className="capitalize text-[1.5rem] sm:text-[2rem] font-[600] text-center primary">Subscribe to our newsletter</h1>
         <div className="relative mt-6 w-full sm:w-[70%] mx-auto">
            <input placeholder="Email Address"
               className="py-4 pl-6 pr-[130px] border rounded-full outline-none focus:ring-0 border-[#8150fe] w-full" />
            <button
               className="py-3 px-6 absolute top-[50%] translate-y-[-50%] transform right-1.5 hover:bg-[#8150fe] bg-[#8150fe] text-white rounded-full">Subscribe
            </button>
         </div>
      </section>
   );
};

export default Newsletter;