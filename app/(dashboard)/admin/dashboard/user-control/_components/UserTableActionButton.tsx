import React from "react";
import moment from "moment";
import UserManageDropdownMenu from "./UserManageDropdownMenu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CgDetailsMore } from "react-icons/cg";

interface UserTableActionButtonProps {
  user: any;
}

const UserTableActionButton = async ({ user }: UserTableActionButtonProps) => {
  const {
    fullName,
    username,
    email,
    phone,
    role,
    createdAt,
    updatedAt,
    isBanned,
    _id: userId,
  } = user;

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" size="icon">
          <CgDetailsMore size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex-row justify-between items-center">
          <div>
            <DialogTitle className="mb-1">User Details</DialogTitle>
            <DialogDescription>Manage user full details.</DialogDescription>
          </div>
          <UserManageDropdownMenu />
        </DialogHeader>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Full Name: {fullName}</h4>
          <p>ID: {userId}</p>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Role: {role}</p>
          <p>Created at: {moment(createdAt).format("ll")}</p>
          <p>Last update: {moment(updatedAt).format("ll")}</p>
          <p>Banned: {isBanned ? "True" : "False"}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserTableActionButton;
