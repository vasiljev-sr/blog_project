import {StoryFn} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
import {Suspense} from "react";


// eslint-disable-next-line react/display-name
export const RouteDecorator = (Story: StoryFn) => (
    <BrowserRouter>
        <Suspense fallback={''}>
            <Story/>
        </Suspense>

    </BrowserRouter>
)