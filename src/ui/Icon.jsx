const Icon = ({ icon: Icon, bgColor = "bg-gray-400", fn }) => {
  return (
    <div
      className={`w-max p-2 rounded-md text-xl ${bgColor} cursor-pointer`}
      onClick={fn}
    >
      <Icon />
    </div>
  );
};

export default Icon;
