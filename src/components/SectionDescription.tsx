interface SectDescriptionProps {
  description: string;
}

const SectionDescription = ({ description }: SectDescriptionProps) => {
  return (
    <p className="text-tLarge leading-[132%]  max-w-[35ch] text-[#a29e9a] ">
      {description}
    </p>
  );
};

export default SectionDescription;
