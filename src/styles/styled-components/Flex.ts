import styled from "styled-components";
import {toPixels} from "../transforms";

interface IFlex {
    direction?: "row" | "row-reverse" | "column" | "column-reverse",
    flex?: string | number,
    alignItems?: "flex-start" | "center" | "flex-end",
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between",
    backgroundColor?: string,
    fontSize?: number | string,
    lineHeight?: number | string,
    fontStyle?: "normal" | "italic",
    fontWeight?: string | number,
    color?: string,
    padding?: string | number,
    paddingX?: string | number,
    paddingY?: string | number,
    paddingLeft?: string | number,
    paddingRight?: string | number,
    paddingTop?: string | number,
    paddingBottom?: string | number,
    margin?: string | number,
    marginX?: string | number,
    marginY?: string | number,
    marginTop?: string | number,
    marginBottom?: string | number,
    marginLeft?: string | number,
    marginRight?: string | number,
    gap?: string | number,
    gapX?: string | number,
    gapY?: string | number,
    height?: string | number,
    width?: string | number,
    minHeight?: string | number,
    maxHeight?: string | number,
    minWidth?: string | number,
    maxWidth?: string | number,
    flexWrap?: boolean,
    textTransform?: "uppercase" | "lowercase" | "capitalize"
}


export const Flex = styled.div<IFlex>`
  display: flex;
  
  ${props => props.flex ? `
    flex: ${props.flex};
  ` : null}
  
  ${props => props.direction ? `
    flex-direction: ${props.direction};
  ` : null}
  
  ${props => props.justifyContent ? `
    justify-content: ${props.justifyContent};
  ` : null}
  
  ${props => props.alignItems ? `
    align-items: ${props.justifyContent};
  ` : null}
  
  ${props => props.backgroundColor ? `
    background-color: ${props.backgroundColor};
  ` : null}
  
  ${props => props.fontSize ? `
    font-size: ${toPixels(props.fontSize)};
  ` : null}
  
  ${props => props.height ? `
    height: ${toPixels(props.height)};
  ` : null}
  
  ${props => props.minHeight ? `
    min-height: ${toPixels(props.minHeight)};
  ` : null}
  
  ${props => props.maxHeight ? `
    max-height: ${toPixels(props.maxHeight)};
  ` : null}
  
  ${props => props.width ? `
    width: ${toPixels(props.width)};
  ` : null}
  
  ${props => props.minWidth ? `
    min-width: ${toPixels(props.minWidth)};
  ` : null}
  
  ${props => props.maxWidth ? `
    max-height: ${toPixels(props.maxWidth)};
  ` : null}

  ${props => props.lineHeight ? `
    line-height: ${toPixels(props.lineHeight)};
  ` : null}

  ${props => props.padding ? `
    padding: ${toPixels(props.padding)};
  ` : null}

  ${props => props.paddingLeft ? `
    padding: ${toPixels(props.paddingLeft)};
  ` : null}

  ${props => props.paddingRight ? `
    padding: ${toPixels(props.paddingRight)};
  ` : null}

  ${props => props.paddingTop ? `
    padding: ${toPixels(props.paddingTop)};
  ` : null}

  ${props => props.paddingBottom ? `
    padding: ${toPixels(props.paddingBottom)};
  ` : null}

  ${props => props.paddingX ? `
    padding-left: ${toPixels(props.paddingX)};
    padding-right: ${toPixels(props.paddingX)};
  ` : null}

  ${props => props.paddingY ? `
    padding-left: ${toPixels(props.paddingY)};
    padding-right: ${toPixels(props.paddingY)};
  ` : null}
  
  
  ${props => props.margin ? `
    padding: ${toPixels(props.margin)};
  ` : null}

  ${props => props.marginLeft ? `
    padding: ${toPixels(props.marginLeft)};
  ` : null}

  ${props => props.marginRight ? `
    padding: ${toPixels(props.marginRight)};
  ` : null}

  ${props => props.marginTop ? `
    padding: ${toPixels(props.marginTop)};
  ` : null}

  ${props => props.marginBottom ? `
    padding: ${toPixels(props.marginBottom)};
  ` : null}

  ${props => props.marginX ? `
    padding-left: ${toPixels(props.marginX)};
    padding-right: ${toPixels(props.marginX)};
  ` : null}

  ${props => props.marginY ? `
    padding-left: ${toPixels(props.marginY)};
    padding-right: ${toPixels(props.marginY)};
  ` : null}

  ${props => props.fontStyle ? `
    font-style: ${props.fontStyle};
  ` : null}

  ${props => props.fontWeight ? `
    font-style: ${props.fontWeight};
  ` : null}

  ${props => props.color ? `
    color: ${props.color};
  ` : null}

  ${props => props.gapX ? `
    column-gap: ${toPixels(props.gapX)};
  ` : null}

  ${props => props.gapY ? `
    row-gap: ${toPixels(props.gapY)};
  ` : null}

  ${props => props.gap ? `
    gap: ${toPixels(props.gap)};
  ` : null}

  ${props => props.textTransform ? `
    text-transform: ${toPixels(props.textTransform)};
  ` : null}

  ${props => props.flexWrap ? `
    flex-wrap: wrap;
  ` : null}
  
`;