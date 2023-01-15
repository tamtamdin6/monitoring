import { useState } from "react";


const Toast = ({success}) => {

    const [isShown, setIsShown] = useState(true);
    // setTimeout(()=>{
    //     setIsShown(!isShown);
    // },3000)

    return (
        <>
            <div className={isShown ? 'alert alert-success shadow-lg my-4 w-80 fixed bottom-5 right-0 z-10' : 'hide'}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{success}</span>
                </div>
            </div>
        </>
    );
}

export default Toast;
