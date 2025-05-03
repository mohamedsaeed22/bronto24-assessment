import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface UserFormHeaderProps {
  isEdit: boolean;
}

export const UserFormHeader = ({ isEdit }: UserFormHeaderProps) => (
  <DialogHeader>
    <DialogTitle className="font-bold text-xl">
      {isEdit ? "Update employee" : "Add a New employee"}
    </DialogTitle>
    <DialogDescription className="text-sm text-[#575F6E]">
      It will take a couple of minutes.
      <br />
      Change profile settings and confirm with SMS code
    </DialogDescription>
    <div className="mt-2 mb-1 font-bold text-sm">Your personal data</div>
  </DialogHeader>
);
