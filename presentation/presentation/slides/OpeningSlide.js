import React from "react"
import { Heading, Text, Quote, Image, Slide } from "spectacle"

export const OpeningSlide = () => (
    <Slide>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React Js
        </Heading>
        <Image width="256px" height="256px" src={require("../../assets/react.svg")} />
        <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            A JavaScript library for building user interfaces
        </Text>
    </Slide>
)
