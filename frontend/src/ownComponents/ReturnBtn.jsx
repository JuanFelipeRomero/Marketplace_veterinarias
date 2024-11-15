import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export function ReturnBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Link onClick={handleClick} className="self-center mb-4 ml-4 mt-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="20"
        viewBox="0 0 15 20"
        fill="none"
      >
        <path
          d="M14.9732 18.9994V0.999426C14.9727 0.817184 14.9224 0.63855 14.8279 0.48275C14.7333 0.32695 14.5981 0.199884 14.4367 0.115231C14.2753 0.0305767 14.0939 -0.00845909 13.912 0.00232315C13.73 0.0131054 13.5545 0.0732994 13.4042 0.176426L0.40425 9.17643C-0.13475 9.54943 -0.13475 10.4474 0.40425 10.8214L13.4042 19.8214C13.5542 19.9256 13.7298 19.9867 13.912 19.9981C14.0943 20.0094 14.2761 19.9706 14.4379 19.8859C14.5996 19.8012 14.735 19.6738 14.8294 19.5175C14.9238 19.3612 14.9735 19.182 14.9732 18.9994ZM2.73025 9.99943L12.9732 2.90743V17.0914L2.73025 9.99943Z"
          fill="#718096"
        />
      </svg>
    </Link>
  );
}
