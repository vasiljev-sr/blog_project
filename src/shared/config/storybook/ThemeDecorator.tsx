import {Theme} from "shared/config/theme";
import {StoryFn} from "@storybook/react";


// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
     <div className={`app ${theme}`} >
        <Story/>
    </div>
)