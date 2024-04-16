import { FC } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";

const SignUp: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Log In</Button>
      </DialogTrigger>
      <DialogContent className="pt-10 sm:max-w-[425px]">
        <Tabs className="" defaultValue="account">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="logIn">
              <DialogHeader>
                <DialogTitle>Log In</DialogTitle>
              </DialogHeader>
            </TabsTrigger>
            <TabsTrigger value="signUp">
              <DialogHeader>
                <DialogTitle>Sign Up</DialogTitle>
              </DialogHeader>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="logIn">
            <Card>
              <CardHeader>
                <CardTitle>Log In</CardTitle>
                <CardDescription>All fields are mandatory.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="username">
                    Username
                  </Label>
                  <Input
                    className="col-span-3"
                    defaultValue="@peduarte"
                    id="username"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    className="col-span-3"
                    defaultValue="Minimum 8 Letters"
                    id="password"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <DialogFooter className="mx-auto mt-4">
                  <Button type="submit">Log In</Button>
                </DialogFooter>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signUp">
            <Card>
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>All fields are mandatory.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    className="col-span-3"
                    defaultValue="Pedro Duarte"
                    id="name"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="username">
                    Username
                  </Label>
                  <Input
                    className="col-span-3"
                    defaultValue="@peduarte"
                    id="username"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    className="col-span-3"
                    defaultValue="Minimum 8 Letters"
                    id="password"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <DialogFooter className="mx-auto mt-4">
                  <Button type="submit">Sign In</Button>
                </DialogFooter>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default SignUp;
