import { Header } from '@/ui/public';

export const Education = () => {
  return (
    <Header title="EDUCATION">
      <div className="flex justify-between pl-3 mb-2 text-lg bg-[#dcdbdb] p-5 rounded-xl">
        <div>
          <h1 className="font-semibold">University Of Phayao</h1>
          <p>Bachelor of Engineering in Software Engineering</p>
        </div>
        <div>
          <p className="font-semibold">GPA : 3.00</p>
          <p className="text-base text-gray-500">2023 - Present</p>
        </div>
      </div>
    </Header>
  );
};