import {IoMdMenu} from 'react-icons/io';
function LoginSide() {
    return ( 
        <div className="text-sm/[18px] font-semibold sm:flex hidden items-center space-x-1">
            <a className="hover:bg-gray-100 flex shrink-0 transition-all duration-200 rounded-full p-3" href="">
                <div>
                    Evinizi Airbnb'ye taşıyın
                </div>
            </a>
            <div>
                <button className="w-10 hover:bg-gray-100 transition-all duration-200 rounded-full h-10 flex items-center justify-center">
                    <div>
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false"><path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path></svg>
                    </div>
                </button>
            </div>
            <div>
                <button className="border hover:shadow-lg transition-all duration-300 border-[#dddddd] pl-3 p-[5px] rounded-[21px] flex items-center justify-center">
                    <div>
                        <IoMdMenu className='w-5 h-5 fill-current' />
                    </div>
                    <div className='ml-3 w-[30px] h-[30px] text-[#717171]'>
                        <svg className='w-full h-full fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path></svg>
                    </div>
                </button>
            </div>
        </div>
     );
}

export default LoginSide;