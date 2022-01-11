import Logo from './Giffy.png'
import { useLocation } from "wouter";
import './Logo.css'

export default function Icono() {
  const [path, pushLocation] = useLocation();

  const handleIcon = (evt) => {
    //evitar que refresque la pagina
    evt.preventDefault();
    // cambiar la ruta del navegador
    pushLocation("/");
  };

  return <img id='logo' src={Logo} onClick={handleIcon} alt='Logo Giffy'/>;
}