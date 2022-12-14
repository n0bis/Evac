import env from "react-dotenv";
// `http://${env.REACT_APP_BACKEND_DNS}/api`
const constansts = {
    serverBaseURL: `${window.location.origin}/api`
}

export default constansts;
