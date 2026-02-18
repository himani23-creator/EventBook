import React, { useState } from 'react';
import AuthModal from './AuthModal';


export default function AuthButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  
  return (
    <>
    
      <button
      onClick={() => setIsModalOpen(true)}
      className="logging"

    >
      Login / Signup
    </button>
   
      
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
