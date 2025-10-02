import { resumeURL } from "@/utils/constants";

const ResumePage = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <iframe src={resumeURL} className="w-full min-h-screen"></iframe>
    </div>
  );
};

export default ResumePage;
