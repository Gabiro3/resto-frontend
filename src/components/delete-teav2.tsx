import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog.js";
  import { Button } from "@/components/ui/button.js";
  import useDeleteTea from "@/hooks/useDeleteTea.jsx";
  import addComma from "@/utils/addComma.mjs";
  
  interface DeleteTeaModalProps {
    closeModal: (index: number, action: string) => void;
    allTeas: Array<{ name: string; tea_type: string; price: number; created_at: string }>;
    teaIndex: number;
    animate: boolean;
  }

  export default function DeleteTeaModal({
    closeModal,
    allTeas,
    teaIndex,
    animate,
  }: DeleteTeaModalProps) {
    const tea = allTeas[teaIndex];
    const { submitForm } = useDeleteTea(tea, closeModal, teaIndex);
  
    return (
      <AlertDialog>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the tea
              item and remove its data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="modal-body">
            <div className="info">
              <span style={{ fontWeight: "bold" }}>Name: </span>
              <span>{tea.name}</span>
            </div>
            <div className="info">
              <span style={{ fontWeight: "bold" }}>Category: </span>
              <span>{tea.tea_type}</span>
            </div>
            <div className="info">
              <span style={{ fontWeight: "bold" }}>Price: </span>
              <span>{addComma(tea.price ? tea.price : 0)}</span>
            </div>
            <div className="info">
              <span style={{ fontWeight: "bold" }}>Created date</span>
              <span>{tea.created_at}</span>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => closeModal(teaIndex, "delete")}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button className="bg-red-500" onClick={submitForm}>
                Delete
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  