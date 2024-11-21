import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useNews from '../../hooks/useNews';
import Card from '../../components/Card.jsx'

const Category = () => {
   const [news] = useNews();
   
   return (
      <div className='py-16'>
         <Tabs>
            <TabList className="flex items-center justify-center space-x-8 pb-16">
               <Tab>
                  <div className="text-center border-2 border-white p-2 hover:border-[#8150fe] duration-200 cursor-pointer">
                     <img src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="w-16 sm:w-20 rounded-full h-16 sm:h-20 object-cover" />
                     <h3 className="font-semibold pt-3 ">Business</h3>
                     <p className="text-[14px] text-gray-800 font-light leading-3">Articles</p>
                  </div>
               </Tab>
               <Tab>
                  <div className="text-center border-2 border-white p-2 hover:border-[#8150fe] duration-200 cursor-pointer">
                     <img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="w-16 sm:w-20 rounded-full h-16 sm:h-20 object-cover" />
                     <h3 className="font-semibold pt-3 ">Technology</h3>
                     <p className="text-[14px] text-gray-800 font-light leading-3">Articles</p>
                  </div>
               </Tab>
               <Tab>
                  <div className="text-center border-2 border-white p-2 hover:border-[#8150fe] duration-200 cursor-pointer">
                     <img src="https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="w-16 sm:w-20 rounded-full h-16 sm:h-20 object-cover" />
                     <h3 className="font-semibold pt-3 ">Sports</h3>
                     <p className="text-[14px] text-gray-800 font-light leading-3">Articles</p>
                  </div>
               </Tab>
               <Tab>
                  <div className="text-center border-2 border-white p-2 hover:border-[#8150fe] duration-200 cursor-pointer">
                     <img src="https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-16 sm:w-20 rounded-full h-16 sm:h-20 object-cover" />
                     <h3 className="font-semibold pt-3 ">Politics</h3>
                     <p className="text-[14px] text-gray-800 font-light leading-3">Articles</p>
                  </div>
               </Tab>
               <Tab>
                  <div className="text-center border-2 border-white p-2 hover:border-[#8150fe] duration-200 cursor-pointer">
                     <img src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="w-16 sm:w-20 rounded-full h-16 sm:h-20 object-cover" />
                     <h3 className="font-semibold pt-3 ">Health</h3>
                     <p className="text-[14px] text-gray-800 font-light leading-3">Articles</p>
                  </div>
               </Tab>
            </TabList>

            <TabPanel>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  {
                     news.filter(item => item.category === 'business').map((item, i) => <Card key={i} item={item}></Card>)
                  }                  
               </div>
            </TabPanel>
            <TabPanel>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  {
                     news.filter(item => item.category === 'technology').map((item, i) => <Card key={i} item={item}></Card>)
                  }                  
               </div>
            </TabPanel>
            <TabPanel>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  {
                     news.filter(item => item.category === 'sports').map((item, i) => <Card key={i} item={item}></Card>)
                  }                  
               </div>
            </TabPanel>
            <TabPanel>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  {
                     news.filter(item => item.category === 'politics').map((item, i) => <Card key={i} item={item}></Card>)
                  }                  
               </div>
            </TabPanel>
            <TabPanel>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  {
                     news.filter(item => item.category === 'health').map((item, i) => <Card key={i} item={item}></Card>)
                  }                  
               </div>
            </TabPanel>
            
         </Tabs>
      </div>
   );
};

export default Category;