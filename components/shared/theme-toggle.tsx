import React from "react";
import { DropdownMenu, DropdownMenuTrigger, } from "../ui/dropdown-menu";

import { Button } from "../ui/button";

const ThemeToggle = () => {
  return <DropdownMenu>
    <DropdownMenuTrigger>
        <Button></Button>
    </DropdownMenuTrigger>
  </DropdownMenu>
};

export default ThemeToggle;
