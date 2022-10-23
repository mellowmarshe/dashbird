import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";

type Props = {
    children?: ReactNode;
    title?: string;
    description?: string;
};

const Layout = ({ children, title = "Dashbird", description }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Container maxW="1600px" mt="30px">
            <Box display="inline">
                <Heading size="xl" textColor="orange.300">
                    {title}
                </Heading>
                —{" "}
                {description != undefined && <Text as="i">{description}</Text>}
            </Box>
            {children}
            <br />
            <footer>
                <ThemeToggle />
            </footer>
        </Container>
    </div>
);

export default Layout;
