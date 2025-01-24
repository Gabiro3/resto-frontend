import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button.js";
import { Alert } from "@/components/ui/alert.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.js"
import { Input } from "@/components/ui/input.js"
import { Label } from "@/components/ui/label.js"

interface ImportMetaEnv {
  VITE_REACT_APP_PURCHASE_BEVERAGE_API_DEPLOY: any;
  VITE_REACT_APP_PURCHASE_BEVERAGE_API: any;
  readonly VITE_REACT_APP_API_URL: {
    VITE_REACT_APP_LOGIN_USER_API_DEPLOY: string;
  };
  readonly VITE_REACT_APP_LOGIN_USER_API: string;
  readonly VITE_REACT_APP_TOKEN: string;
  readonly MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  // State management
  const [form, setForm] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const clearMessage = () => setMessage(null);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const isProduction = import.meta.env.MODE === "production";
    const url = isProduction
      ? import.meta.env.VITE_REACT_APP_API_URL.VITE_REACT_APP_LOGIN_USER_API_DEPLOY
      : import.meta.env.VITE_REACT_APP_LOGIN_USER_API;
      console.log(url);
    try {
      const res = await axios.post(url || '', {
        username: form.username,
        password: form.password,
      }
    );
      console.log(res);

      if (res.data.success) {
        localStorage.setItem(import.meta.env.VITE_REACT_APP_TOKEN || '', res.data.token);

        if (res.data.user.is_superuser) {
          navigate("/dashboard/home");
        } else {
          navigate("/service/home");
        }
      } else {
        setMessage(res.data);
      }
    } catch (err: any) {
      setMessage({ success: false, message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-3 bg-white rounded-lg">

      {message && (
        <Alert variant={message.success ? "default" : "destructive"}>
          {message.message}
        </Alert>
      )}
      <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your username below to login to your account
          </CardDescription>
      </CardHeader>
      <CardContent>
      <form onSubmit={submitForm}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  onChange={handleChange}
                  value={form.username}
                  placeholder="admin"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                 id="password" 
                 name="password"
                 placeholder="*************"
                 type="password"
                 value={form.password}
                 onChange={handleChange}
                 required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
    </div>
  );
};

export default LoginForm;

