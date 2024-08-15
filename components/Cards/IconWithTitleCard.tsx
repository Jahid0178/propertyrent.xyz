import React from "react";
import Icon from "../common/Icon";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IconWithTitleCardProps {
  icon: keyof typeof dynamicIconImports;
  title: string;
}

const IconWithTitleCard = ({ icon, title }: IconWithTitleCardProps) => {
  return (
    <Card className="text-center">
      <CardHeader className="items-center">
        <div className="w-20 h-20 flex justify-center items-center rounded-full bg-orange-500/10">
          <Icon name={icon} size={40} className="text-orange-500" />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default IconWithTitleCard;
