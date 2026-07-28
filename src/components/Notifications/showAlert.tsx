import { useEffect } from "react";
import Swal, { SweetAlertIcon } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface ShowAlertProps {
  icon: SweetAlertIcon;
  title: string;
  message: string;
  confirmButtonColor?: string;
}

const ShowAlert = ({ icon, title, message, confirmButtonColor = "#0057D9" }: ShowAlertProps) => {
  useEffect(() => {
    MySwal.fire({
      icon,
      title,
      text: message,
      confirmButtonColor,
    });
  }, []);

  return null;
};

export default ShowAlert;