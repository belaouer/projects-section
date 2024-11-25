import React from "react";
interface TaskProps {
  task: string;
}
const Task = ({ task }: TaskProps) => {
  return (
    <span className="flex justify-center items-center text-[#a29e9a] border rounded-full px-p3xs py-p2xs uppercase text-tMono font-medium font-mono border-[#a29e9a]">
      {task}
    </span>
  );
};

export default Task;
