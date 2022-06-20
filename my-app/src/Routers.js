import { Art } from "./Pages/Art";
import { Contacts } from "./Pages/Contacts";
import { Education } from "./Pages/Education";
import { Web } from "./Pages/Web";
import { WebPr } from "./Pages/WebPr";

export const Routers = [
    {
        path: '/Art',
        element: <Art />
    },
    {
        path: '/',
        element: <Art />
    },
    {
        path: '/Web',
        element: <Web />
    },
    {
        path: '/WebPr' + '/:id',
        element: <WebPr />
    },
    {
        path: '/Education',
        element: <Education />
    },
    {
        path: '/Contacts',
        element: <Contacts />
    }
]