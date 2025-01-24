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
    meal_type?: string;
  };
}

export default function MealForm({
  message,
  isLoading,
  form,
  handleChange,
  submitForm,
  clearMessage,
  fieldError,
}: CardWithFormProps) {
  return (
    <div className="flex items-start justify-center h-[500px]">
    <Card className="w-[450px]">
      <CardHeader>
      {message && (
        <FlashMessage
          message={message.message}
          isSuccess={message.success}
          clearMessage={clearMessage}
        />
      )}
        <CardTitle>Meal/Dish Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={submitForm}>
          <div className="grid w-full items-center gap-4">
            {/* Name Field */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Dish Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Name of the meal/dish"
                value={form.name}
                onChange={handleChange}
                className={fieldError.name ? "error-field" : ""}
              />
              {fieldError.name && <span className="error-text">{fieldError.name}</span>}
            </div>

            {/* Price Field */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
                className={fieldError.price ? "error-field" : ""}
              />
              {fieldError.price && <span className="error-text">{fieldError.price}</span>}
            </div>

            {/* Tea Type Field */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="tea_type">Type</Label>
              <select
              name="meal_type"
              value={form.tea_type}
              onChange={handleChange}
              id="meal_type"
              className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
            >
              <option value="">Select type</option>
                <option key={1} value="Salad">
                  Salad
                </option>
                <option key={2} value="Fried">
                  Fried
                </option>
                <option key={3} value="Stewed_Dish">
                  Stewed Dish
                </option>
                <option key={4} value="Burger">
                  Burger
                </option>
                <option key={5} value="Snack">
                  Snack
                </option>
                <option key={6} value="Pizza">
                  Pizza
                </option>
            </select>
              {fieldError.meal_type && <span className="error-text">{fieldError.meal_type}</span>}
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