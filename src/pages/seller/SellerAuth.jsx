import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from 'lucide-react';

export default function SellerAuth() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Mobile/Email Input, 2: OTP
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <Store className="text-blue-600 w-8 h-8" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Seller Portal</h2>
        <p className="text-center text-gray-500 mb-8 text-sm">Manage your shop, products, and prices.</p>

        <div className="space-y-5">
           {step === 1 ? (
             <>
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
                 <>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Shop Name</label>
                     <input type="text" placeholder="e.g. Kisan Kendra" className="input-field" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name</label>
                     <input type="text" placeholder="e.g. Suresh Kumar" className="input-field" />
                   </div>
                 </>
               )}

               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                 <div className="flex gap-2">
                   <div className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-3 flex items-center justify-center text-gray-600 font-medium shrink-0">
                     +91
                   </div>
                   <input type="tel" placeholder="Enter your registered number" className="input-field flex-1" />
                 </div>
               </div>
               
               <button 
                 onClick={() => setStep(2)}
                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/30 mt-4"
               >
                 {isRegister ? 'Send OTP for Registration' : 'Send OTP to Login'}
               </button>
             </>
           ) : (
             <>
                <h3 className="text-lg font-bold text-center mb-1">Verify OTP</h3>
                <p className="text-sm text-gray-500 text-center mb-6">Enter the OTP sent to your number</p>
                <div className="flex gap-2 justify-center mb-6">
                  {[1,2,3,4,5,6].map(n => (
                    <input 
                      key={n}
                      type="text" 
                      maxLength="1"
                      className="w-10 h-12 text-center text-xl font-bold rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  ))}
                </div>
                <button 
                  onClick={() => navigate('/seller/dashboard')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/30"
                >
                  Verify & Access Dashboard
                </button>
                <div className="text-center mt-4">
                  <button onClick={() => setStep(1)} className="text-sm text-blue-600 hover:underline">
                    Back to Mobile Number
                  </button>
                </div>
             </>
           )}
        </div>

        {step === 1 && (
          <div className="mt-8 text-center pt-6 border-t border-gray-100">
            <button 
              onClick={() => navigate('/farmer/auth')}
              className="text-sm text-gray-500 hover:text-gray-900 underline"
            >
              Back to Farmer Portal
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
