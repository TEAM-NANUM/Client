import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';

const RedirectGuestLogin = ({PROXY}) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>performGeustLogin(), [])

    const performGeustLogin = () => {
        axios
          .post(`${PROXY}/api/login/guest`, {
            invite_code: searchParams.get("code"),
          })
          .then((res) => {
            localStorage.setItem("access_token", res.data.token);
            window.location.replace("/main");
          })
          .catch((err) => {
            window.location.replace("/main");
          });
    };
};

export default RedirectGuestLogin;