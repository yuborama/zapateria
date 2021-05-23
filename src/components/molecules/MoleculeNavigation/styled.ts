import styled from "@emotion/styled"
import Link from "next/link";
export const Nav = styled.nav`
top: 0;
width: 100vw;
position: fixed;
z-index: 1000;
`;

export const Linkstyled = styled(Link)` 
        text-decoration: none;
    a{ 
        text-decoration: none;
    }
`;