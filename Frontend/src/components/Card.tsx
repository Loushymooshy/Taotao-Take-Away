const Card: React.FC = () => {
  return (
    <div className="bg-pandaWhite rounded-lg shadow-md p-4 flex flex-col items-start">
      <div className="w-full h-32 bg-gray-200 rounded-md flex justify-center items-center ">
        <span className="text-gray-400">Image</span>
      </div>
      <h3 className="text-lg font-semibold mt-4">Sushi</h3>
      <p className="text-gray-500 text-sm mt-2">
        Rice, salmon, avocado, and seaweed sheets.
      </p>
      <div className="flex items-center justify-between w-full mt-2">
        <span className="text-lg font-bold">$12.99</span>
        <button className="bg-themeDarkGreen text-white rounded-full px-5 py-1 hover:bg-themeGreen">
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
