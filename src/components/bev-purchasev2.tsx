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
import useFetchData from "@/hooks/useFetchData.jsx";

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
        name: string;
        price: string;
        beverage: string;
        qty: number;
        beverage_type: string;
        purchase_date: string;
        VITE_REACT_APP_PURCHASE_BEVERAGE_API_DEPLOY: string;
    };
}

interface ImportMetaEnv {
    readonly VITE_REACT_APP_API_URL: {
        VITE_REACT_APP_LOGIN_USER_API_DEPLOY: string;
    };
    readonly VITE_REACT_APP_LOGIN_USER_API: string;
    readonly VITE_REACT_APP_PURCHASE_BEVERAGE_API_DEPLOY: string;
    readonly MODE: string;
}

export default function BeveragePurchaseForm({
    message,
    isLoading,
    form,
    handleChange,
    submitForm,
    clearMessage,
    fieldError,
}: CardWithFormProps) {
    const isDevelopment = import.meta.env.MODE === "production";
    const url = isDevelopment
        ? import.meta.env.VITE_REACT_APP_PURCHASE_BEVERAGE_API_DEPLOY
        : import.meta.env.VITE_REACT_APP_PURCHASE_BEVERAGE_API;
    const { data } = useFetchData(url);

    return (
        <div className="flex items-start h-[500px] mx-auto">
            <Card className="w-[550px]">
                <CardHeader>
                    {message && (
                        <FlashMessage
                            message={message.message}
                            isSuccess={message.success}
                            clearMessage={clearMessage}
                        />
                    )}
                    <CardTitle>Beverage Purchase Form</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submitForm}>
                        <div className="grid w-full items-center gap-4">
                            {/* Name Field */}
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="beverage">Brand Name</Label>
                                <select
                                    name="beverage"
                                    value={form.beverage}
                                    onChange={handleChange}
                                    id="beverage"
                                    className={`flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 ${fieldError.beverage ? "error-field" : "whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground"}`}
                                >
                                    <option value="" key={0}>
                                        Select Brand...
                                    </option>
                                    {data.map((beverage: { id: number; name: string }) => (
                                        <option value={beverage.id} key={beverage.id}>
                                            {beverage.name}
                                        </option>
                                    ))}
                                </select>
                                {fieldError.name && <span className="error-text">{fieldError.name}</span>}
                            </div>

                            {/* Price Field */}
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="price">Price (Per Bottle)</Label>
                                <Input
                                    id="price"
                                    name="price"
                                    placeholder="e.g. 2000 Rwf."
                                    value={form.price}
                                    onChange={handleChange}
                                    className={fieldError.price ? "error-field" : ""}
                                />
                                {fieldError.price && <span className="error-text">{fieldError.price}</span>}
                            </div>

                            {/* Quantity Field */}
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="qty">Quantity</Label>
                                <Input
                                    id="qty"
                                    type="number"
                                    name="qty"
                                    placeholder="e.g. 3 cases."
                                    value={form.qty}
                                    onChange={handleChange}
                                    className={fieldError.qty ? "error-field" : ""}
                                />
                                {fieldError.qty && <span className="error-text">{fieldError.qty}</span>}
                            </div>

                            {/* Date Field */}
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="purchase_date">Date</Label>
                                <Input
                                    id="purchase_date"
                                    type="date"
                                    name="purchase_date"
                                    placeholder="Purchase Date"
                                    value={form.purchase_date}
                                    onChange={handleChange}
                                    className={fieldError.purchase_date ? "error-field" : ""}
                                />
                                {fieldError.purchase_date && <span className="error-text">{fieldError.purchase_date}</span>}
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    {/* Submit Button */}
                    {isLoading ? (
                        <Button className="btn-gray" disabled>
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