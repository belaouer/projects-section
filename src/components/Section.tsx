import SectionDescription from "./SectionDescription";
import SectionName from "./SectionName";
import Title from "./Title";

interface SectionProps {
  title: string;
  section: string;
  description: string;
  children: React.ReactNode;
}

const Section = ({ title, section, description, children }: SectionProps) => {
  return (
    <section className="relative bg-[#0a0a09] min-h-screen w-full z-10 px-8 py-space2xl flex flex-col">
      <div className="flex flex-col gap-y-space2xl">
        <Title title={title} />
        <div className="h-full flex sm:grid sm:grid-cols-12">
          <div className="flex flex-col items-start sm:flex-row sm:gap-16 sm:col-start-1 sm:col-end-12 md:col-start-6 md:col-end-13 lg:col-end-12">
            <SectionName name={section} />
            <SectionDescription description={description} />
          </div>
        </div>
      </div>
      <div className="pt-spaceLg w-full grid grid-cols-12  gap-x-fluidGap">
        {children}
      </div>
    </section>
  );
};

export default Section;
