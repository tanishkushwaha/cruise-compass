import { Card, Heading, CardHeader } from "@chakra-ui/react"
import colors from '../utils/colors'

const DashboardCard = ({ title }: any) => {
  return (
    <Card bg={colors.primary} minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', bg: colors.secondary }}>
      <CardHeader>
        <Heading color='white' size='md'>{title}</Heading>
      </CardHeader>
    </Card>
  )
}

export default DashboardCard