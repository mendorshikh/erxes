import { colors } from 'modules/common/styles';
import { rgba } from 'modules/common/styles/color';
import { Contents, MainContent } from 'modules/layout/styles';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';

export const coreHeight = 50;
export const stageWidth = 280;
export const borderRadius = '2px';
export const stageHeight = 'calc(100vh - 200px)';

export const BoardContainer = styled(Contents)`
  margin: 0;
  position: unset;

  > div {
    padding-left: 20px;
  }
`;

export const BoardContent = styledTS<{
  bgColor?: string;
  transparent?: boolean;
}>(styled(MainContent))`
  margin: 0;
  background-color: ${({ bgColor }) => bgColor || colors.colorSecondary};
`;

export const ScrolledContent = styled.div`
  padding: 4px 0 8px;
  margin: 6px 10px 4px 5px;
  flex: 1;
  will-change: contents;
  overflow: auto;
`;

export const RootBack = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  background-color: ${colors.colorSecondary};
`;

// IItem list
export const DropZone = styled.div`
  min-height: 160px;
  will-change: height;
`;

export const EmptyContainer = styled.div`
  height: 100px;
`;

export const Wrapper = styledTS<{ isDraggingOver: boolean }>(styled.div)`
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver && 'rgba(10, 45, 65, .1)'};
  display: flex;
  will-change: contents;
  flex-direction: column;
  padding: 0 4px;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
`;

export const ColorButton = styledTS<{ color?: string }>(styled.div)`
  height: 25px;
  font-weight: 500;
  line-height: 25px;
  font-size: 12px;
  background-color: ${props => rgba(props.color || colors.colorPrimary, 0.1)};
  color: ${props => props.color || colors.colorPrimaryDark};
  padding: 0 10px;
  transition: background 0.3s ease;

  > i {
    margin-right: 5px;
  }

  > span {
    margin-right: 5px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => rgba(props.color || colors.colorPrimary, 0.2)};
  }
`;

export const FormContainer = styled.div`
  padding-right: 20px;
`;

export const ItemDate = styled.span`
  font-size: 11px;
  color: rgb(136, 136, 136);
  z-index: 10;
`;

export const NotifiedContainer = styled.div`
  position: absolute;
  right: 8px;
  width: 22px;
  height: 22px;
  background-color: ${rgba(colors.colorCoreRed, 0.2)};
  color: ${colors.colorCoreRed};
  text-align: center;
  line-height: 22px;
`;

export const ItemContainer = styledTS<{
  isDragging?: boolean;
}>(styled.div)`
  position: relative;
  margin-bottom: 8px;
  background-color: rgb(255, 255, 255);
  padding: 8px;
  outline: 0px;
  font-size: 12px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  will-change: scroll-position;
`;