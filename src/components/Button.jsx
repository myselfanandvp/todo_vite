export const Button = ({
  type = 'button',
  onClick = () => {},
  color = 'primary',
  title = 'button',
}) => {
  const buttonVariant = {
    primary:
      "bg-linear-to-t from-gray-700 to-violet-800",
    add:
      "bg-linear-to-br from-black to-green-600",
    edit:
      "bg-linear-to-br from-black to-yellow-600",
    delete:
      "bg-linear-to-br from-red-600 to-black",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${buttonVariant[color] || buttonVariant.primary}
        text-white
        px-4 py-2
        rounded-md
        font-semibold
        shadow-[0_6px_0_rgba(0,0,0,0.25)]
        hover:shadow-[0_4px_0_rgba(0,0,0,0.25)]
        active:shadow-[0_2px_0_rgba(0,0,0,0.25)]
        active:-translate-y-0.5
        transition-all
        duration-150
        select-none
      `}
    >
      {title}
    </button>
  );
};
