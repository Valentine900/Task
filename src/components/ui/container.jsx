import { Box, Heading, Select } from "@chakra-ui/react";

const Container = ({ title, children, showSelect }) => {
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      width="100%"
      bg="another.wh"
      borderRadius="big"
      padding="medium3"
    >
      <Box display="flex" alignItems="center" mb="medium3">
        <Heading fontSize="medium" fontFamily="main" fontWeight="medium">
          {title}
        </Heading>
        {showSelect && (
        <Box ml="auto">
          <Select.Root>
            <Select.Trigger border="none" display="flex" alignItems="center">
              <Select.ValueText
                color="gray.900"
                ml="medium3"
                fontWeight="normal"
                fontSize="verySmall2"
              >
                Today
              </Select.ValueText>
              <Box >
                <Select.Indicator />
              </Box>
            </Select.Trigger>
          </Select.Root>
        </Box>
        )}
      </Box>
      {children}
    </Box>
  );
};

export default Container;
