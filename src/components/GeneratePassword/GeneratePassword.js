import { useState } from "react";
import secureRandomPassword from "secure-random-password";
import clipboardCopy from "clipboard-copy";
import DisplayPassword from "../DisplayPassword/DisplayPassword";

const GeneratePassword = () => {
  const [password, setPassword] = useState("");
  const [incNumbers, setIncludeNumbers] = useState(true);
  const [incAlphabets, setIncludeAlphabets] = useState(true);
  const [incSpecialChars, setIncludeSpecialChars] = useState(true);
  const [copiedMessage, setCopiedMessage] = useState(""); 

  const generateNewPassword = () => {
    
    const config = [
      ...(incNumbers ? [secureRandomPassword.digits] : []),
      ...(incAlphabets
        ? [secureRandomPassword.upper, secureRandomPassword.lower]
        : []),
      ...(incSpecialChars ? [secureRandomPassword.symbols] : []),
    ];

    const options = {
      characters: config,
    };

    const newPassword = secureRandomPassword.randomPassword(options); 
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    clipboardCopy(password); 
    setCopiedMessage("Password copied to clipboard!");
    setTimeout(() => setCopiedMessage(""), 1000); 
  };

  return (
    <div className='flex justify-center items-center h-97vh'>
      <div className='bg-slate-200 rounded-lg mb-20 text-center'>
        <div className='mt-8 text-5xl p-5 font-bold'>
          Generate Random Password
        </div>
        <div className='flex mt-5 justify-center'>
          <input
            type='text'
            className='input input-bordered w-full max-w-xs text-2xl pl-[5rem]'
            value={password}
            disabled
            style={password ? { opacity: "1" } : { opacity: "0.6" }}
          />

          <button
            onClick={copyToClipboard}
            disabled={!password}
            className='btn ml-2 btn-info text-base'
          >
            Copy to Clipboard
          </button>
        </div>

        <div className='flex'>
          {copiedMessage ? (
            <div className='text-xl text-emerald-700 pl-[15rem] mt-4'>
              {copiedMessage}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className='flex-1 mb-4 pt-5'>
          <div className='flex ml-[15rem]'>
            <label>
              <input
                type='checkbox'
                className='checkbox checkbox-xs'
                checked={incNumbers}
                onChange={() => setIncludeNumbers(!incNumbers)}
              />
              <span className='text-lg text-black pl-2'>Include Numbers</span>
            </label>
          </div>
          <div className='flex ml-[15rem]'>
            <label>
              <input
                type='checkbox'
                className='checkbox checkbox-xs'
                checked={incAlphabets}
                onChange={() => setIncludeAlphabets(!incAlphabets)}
              />
              <span className='text-lg text-black pl-2'>Include Alphabets</span>
            </label>
          </div>
          <div className='flex ml-[15rem]'>
            <label>
              <input
                type='checkbox'
                className='checkbox checkbox-xs'
                checked={incSpecialChars}
                onChange={() => setIncludeSpecialChars(!incSpecialChars)}
              />
              <span className='text-lg text-black pl-2'>
                Include Special Characters
              </span>
            </label>
          </div>
        </div>

        {!incAlphabets && !incNumbers && !incSpecialChars && (
          <div className='text-lg text-center text-red-500 mt-2'>
            Please select at least one option to generate a password.
          </div>
        )}
        <button
          onClick={generateNewPassword}
          disabled={!incAlphabets && !incNumbers && !incSpecialChars}
          className='btn btn-info m-2 text-base'
        >
          Generate Password
        </button>
        <div>
          <DisplayPassword currentPassword={password} />
        </div>
      </div>
    </div>
  );
}

export default GeneratePassword;
