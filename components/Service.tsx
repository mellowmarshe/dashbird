import { Box, Flex, Heading, Text, Image, Hide } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "./Link";

type Props = {
    name: string;
    description: string;
    icon?: string;
    url?: string;
};

const Service = ({ name, description, icon, url }: Props) => (
    <Box
        mt="16px"
        mr="16px"
        // m="8px"
        w={["100%", "8rem", "12rem", "18rem"]}
        borderWidth="1px"
        borderRadius="md"
        borderColor="orange.300"
        p="8px"
        boxShadow="md"
        as={motion.div}
        whileHover={{ translateY: -3 }}
    >
        <Flex>
            <Hide below="xl">
                {icon != undefined && (
                    <Box boxSize="25px" mt="auto" mb="auto" mr="10px">
                        <Image src={icon} height="25px" width="25px" />
                    </Box>
                )}
            </Hide>

            <Box>
                <Heading size="sm">
                    {url == undefined ? (
                        <>{name}</>
                    ) : (
                        <Link name={name} url={url} />
                    )}
                </Heading>

                <Text>{description}</Text>
            </Box>
        </Flex>
    </Box>
);

export default Service;
