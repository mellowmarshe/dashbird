import type { InferGetStaticPropsType, NextPage } from "next";
import Layout from "../components/Layout";
import Service from "../components/Service";
import jsyaml from "js-yaml";
import { promises as fs } from "fs";
import path from "path";
import { Flex } from "@chakra-ui/react";
import LinkList from "../components/LinkList";

type Config = {
    title?: string;
    description?: string;
    services: Service[];
    links?: Category[];
};

type Service = {
    name: string;
    description: string;
    icon?: string;
    url?: string;
};

type Category = {
    name: string;
    links: Link[];
};

type Link = {
    name: string;
    url: string;
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
    config,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout title={config.title} description={config.description}>
            <Flex
                direction="row"
                wrap="wrap"
                maxH="35rem"
                overflow="auto"
                scrollBehavior="smooth"
                gap="8px"
            >
                {config.services.map((service, index) => (
                    <Service
                        name={service.name}
                        description={service.description}
                        url={service.url}
                        icon={service.icon}
                        key={index}
                    />
                ))}
            </Flex>
            <Flex direction="row" wrap="wrap" pt="30px">
                {config.links != undefined &&
                    config.links.map((category, index) => (
                        <LinkList
                            name={category.name}
                            links={category.links}
                            key={index}
                        />
                    ))}
            </Flex>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const dataDirectory = path.join(process.cwd(), "config.yml");
    let content = await fs.readFile(dataDirectory, "utf8");

    let config: Config = jsyaml.load(content) as Config;

    return {
        props: {
            config,
        },
    };
};

export default Home;
