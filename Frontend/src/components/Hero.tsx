import pandaHero from "../assets/pandahero.svg";
import arrowHero from "../assets/arrowHero.svg";

const Hero: React.FC = () => {
  return (
    <main className="bg-themeDarkGreen text-pandaWhite p-4 flex flex-col items-center min-w-full">
      <h2 className="font-Darumadrop text-4xl">TAOTAO</h2>
      <img src={pandaHero} alt="pandaHero" />
      <h3 className="font-Darumadrop text-xl">
        Where every bite puts a smile on your face
      </h3>
      <img src={arrowHero} alt="arrowHero" />
    </main>
  );
};

export default Hero;
