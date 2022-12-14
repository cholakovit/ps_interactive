
// MUI Elements
import { Avatar } from "@mui/material"

// Styled Elements
import { AvatarHolder, Partner, PartnerContent, PartnerDistance, PartnerName } from "./Partner.styles"

// Types
import { PartnerProps } from '../../store/types'

const PartnerView = (props: { partner: PartnerProps }) => {
  return (
    <Partner role='partner'>
        <AvatarHolder>
            <Avatar alt={`${props.partner.name}`} src={`../../assets/img/${props.partner.pic}`} />     
        </AvatarHolder> 
        <PartnerContent>
            <PartnerName>Name: {props.partner.name}</PartnerName>
            <PartnerName>ID: {props.partner.partner_id}</PartnerName>
            <PartnerDistance>Distance: {props.partner.distance}km.</PartnerDistance>
        </PartnerContent>
    </Partner>
    
  )
}

export default PartnerView



