import { useState, useEffect } from "react";


const DisplayPassword = ({ currentPassword }) => {
  const [previousPasswords, setPreviousPasswords] = useState([]);

  useEffect(() => {
    
    const savedPasswords = JSON.parse(localStorage.getItem("passwords")) || [];

    setPreviousPasswords(savedPasswords.slice(0, 5)); 

    
    if (savedPasswords.length >= 5) {
      savedPasswords.pop();
    }

    
    if (currentPassword) {
      localStorage.setItem(
        "passwords",
        JSON.stringify([currentPassword, ...savedPasswords])
      );
    }
  }, [currentPassword]);

  return (
    <div>
      <div className='text-2xl text-black p-2 font-bold'>
        Previous Passwords
      </div>
      <div className='text-lg text-black pl-2'>
        {previousPasswords.length === 0 ? (
          <div className='text-lg text-black pb-2 text-blue-700'>
            No previous passwords found.
          </div>
        ) : (
          <>
            <ul className="pb-2">
              {previousPasswords.map((password, index) => (
                <li key={index}>{password}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default DisplayPassword;
