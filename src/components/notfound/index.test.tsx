/**
 * @jest-environment jsdom
 */

import * as React from "react";

import '@testing-library/jest-dom'
import { RenderResult, cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NotFound } from '.';
import userEvent from "@testing-library/user-event";

let rendered: RenderResult;
const mockedUsedNavigate: jest.Mock = jest.fn();

afterEach(cleanup);
beforeEach(() => {
    rendered = render(<NotFound />, { wrapper: BrowserRouter });
});

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate
}));

describe('Not Found Page', () => {
    it('Should update title on render', async () => {
        expect(document.title).toEqual("404 Page Not Found | Jimmy's Personal Website");
    });

    it('Should render text to screen', async () => {
        expect(rendered.getByText("404 Error: Page Not Found")).toBeInTheDocument();
    });

    it('Should route to home when Back to Home button is clicked', async () => {
        const backToHomeBtn = rendered.getByTestId("backToHome");
        const user = userEvent.setup();
        await user.click(backToHomeBtn);
        expect(mockedUsedNavigate).toHaveBeenCalled();
    });
});
