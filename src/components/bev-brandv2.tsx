import * as React from "react";
import { Button } from "@/components/ui/button.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.js";
import { Input } from "@/components/ui/input.js";
import { Label } from "@/components/ui/label.js";
import FlashMessage from "@/components/ui/FlashMessage.jsx";

interface Message {
  success: boolean;
  message: string;
}

interface CardWithFormProps {
  message: Message | null;
  isLoading: boolean;
  form: any; // You can replace 'any' with a more specific type if you have one
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  submitForm: () => void;
  clearMessage: () => void;
  fieldError: {
    name?: string;
    price?: string;
    beverage_type?: string;
  };
}

export default function BeverageBrandForm({
  message,
  isLoading,
  form,
  handleChange,
  submitForm,
  clearMessage,
  fieldError,
}: CardWithFormProps) {
  return (
    <div className="flex items-start h-[500px] mx-auto">
    <Card className="w-[350px]">
      <CardHeader>
      {message && (
        <FlashMessage
          message={message.message}
          isSuccess={message.success}
          clearMessage={clearMessage}
        />
      )}
        <CardTitle>Beverage Brand Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={submitForm}>
          <div className="grid w-full items-center gap-4">
            {/* Name Field */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="e.g. Blarirwa, Coca Cola, etc."
                value={form.name}
                onChange={handleChange}
                className={fieldError.name ? "error-field" : ""}
              />
              {fieldError.name && <span className="error-text">{fieldError.name}</span>}
            </div>


            {/* Beverage Type Field */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="beverage_type">Type</Label>
              <select
                name="beverage_type"
                value={form.beverage_type}
                onChange={handleChange}
                id="beverage_type"
                className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
              >
                <option value="">Select type</option>
                <option key={1} value="Soda">
                  Soda
                </option>
                <option key={2} value="Water">
                  Water
                </option>
                <option key={3} value="Wine">
                  Wine
                </option>
                <option key={4} value="Beer">
                  Beer
                </option>
              </select>
              {fieldError.beverage_type && <span className="error-text">{fieldError.beverage_type}</span>}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* Submit Button */}
        {isLoading ? (
          <Button className="btn-gray" onClick={submitForm}>
          Submitting...
        </Button>
        ) : (
          <Button className="btn-dark" onClick={submitForm}>
            Submit
          </Button>
        )}
        {/* Clear/Cancel Button */}
        <Button variant="outline" onClick={clearMessage}>
          Clear
        </Button>
      </CardFooter>
    </Card>
    </div>
  );
}