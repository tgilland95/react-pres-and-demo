import React from "react"
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text } from "spectacle"
import createTheme from "spectacle/lib/themes/default"
import CodeSlide from "spectacle-code-slide"
import preloader from "spectacle/lib/utils/preloader"
import * as allSlides from "./slides"
const slidesImports = [import("./slides/index")]

const theme = createTheme(
    {
        primary: "grey",
        secondary: "white",
        tertiary: "black",
        quarternary: "#00d8ff",
    },
    {
        primary: "Montserrat",
        secondary: "Helvetica",
    }
)
const slides = Object.values(allSlides)
export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["flip"]} theme={theme}>
                {slides.map((slideContent) => slideContent())}
            </Deck>
        )
    }
}
