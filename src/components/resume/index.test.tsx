/**
 * @jest-environment jsdom
 */

import * as React from "react";

import '@testing-library/jest-dom'
import { RenderResult, cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Resume } from '.';
import userEvent from "@testing-library/user-event";

let rendered: RenderResult;
const mockedUsedNavigate: jest.Mock = jest.fn();

afterEach(cleanup);
beforeEach(() => {
    rendered = render(<Resume />, { wrapper: BrowserRouter });
});

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate
}));

describe('Not Found Page', () => {
    it('Should update title on render', async () => {
        expect(document.title).toEqual("Resume | Jimmy's Personal Website");
    });

    it('Should render resume embed', async () => {
        expect(rendered.getByTestId("resumeEmbed")).toHaveAttribute("src", "/resume.pdf");
    });
});
