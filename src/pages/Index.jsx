import React from "react";
import { Box, Heading, Text, Image, SimpleGrid, Card, CardBody, Stack, Divider, Button, Link, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    image: "https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjE5OTE1OXww&ixlib=rb-4.0.3&q=80&w=1080",
    githubLink: "https://github.com/username/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    image: "https://images.unsplash.com/photo-1617777938240-9a1d8e51a47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjE5OTE1OXww&ixlib=rb-4.0.3&q=80&w=1080",
    githubLink: "https://github.com/username/project2",
  },
  {
    title: "Project 3",
    description: "A brief description of project 3",
    image: "https://images.unsplash.com/photo-1581094651181-35942459ef62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxzb2Z0d2FyZSUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjE5OTE1OXww&ixlib=rb-4.0.3&q=80&w=1080",
    githubLink: "https://github.com/username/project3",
  },
];

const Index = () => {
  return (
    <Box maxWidth="960px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" marginBottom={8}>
        Software Engineer Portfolio
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {projects.map((project, index) => (
          <Card key={index}>
            <Image src={project.image} alt={project.title} />
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">{project.title}</Heading>
                <Text>{project.description}</Text>
                <Divider />
                <Link href={project.githubLink} isExternal>
                  <Button variant="ghost" leftIcon={<Icon as={FaGithub} />}>
                    GitHub
                  </Button>
                </Link>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
