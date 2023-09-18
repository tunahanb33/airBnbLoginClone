function PriceFilter() {
    return ( 
        <div className="flex justify-center text-[15px]/[19px]">
            <div className="3xl:w-[32%] 2xl:w-[60%] xl:w-1/2 w-full p-4 flex justify-between items-center border border-[#dddddd] rounded-[12px]">
                <div className="sm:flex">
                    <div className="sm:pr-3">
                        <span className="font-medium">Toplam fiyatı göster</span>
                    </div>
                    <div className="sm:border-l sm:pl-3 text-[#717171] tracking-wide border-[#dddddd]">
                        <div>
                            <span>Tüm ücretler dâhil, vergiler hariç</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-12 h-8 cursor-pointer bg-[#b0b0b0] rounded-[32px] relative flex items-center">
                        <div className="w-8 h-8 border-2 border-[#b0b0b0] bg-white rounded-full absolute"></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default PriceFilter;