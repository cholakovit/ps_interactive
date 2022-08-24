// React functional component
//import React, { FC } from "react";

import { Avatar } from "@mui/material"
import { AvatarHolder, Partner, PartnerContent, PartnerDistance, PartnerName } from "./Partner.styles"

//import { PartnerProps } from '../../store/types'

const PartnerView = (props: { partner: any }) => {
  return (
    <Partner>  
        <AvatarHolder>
            <Avatar alt={`${props.partner.name}`} src={`../../assets/img/${props.partner.pic}`} />     
        </AvatarHolder> 
        <PartnerContent>
            <PartnerName>Name: {props.partner.name}</PartnerName>
            <PartnerDistance>Distance: {props.partner.distance}km.</PartnerDistance>
        </PartnerContent>
    </Partner>
    
  )
}

export default PartnerView



