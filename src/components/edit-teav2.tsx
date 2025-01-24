import { Button } from "@/components/ui/button.js"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.js"
import { Input } from "@/components/ui/input.js"
import { Label } from "@/components/ui/label.js"
import useEditTea from "@/hooks/useEditTea.jsx";

interface EditTeaModalProps {
  closeModal: (index: number, action: string) => void;
  allTeas: any[];
  teaIndex: number;
}

export default function EditTeaModal({
  closeModal,
  allTeas,
  teaIndex,
}: EditTeaModalProps) {
  const tea = allTeas[teaIndex];
  const {
    form,
    fieldError,
    handleChange,
    validateSubmitForm: submitForm,
  } = useEditTea(tea, closeModal, teaIndex);

  return (
    <Dialog open={true} onOpenChange={() => closeModal(teaIndex, "edit")}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Tea</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Smoothy</DialogTitle>
          <DialogDescription>
            Make changes to the tea details here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form onSubmit={submitForm} className="tea-form">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                className={`col-span-3 ${fieldError.name && "error-field"}`}
                placeholder="Name"
                onChange={handleChange}
                value={form.name}
              />
              {fieldError.name && <i className="error-text">{fieldError.name}</i>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                type="number"
                name="price"
                id="price"
                className={`col-span-3 ${fieldError.price && "error-field"}`}
                placeholder="Price"
                onChange={handleChange}
                value={form.price}
              />
              {fieldError.price && <i className="error-text">{fieldError.price}</i>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tea_type" className="text-right">
                Type
              </Label>
              <select
                name="tea_type"
                id="tea_type"
                className={`col-span-3 flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 ${fieldError.tea_type ? "border-red-500" : "border-gray-300"} ${fieldError.tea_type && "error-field"}`}
                onChange={handleChange}
                value={form.tea_type}
              >
                <option key={1} value="Tea">Tea</option>
                <option key={2} value="Coffee">Coffee</option>
                <option key={3} value="Juice">Juice</option>
              </select>
              {fieldError.tea_type && <i className="error-text">{fieldError.tea_type}</i>}
            </div>
            <DialogFooter>
              <Button type="submit" className="btn-dark">Submit</Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
