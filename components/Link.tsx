import { Link as ChakraLink } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

type Props = {
    name: string;
    url: string;
};

const Link = ({ name, url }: Props) => (
    <ChakraLink href={url} isExternal>
        {name}
        <ExternalLinkIcon ml="3px" mb="3px" />
    </ChakraLink>
);

export default Link;
