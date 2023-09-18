function LoginForm({ phase, formData, handleForm, handleSubmit }) {
    return ( 
        <form onSubmit={handleSubmit}>
            <div className="relative w-full flex items-center justify-center text-black ">
                <input type={`${phase == 0 ? 'email' : 'password'}`} name={`${phase == 0 ? 'email' : 'password'}`} value={`${phase == 0 ? formData.email : formData.password}`} onChange={handleForm} id="nmb" placeholder={phase == 0 ? "E-posta" : 'Şifre'} className="min-h-[56px] focus:placeholder:opacity-100 placeholder:opacity-0 outline-none peer border-[#bbbbbb] pt-2 rounded-bl-md rounded-br-md px-3 border w-full" />
                <label htmlFor="nmb" className="whitespace-nowrap text-[#717171] peer-focus:top-1 peer-focus:text-xs peer-placeholder-shown:top-4 focus:text-red-500 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base/[20px] transition-all duration-200 absolute top-1 left-3 text-xs  w-full overflow-hidden text-ellipsis">{phase == 0 ? 'E-posta' : 'Şifre'}</label>
            </div>
            <div className="mt-4">
                <button className=" w-full bg-[#e61e4d] py-[13px] px-6 rounded-[8px] text-white font-bold hover:opacity-90 transition-all duration-200">{phase == 0 ? 'Devam Et' : 'Giriş Yap'}</button>
            </div>
        </form>
     );
}

export default LoginForm;