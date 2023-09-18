import {BiSearchAlt2} from 'react-icons/bi';
function SearchArea() {
    return ( 
        <div className="sm:min-w-[348px] min-w-full sm:px-6">
            <div className="max-w-[100%] sm:flex hidden text-[rgb(34,34,34)] shadow-lg h-12 text-sm/[22px] font-semibold items-center border border-[#dddddd] rounded-[40px]">
                <button>
                    <div className='px-4 h-full min-w-[80px] md:max-w-min max-w-[95px] overflow-hidden text-ellipsis whitespace-nowrap'>
                        Herhangi bir yer
                    </div>
                </button>
                <span className="bg-[#dddddd] w-[1px] h-6 flex flex-grow-0 flex-shrink-0 basis-[1px]"></span>
                <button>
                    <div className='px-4 min-w-[80px] md:max-w-min max-w-[95px] overflow-hidden text-ellipsis whitespace-nowrap'>
                        Herhangi hafta
                    </div>
                </button>
                <span className="bg-[#dddddd] w-[1px] h-6 flex flex-grow-0 flex-shrink-0 basis-[1px]"></span>
                <button className='flex items-center'>
                    <div className='px-4 font-normal md:max-w-min max-w-[95px] text-[rgb(113,113,113)] min-w-[80px] overflow-hidden text-ellipsis whitespace-nowrap'>
                        Misafir Ekleyin
                    </div>
                    <div className="w-8 m-[7px] !ml-0 h-8 bg-[#ff385c] rounded-full flex items-center justify-center">
                        <BiSearchAlt2 className='h-4 w-4 fill-current text-white font-bold' />
                    </div>
                </button>
            </div>
            {/* mobile */}
            <div className='w-full sm:hidden flex pt-[14px]'>
                <div className='min-h-[56px] w-full flex items-center border shadow-lg rounded-full'>
                    <div className='pl-5 pr-4'>
                        <svg className='h-4 w-4 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"></path></svg>
                    </div>
                    <div className='w-full'>
                        <div className='text-sm/[20px] font-semibold w-full'>
                            <span>Herhangi bir yer</span>
                        </div>
                        <div className='text-xs/[16px] text-[#717171] flex'>
                            <div className='min-w-[50px]'>
                                <span>Herhangi hafta</span>
                            </div>
                            <div class="px-[5px]" aria-hidden="true">•</div>
                            <div className='min-w-[50px]'>
                                <span>Misafir Ekleyin</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* filter icon */}
                <div className='flex items-center justify-center'>
                    <button>
                        <div className='mx-[10px] border border-[#b0b0b0] h-10 w-10 flex items-center justify-center rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" className='w-4 h-4' style={{display: 'block', fill: 'none', stroke: 'currentcolor', strokeWidth: 4}}><path fill="none" d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"></path></svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
     );
}

export default SearchArea;