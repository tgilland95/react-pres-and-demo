import React from 'react'
import {
  Heading,
  Text,
  Quote,
  List,
  ListItem,
  BlockQuote,
  Cite,
  Image,
  tile,
  Slide
} from 'spectacle'
import { names } from '../../assetFileNames'
import glamorous from 'glamorous'

const wrapper = {
    display: "inline-flex",
}
const quote_color = {
    color: "white",
    fontSize: "1em",
}

const image = {
    width: "500px",
    height: "500px",
}

export const Future = () => (
  <Slide>
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      the future
    </Heading>

    <br />

    <div style={wrapper}>    
        <BlockQuote>
        <Quote style={quote_color}>There is so much investment, momentum and expertise behind React you can
        be guaranteed it's here in 10 years.</Quote>
            <br />
            <br />
        <Cite style={quote_color}>Andrew McLagan, Senior Engineer at EthicalJobs.com </Cite>
            
        
        </BlockQuote>
        <Image style={image} src={require(`../../assets/other/${'future.png'}`)} />
    </div>
  </Slide>
)
