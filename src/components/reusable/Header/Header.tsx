import React from "react";
import {Flex} from "../../../styles/styled-components/Flex";
import {colors} from "../../../styles/colors";

const Header = () => {
    const navList: Array<string> = ["dashboard", "birthdays", "activity"];
    return(
        <Flex
            alignItems="center"
            justifyContent="space-between"
            backgroundColor={colors["blue01"]}
            as="header"
            padding={4}
        >
            <Flex
                color={colors["white"]}
                fontWeight="bold"
                fontSize={3}
            >
                AdminPanel
            </Flex>
            <Flex as="nav" gapX={3}>
                {navList.map((link: string, index: number) => (
                    <Flex
                        key={index}
                        color={colors["white"]}
                        textTransform="uppercase"
                    >
                        {link}
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}

export default Header;