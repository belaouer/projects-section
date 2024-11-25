interface SectNameProps {
  name: string;
}

const SectionName = ({ name }: SectNameProps) => {
  return (
    <h4 className="tracking-tight font-medium text-[#7e766c] uppercase">
      ({name})
    </h4>
  );
};

export default SectionName;
