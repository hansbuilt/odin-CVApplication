import { Printer } from "lucide-react";

function PrintResumeBtn({}) {
  return (
    <button
      type="button"
      className="buttonPrintResume"
      onClick={() => window.print()}
    >
      <Printer size={20} />
    </button>
  );
}

export default PrintResumeBtn;
