Lucide icon library is a collection of open-source icons designed specifically for use in web applications, including those built with React.

How to use it?
1-Installation:
pnpm add lucide-react
or
npm install lucide-react
or
yarn add lucide-react
or
bun add lucide-react

2-Importing Icons:
import { ChevronRight } from "lucide-react";

3-Using Icons in Components:
<ChevronRight size={24} color="blue" className="ml-2" />

Complete example:

<li className="pb-4 flex items-center">
    <ChevronRight className="text-yellow-500 pr-1" />
    <a href="#" className="hover:text-yellow-500">
        Services
    </a>
</li>
