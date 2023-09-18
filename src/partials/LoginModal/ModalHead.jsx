function ModalHead() {
    return ( 
        <div className="sm:min-h-[64px] min-h-[48px] px-6 border-b border-[#ebebeb] flex items-center">
            <div>
                <button>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" className="w-4 h-4 stroke-current fill-none" focusable="false" style={{'strokeWidth': 3}}><path d="m6 6 20 20M26 6 6 26"></path></svg>
                    </div>
                </button>
            </div>
            <div className="w-full text-center font-bold tracking-wide overflow-hidden text-ellipsis">
                <h1>Oturum açın veya kaydolun</h1>
            </div>
      </div>
     );
}

export default ModalHead;