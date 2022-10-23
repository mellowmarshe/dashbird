import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "./Link";

type Props = {
    name: string;
    url: string;
};

const ListLink = ({ name, url }: Props) => (
    <Box>
        <Link name={name} url={url} />
    </Box>
);

export default ListLink;
