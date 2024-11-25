import Task from "./Task";

interface TasksProps {
  tasks: string[];
  year: number;
}

const Tasks = ({ tasks, year }: TasksProps) => {
  return (
    <div className="w-full h-full flex gap-x-2 xl:justify-end">
      {tasks.map((task, i) => {
        return <Task key={i} task={task} />;
      })}
      <span className="inline-block text-black border rounded-full px-2 py-1 uppercase text-sm font-medium font-mono bg-[#a29e9a]">
        {year}
      </span>
    </div>
  );
};

export default Tasks;
