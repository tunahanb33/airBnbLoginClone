import {AiFillStar} from 'react-icons/ai';
import bodyItems from '../assets/static/bodyItems.json';
function HeroBody() {
    return ( 
        <div>
            <div className="grid 3xl:grid-cols-6 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-7 mt-6">
                {/* item1 */}
                {
                    bodyItems.map((src, index) => {
                        return (
                            <div key={index}>
                                {/* img */}
                                <div className="aspect-[20/19]">
                                    <img className="object-cover h-full w-full rounded-2xl" src={src} alt="" />
                                </div>
                                {/* infos */}
                                <div className="text-[15px]/[19px] mt-2">
                                    <div className="flex justify-between">
                                        <h4 className='font-medium'>Sapanca, Türkiye</h4>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <span>5,0</span>
                                        </div>
                                    </div>
                                    <div className='text-[rgb(113,113,113)]'>
                                        <div>
                                            <span>115 kilometre uzakta</span>
                                        </div>
                                        <div>
                                            <span>24 - 29 Eyl</span>
                                        </div>
                                        <div className='text-black mt-2'>
                                            <span className='font-medium'>3.694₺ <span className='font-normal'>gece</span></span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}

export default HeroBody;