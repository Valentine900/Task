import { Text, Image, Flex } from "@chakra-ui/react";

const UserCard = ({ avatarSrc, userName, stats}) => {
  return (
    <Flex bg="gray.50" px="medium" py="small" borderRadius="small" gap="medium">
      <Flex alignItems="center" height="100%" flexGrow="1">
        <Image src={avatarSrc} width="32px" height="32px" />
        <Text
          ml="small"
          color="gray.900"
          fontFamily="main"
          fontSize="small2"
          fontWeight="normal"
          lineHeight="small2"
        >
          {userName}
        </Text>
      </Flex>

      {stats.map((stat, index) => (
        <Flex key={index} alignItems="center" width="80px"  flexShrink="0">
          <Text
            fontFamily="main"
            fontSize="small2"
            lineHeight="small2"
            fontWeight="noraml"
            color={stat.isRed ? "red.800" : "gray.900"}
          >
            {stat.value}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default UserCard;
