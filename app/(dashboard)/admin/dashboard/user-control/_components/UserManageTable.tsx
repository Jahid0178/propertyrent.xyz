import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import UserTableActionButton from "./UserTableActionButton";

const UserManageTable = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`);
  const data = await response.json();
  return (
    <Table className="border">
      <TableCaption>
        Total {data.users.length} users found to manage user.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Full Name</TableHead>
          <TableHead>User Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Banned</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.users.map((user: any) => (
          <TableRow key={user._id}>
            <TableCell className="font-medium">{user._id}</TableCell>
            <TableCell>{user.fullName}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              {user.isBanned ? (
                <Badge variant="destructive">True</Badge>
              ) : (
                <Badge>False</Badge>
              )}
            </TableCell>
            <TableCell className="text-right">
              <UserTableActionButton user={user} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserManageTable;
