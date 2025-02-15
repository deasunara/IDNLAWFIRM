// src/components/PropertyList.tsx
import { Box, Image, Text, Grid, Badge } from "@chakra-ui/react";
import dataList from "../../data";

export default function PropertyList() {
  return (
    <Box p={6}>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        {dataList.map((property, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            p={4}
            shadow="md"
          >
            <Image src={property.imageUrl} alt={property.imageAlt} width="100%" height="200px" objectFit="cover" />

            <Box p="4">
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                {property.title}
              </Text>
              <Text fontSize="md" color="gray.600">
                {property.formattedPrice}
              </Text>
              <Box mt={2}>
                <Badge colorScheme="teal" mr={2}>
                  {property.beds} Beds
                </Badge>
                <Badge colorScheme="yellow" mr={2}>
                  {property.rating} Stars
                </Badge>
                <Text display="inline" color="gray.500">
                  {property.reviewCount} Reviews
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
