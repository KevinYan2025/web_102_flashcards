import { useEffect, useState } from "react";
const Card = (props) => {
    const [isFlip,setIsFlip] = useState(false);
    useEffect(()=>{
        setIsFlip(false)
    },[props.answer])
    const handleFlip = () => {
        setIsFlip(!isFlip)
    }
    return(
        <>
            <div className={`card ${isFlip ? 'flip':''}`} onClick={handleFlip}>

                { !isFlip  && <div className="front">
                    <p >{props.question}</p>
                </div>
                }

                {  isFlip && <div className="back">
                    <p>{props.answer}</p>
                </div>
                }

                
            </div>
        </>
    )
}
export default Card;