import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ListLink from "./ListLink";

type Props = {
    name: string;
    links: Link[];
};

type Link = {
    name: string;
    url: string;
};

const LinkList = ({ name, links }: Props) => (
    <Box mr="20px">
        <Heading size="md" textColor="orange.300">
            {name}
        </Heading>
        {links.map((link, index) => (
            <ListLink name={link.name} url={link.url} key={index} />
        ))}
    </Box>
);

export default LinkList;
