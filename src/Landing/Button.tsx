import React, {useRef} from "react"
import {StyledSVGButton, WhiteStripe} from "../GlobalStyles/StyledButton"

function Button(){
  const buttonText: React.MutableRefObject<SVGSVGElement | undefined> = useRef();
  let clickHandler = () => {
    if(buttonText.current) {
      buttonText.current.style.animation = "bounce 500ms linear";
      buttonText.current.addEventListener("animationend", function(){
        window.scrollTo(0, window.innerHeight);
        this.style.animation = "";
      });
    }
  }
  return(
    <StyledSVGButton onClick={clickHandler} id="work-button" style={{margin: "0 auto"}} width="180" height="70" viewBox="0 0 185 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.25" y="1.25" width="181.5" height="71.5" rx="5.75" fill="#4fba93" stroke="#415a64" strokeWidth="3"/>
      <WhiteStripe x="5" y="4.6" width="173.8" height="64.2" rx="4" stroke="#FFFFFF" strokeWidth="5"/>
      <svg ref={buttonText as React.MutableRefObject<SVGSVGElement>} width="180" height="70" viewBox="-20 -3 110 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.02148 13C0.611328 13 0.40625 12.7803 0.40625 12.3408V1.05566C0.40625 0.616211 0.611328 0.396484 1.02148 0.396484H3.57031C3.91016 0.396484 4.15332 0.630859 4.2998 1.09961L6.68164 8.80762C6.78711 9.1416 6.86035 9.41699 6.90137 9.63379C6.94238 9.84473 6.97754 10.0967 7.00684 10.3896H7.05957C7.08887 10.0967 7.12402 9.84473 7.16504 9.63379C7.20605 9.41699 7.2793 9.1416 7.38477 8.80762L9.7666 1.09961C9.91309 0.630859 10.1562 0.396484 10.4961 0.396484H13.0449C13.4551 0.396484 13.6602 0.616211 13.6602 1.05566V12.3408C13.6602 12.7803 13.4551 13 13.0449 13H11.709C11.2988 13 11.0938 12.7803 11.0938 12.3408V5.08105C11.0938 4.72949 11.1084 4.37793 11.1377 4.02637H11.0762L8.53613 12.2881C8.38965 12.7627 8.1377 13 7.78027 13H6.28613C5.92871 13 5.67676 12.7627 5.53027 12.2881L2.99023 4.02637H2.92871C2.95801 4.37793 2.97266 4.72949 2.97266 5.08105V12.3408C2.97266 12.7803 2.76758 13 2.35742 13H1.02148ZM15.6904 4.45703C15.5322 4 15.6289 3.77148 15.9805 3.77148H17.5537C17.8232 3.77148 17.999 3.9209 18.0811 4.21973L19.4082 9.13281C19.4727 9.36133 19.5283 9.65723 19.5752 10.0205C19.6279 10.3779 19.6543 10.6064 19.6543 10.7061H19.707C19.7773 10.3955 19.8271 10.1494 19.8564 9.96777C19.8916 9.78027 19.9824 9.41992 20.1289 8.88672L21.3857 4.21973C21.4678 3.9209 21.6436 3.77148 21.9131 3.77148H23.4863C23.832 3.77148 23.9287 4 23.7764 4.45703L20.8145 13.3691C20.4688 14.4121 20.0439 15.2266 19.54 15.8125C19.0361 16.3984 18.3359 16.6914 17.4395 16.6914C16.9473 16.6914 16.5078 16.6504 16.1211 16.5684C15.8984 16.5215 15.8135 16.3691 15.8662 16.1113L16.0596 15.1445C16.1123 14.8926 16.2617 14.8047 16.5078 14.8809C16.6895 14.9395 16.8594 14.9688 17.0176 14.9688C17.4922 14.9688 17.8525 14.7432 18.0986 14.292C18.3506 13.8408 18.5176 13.4541 18.5996 13.1318L18.626 13L15.6904 4.45703ZM30.5088 1.09961C30.3799 0.630859 30.5146 0.396484 30.9131 0.396484H32.5391C32.8145 0.396484 32.999 0.589844 33.0928 0.976562L34.7627 7.88477C34.8857 8.38867 34.9648 8.73438 35 8.92188C35.041 9.10352 35.0762 9.39941 35.1055 9.80957H35.1494C35.1787 9.39941 35.208 9.08887 35.2373 8.87793C35.2666 8.66699 35.3516 8.31836 35.4922 7.83203L37.4521 1.04688C37.5752 0.613281 37.8213 0.396484 38.1904 0.396484H39.8076C40.1768 0.396484 40.4229 0.613281 40.5459 1.04688L42.5059 7.83203C42.6465 8.31836 42.7314 8.66699 42.7607 8.87793C42.79 9.08887 42.8193 9.39941 42.8486 9.80957H42.8926C42.9219 9.39941 42.9541 9.10352 42.9893 8.92188C43.0303 8.73438 43.1123 8.38867 43.2354 7.88477L44.9053 0.976562C44.999 0.589844 45.1836 0.396484 45.459 0.396484H47.085C47.4834 0.396484 47.6182 0.630859 47.4893 1.09961L44.501 12.1475C44.3486 12.7158 44.0732 13 43.6748 13H42.1367C41.7969 13 41.5479 12.7188 41.3896 12.1562L39.2803 4.79102C39.1631 4.39258 39.0957 4.13477 39.0781 4.01758C39.0605 3.89453 39.0371 3.66895 39.0078 3.34082H38.9902C38.9609 3.66895 38.9375 3.89453 38.9199 4.01758C38.9023 4.13477 38.835 4.39258 38.7178 4.79102L36.6084 12.1562C36.4502 12.7188 36.2012 13 35.8613 13H34.3232C33.9248 13 33.6494 12.7158 33.4971 12.1475L30.5088 1.09961ZM48.3945 8.38574C48.3945 6.8916 48.7783 5.71973 49.5459 4.87012C50.3193 4.02051 51.4678 3.5957 52.9912 3.5957C54.5146 3.5957 55.6602 4.02051 56.4277 4.87012C57.2012 5.71973 57.5879 6.8916 57.5879 8.38574C57.5879 9.87988 57.2012 11.0518 56.4277 11.9014C55.6602 12.751 54.5146 13.1758 52.9912 13.1758C51.4678 13.1758 50.3193 12.751 49.5459 11.9014C48.7783 11.0518 48.3945 9.87988 48.3945 8.38574ZM50.9961 8.38574C50.9961 9.49902 51.166 10.29 51.5059 10.7588C51.8516 11.2217 52.3467 11.4531 52.9912 11.4531C53.6357 11.4531 54.1279 11.2217 54.4678 10.7588C54.8135 10.29 54.9863 9.49902 54.9863 8.38574C54.9863 7.27246 54.8135 6.48438 54.4678 6.02148C54.1279 5.55273 53.6357 5.31836 52.9912 5.31836C52.3467 5.31836 51.8516 5.55273 51.5059 6.02148C51.166 6.48438 50.9961 7.27246 50.9961 8.38574ZM60.0137 13C59.6621 13 59.4863 12.8242 59.4863 12.4727V4.29883C59.4863 3.94727 59.6621 3.77148 60.0137 3.77148H61.4023C61.7539 3.77148 61.9297 3.94727 61.9297 4.29883V5.01953H61.9648C62.1172 4.64453 62.3721 4.31348 62.7295 4.02637C63.0869 3.73926 63.5088 3.5957 63.9951 3.5957C64.3291 3.5957 64.6045 3.63672 64.8213 3.71875C65.0264 3.79492 65.1055 3.93555 65.0586 4.14062L64.8125 5.18652C64.7598 5.4209 64.6016 5.49121 64.3379 5.39746C64.1855 5.34473 64.0391 5.31836 63.8984 5.31836C63.3359 5.31836 62.8701 5.65527 62.501 6.3291C62.1318 7.00293 61.9473 7.98438 61.9473 9.27344V12.4727C61.9473 12.8242 61.7715 13 61.4199 13H60.0137ZM66.9219 13C66.5703 13 66.3945 12.8242 66.3945 12.4727V0.554688C66.3945 0.203125 66.5703 0.0273438 66.9219 0.0273438H68.3281C68.6797 0.0273438 68.8555 0.203125 68.8555 0.554688V7.01465C68.8555 7.24902 68.8438 7.4834 68.8203 7.71777H68.8555L71.6416 4.13184C71.8291 3.8916 72.0576 3.77148 72.3271 3.77148H73.7686C74.3076 3.77148 74.3984 3.98828 74.041 4.42188L71.3867 7.62988L74.4629 12.3496C74.7441 12.7832 74.6533 13 74.1904 13H72.6875C72.3945 13 72.1543 12.8477 71.9668 12.543L69.9717 9.33496L68.8555 10.6797V12.4727C68.8555 12.8242 68.6797 13 68.3281 13H66.9219Z" fill="#FFFFFF"/>
      </svg>
    </StyledSVGButton>
  )
}

export default Button
