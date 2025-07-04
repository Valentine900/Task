import { Text, Heading, Flex } from "@chakra-ui/react";
import { DownloadSimple } from "phosphor-react";

const ReportItem = ({ reportName, reportDescription, reportDate }) => {
  return (
    <Flex  bg="gray.50" borderRadius="small" py="medium3" px="medium" alignItems="center" gap="big2" > 
      <Flex flexDirection="column" height="100%" flexGrow="1" gap="little">
        <Heading
          fontSize="small"
          color="gray.900"
          fontWeight="medium"
          fontFamily="main"
          lineHeight="small2"
        >
          {reportName}
        </Heading>
        <Text
          fontSize="small"
          color="gray.500"
          fontWeight="normal"
          fontFamily="main"
          lineHeight="small"
        >
          {reportDescription}
        </Text>
      </Flex>
      <Flex>
        <Text
          fontSize="small"
          color="gray.900"
          fontWeight="normal"
          fontFamily="main"
        >
          {reportDate}
        </Text>
      </Flex>
      <Flex>
        <DownloadSimple size={20} />
      </Flex>
    </Flex>
  );
};

export default ReportItem;
