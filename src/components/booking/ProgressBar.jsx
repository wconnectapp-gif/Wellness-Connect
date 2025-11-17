const ProgressBar = ({ label, percent }) => (
  <div className="flex flex-col gap-3 px-4 sm:px-10">
    <div className="flex items-center justify-between">
      <p className="text-base font-medium">{label}</p>
      <p className="text-sm text-[#4c9a66]">{percent}%</p>
    </div>
    <div className="h-2 w-full rounded-full bg-[#cfe7d7]">
      <div className="h-2 rounded-full bg-primary" style={{ width: `${percent}%` }} />
    </div>
  </div>
);
export default ProgressBar;
