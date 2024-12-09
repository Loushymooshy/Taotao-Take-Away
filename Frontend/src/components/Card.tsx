interface CardProps {
  tall?: boolean;
  title: string;
  description: string;
  price: number; 
}

const Card: React.FC<CardProps> = ({ tall, title, description, price = 0 }) => {
  return (
    <div className={`bg-pandaWhite rounded-lg shadow-md p-4 flex flex-col items-start min-w-[350px]`}>
      <div className={`w-full bg-gray-200 rounded-md flex justify-center items-center ${tall ? 'h-56' : 'h-32'}`}>
        <span className="text-gray-400">Image</span>
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-500 text-sm mt-2">
        {description}
      </p>
      <div className="flex items-center justify-between w-full mt-2">
        <span className="text-lg font-bold">${price.toFixed(2)}</span>
        <button className="bg-themeGreen text-white rounded-full px-5 py-1 hover:bg-themeDarkGreen">
          +
        </button>
      </div>
    </div>
  );
};

export default Card;