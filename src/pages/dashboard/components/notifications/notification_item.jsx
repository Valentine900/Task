import { Text, Heading, Flex, Box, Icon } from "@chakra-ui/react";

const NotificationItem = ({
  notificationIcon: notIcon,
  notificationName,
  notificationTime,
  notificationColor,
  iconColor,
}) => {
  return (
    <Flex
      bg={notificationColor ? "another.errorbg" : "gray.50"}
      borderRadius="small"
      px="medium"
      py="small"
      alignItems="start"
      gap="small"
    >
      <Box flexShrink="0" asChild>
        <Icon as={notIcon}
          color={iconColor ? "another.error" : "gray.400"}        
          size={20}
        />
      </Box>
      <Heading
        fontSize="small"
        color="gray.900"
        fontWeight="500"
        fontFamily="main"
        flexGrow="1"
        lineHeight="small2"
      >
        {notificationName}
      </Heading>
      <Text
        fontSize="small"
        color="gray.900"
        fontWeight="normal"
        fontFamily="main"
      >
        {notificationTime}
      </Text>
    </Flex>
  );
};

export default NotificationItem;
