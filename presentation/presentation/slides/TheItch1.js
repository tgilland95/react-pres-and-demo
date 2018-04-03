import React from "react"
import { Heading, Text, Quote, Slide, List, ListItem } from "spectacle"

export const TheItch1 = () => (
    <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
               The Itch
          </Heading>
          <hr/><br/>
          <Text margin="10px 0 0" textColor="secondary" size={
               1
          }  bold>
          <List>
            <ListItem>
              Facebook's dilemma with Messenger
            </ListItem>
            <ListItem>
              Allegory
            </ListItem>
          </List>
          </Text>
     </Slide>
)