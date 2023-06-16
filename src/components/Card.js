import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      borderWidth="1px"
      borderRadius="md"
      padding={4}
      backgroundColor="white"
      color="black"
      boxShadow="md"
    >
      <Image
        src={imageSrc}
        alt={title}
        width="100%"
        height="auto"
        borderRadius="md"
      />
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
      <HStack>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
