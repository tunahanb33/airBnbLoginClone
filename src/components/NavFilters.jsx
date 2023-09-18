import navItems from '../assets/static/filterItems.json';
function NavFilters() {
    return ( 
        <div className="sm:my-6 mt-4 mb-6 border-b-2 md:border-b-0 border-gray-100 flex justify-between items-center">
            <div className="flex overflow-x-scroll xs:overflow-x-hidden sm:max-w-[calc(100%-3rem)] max-w-full whitespace-nowrap text-xs text-[rgb(113,113,113)]">
                {
                    navItems.map((item, index) => {
                        return (
                            <div key={index} className={`${item.title == 'Küçük Evler' ? 'border-b-2 pb-3 border-black font-medium text-black' : ''} sm:my-3 sm:py-1 mr-6 md:mr-8 cursor-pointer`}>
                                <div className="flex flex-col items-center space-y-2">
                                    <img className={`${item.title == 'Küçük Evler' ? '' : 'opacity-70'} w-6 h-6`} src={item.image} alt="" />
                                    <div className="whitespace-nowrap text-center">
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='sm:flex hidden items-center'>
                <button className='h-7 w-7 flex items-center justify-center border border-opacity-80 hover:scale-110 hover:shadow-lg transition-all duration-200 rounded-full'>
                    <div>
                        <svg style={{'stroke': 'currentcolor', 'strokeWidth': '5.33'}} className='w-3 h-3 fill-none block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path fill='none' d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
                    </div>
                </button>
                <div className='pl-4'>
                    <button className='py-[14px] border border-[#dddddd] rounded-[12px]'>
                        <span className='px-4 flex space-x-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className='w-[14px] h-[14px] fill-current' aria-hidden="true" role="presentation" focusable="false"><path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                            <span className='text-xs font-semibold'>Filtreler</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
     );
}

export default NavFilters;