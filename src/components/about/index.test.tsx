/**
 * @jest-environment jsdom
 */

import * as React from "react";

import '@testing-library/jest-dom'
import { RenderResult, cleanup, fireEvent, getByDisplayValue, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { About } from '.';

let rendered: RenderResult;
const mockedUsedNavigate: jest.Mock = jest.fn();

afterEach(cleanup);
beforeEach(() => {
    rendered = render(<About />, { wrapper: BrowserRouter });
});

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate
}));

describe('About Page', () => {
    it('Should update title on render', async () => {
        expect(document.title).toEqual("About Me | Jimmy's Personal Website");
    });

    it('Should render text to screen', async () => {
        expect(rendered.getByText("Hi, I'm Jimmy!")).toBeInTheDocument();
        expect(rendered.getByText("In addition to preparing for programming contests, hackathons, and math contests, I enjoy giving back to the community by teaching and mentoring other CS and math enthusiasts. I have extensive experience in programming languages such as Python, Java, C++ and also dabble in HTML/CSS and Javascript. In my other time, I play competitive badminton and I also love skiing and snowboarding.")).toBeInTheDocument();
    });
});
