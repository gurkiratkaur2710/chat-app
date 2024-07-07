import { signInWithPopup } from "firebase/auth";
import { auth,provider} from "../firebase.js"
import Cookies from "universal-cookie";

const cookies= new Cookies()

export const Auth = (props)=>{
  const {setisAuth} = props;


  const signinwithgoogle = async()=>{
    try{
  const result = await signInWithPopup(auth,provider);
  cookies.set("auth-token",result.user.refreshToken)
  setisAuth(true)
    }
    catch(err){
        console.log(err);
    }
  // console.log(result);


  }
  return <div className="auth">
    <p>
      sign in with google to continue
    </p>
    <button onClick={signinwithgoogle}>sign in with google</button>
  </div>
}

export default Auth;
