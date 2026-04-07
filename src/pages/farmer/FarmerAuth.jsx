import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tractor } from 'lucide-react';

export default function FarmerAuth() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Mobile Input, 2: OTP
  const [isRegister, setIsRegister] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-4 sm:py-8 lg:py-12">
      <div className="relative w-full h-full sm:h-[800px] sm:w-[375px] bg-white sm:rounded-[2rem] sm:shadow-2xl overflow-hidden flex flex-col border-[8px] border-gray-900">
        
        <div className="flex-1 px-6 pt-12 flex flex-col items-center overflow-y-auto no-scrollbar">
          {/* Logo Section */}
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
            <Tractor className="text-primary-600 w-10 h-10" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Kisan Market</h1>
          <p className="text-gray-500 mb-6 text-center text-sm">Empowering every farmer.</p>
          
          {/* Main Auth Container */}
          <div className="w-full space-y-5">
            {step === 1 ? (
              <>
                {/* Toggle Login/Register */}
                <div className="flex bg-gray-100 p-1 rounded-lg mb-4">
                  <button 
                    onClick={() => setIsRegister(false)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${!isRegister ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => setIsRegister(true)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${isRegister ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
                  >
                    Register
                  </button>
                </div>

                {isRegister && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Ramesh Singh" 
                      className="input-field mb-3"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <div className="flex gap-2">
                    <div className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-3 flex items-center justify-center text-gray-600 font-medium shrink-0">
                      +91
                    </div>
                    <input 
                      type="tel" 
                      placeholder="98765 43210" 
                      className="input-field flex-1"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="btn-primary w-full shadow-lg shadow-primary-500/30"
                >
                  {isRegister ? 'Send OTP for Registration' : 'Send OTP'}
                </button>
              </>
            ) : (
              <>
                <h2 className="text-lg font-bold text-center mb-1">Verify Mobile Number</h2>
                <p className="text-sm text-gray-500 text-center mb-6">Enter the OTP sent to your number</p>
                <div>
                  <div className="flex gap-2 justify-center mb-6">
                    {[1,2,3,4].map(n => (
                      <input 
                        key={n}
                        type="text" 
                        maxLength="1"
                        className="w-12 h-12 text-center text-xl font-bold rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/farmer/home')}
                  className="btn-primary w-full shadow-lg shadow-primary-500/30 mt-4"
                >
                  Verify & Proceed
                </button>
                <div className="text-center mt-4">
                  <button 
                    onClick={() => setStep(1)}
                    className="text-sm text-gray-500 hover:text-gray-900 underline"
                  >
                    Change Mobile Number
                  </button>
                </div>
              </>
            )}
          </div>
          
          {/* Language / Role Toggle */}
          <div className="mt-auto pt-8 pb-6 w-full text-center space-y-4">
            <div className="text-sm text-gray-500">Are you a Shop Keeper?</div>
            <button 
              onClick={() => navigate('/seller/auth')}
              className="text-primary-600 font-semibold underline underline-offset-4"
            >
              Go to Seller Portal
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
