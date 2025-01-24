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
    username?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    confirmPassword?: string;
  };
}

export default function WaiterForm({
  message,
  isLoading,
  form,
  handleChange,
  submitForm,
  clearMessage,
  fieldError,
}: CardWithFormProps) {
  return (
    <div className="flex items-start h-[500px] mx-auto my-100px">
      <Card className="w-[750px]">
        <CardHeader>
          {message && (
            <FlashMessage
              message={message.message}
              isSuccess={message.success}
              clearMessage={clearMessage}
            />
          )}
          <CardTitle>Employee Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitForm}>
            <div className="grid w-full items-center gap-4">
              {/* First Name and Last Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="e.g. Jackson"
                    value={form.firstName}
                    onChange={handleChange}
                    className={fieldError.firstName ? "error-field" : ""}
                  />
                  {fieldError.firstName && <span className="error-text">{fieldError.firstName}</span>}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="e.g. Mugabo"
                    value={form.lastName}
                    onChange={handleChange}
                    className={fieldError.lastName ? "error-field" : ""}
                  />
                  {fieldError.lastName && <span className="error-text">{fieldError.lastName}</span>}
                </div>
              </div>
              {/* Password and Confirm Password Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleChange}
                    className={fieldError.password ? "error-field" : ""}
                  />
                  {fieldError.password && <span className="error-text">{fieldError.password}</span>}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className={fieldError.confirmPassword ? "error-field" : ""}
                  />
                  {fieldError.confirmPassword && <span className="error-text">{fieldError.confirmPassword}</span>}
                </div>
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