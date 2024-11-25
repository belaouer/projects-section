interface TitleProps {
  title: string;
}
const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="text-[#d1d1c7] max-w-[18ch] text-tXLarge uppercase font-semibold text-balance tracking-tight leading-none">
      {title}
    </h1>
  );
};

export default Title;
