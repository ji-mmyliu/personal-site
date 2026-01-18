/**
 * @jest-environment jsdom
 */

import * as React from "react";

import '@testing-library/jest-dom'
import { RenderResult, cleanup, fireEvent, getByDisplayValue, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from '.';

let rendered: RenderResult;
const mockedUsedNavigate: jest.Mock = jest.fn();


afterEach(cleanup);
beforeEach(() => {
    rendered = render(<App />);
});

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate
}));

jest.mock("../../util/routes", () => ({
    Routes: {
        BASE_URL: "https://jimmyliu.dev"
    }
}));

describe('App', () => {
    it('Should render text to screen', async () => {
        expect(rendered.getByText("Hi, I'm Jimmy!")).toBeInTheDocument();
    });

    it.each(["About Me", "Projects", "Achievements", "Resume", "Archives"])(
        'Should render navbar item %s',
        async (headerText: string) => {
            expect(rendered.getAllByText(headerText)[0]).toBeInTheDocument();
        },
    );

    it.each([
        { link: "About Me", result: "Hi, I'm Jimmy!" },
        { link: "Projects", result: "My Recent Projects" },
        { link: "Achievements", result: "Timeline and Achievements" },
        { link: "Statistics Notes", result: "Notes should update automatically below!" },
    ])('Should route to $link after link is clicked',
        async (page: { link: string, result: string }) => {
            if (page.link !== "About Me") {
                expect(rendered.queryByText(page.result)).not.toBeInTheDocument();
            }

            const user = userEvent.setup();
            await user.click(rendered.getAllByText(page.link)[0]);

            expect(rendered.queryByText(page.result)).toBeInTheDocument();
        }
    );
});
