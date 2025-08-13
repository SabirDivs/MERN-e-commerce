import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Only show desktop navigation on medium+ screens */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/products" className={navigationMenuTriggerStyle()}>
                Products
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/checkout" className={navigationMenuTriggerStyle()}>
                Checkout
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/admin/dashboard" className={navigationMenuTriggerStyle()}>
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>     
    </div>
  );
}