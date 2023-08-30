/**
 * @jest-environment jsdom
 */

import * as React from "react";

import '@testing-library/jest-dom'
import { RenderResult, cleanup, fireEvent, getByDisplayValue, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Achievements } from '.';

let rendered: RenderResult;
const mockedUsedNavigate: jest.Mock = jest.fn();

afterEach(cleanup);
beforeEach(() => {
    rendered = render(<Achievements />, { wrapper: BrowserRouter });
});

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate
}));

describe('Achievements Page', () => {
    it('Should update title on render', async () => {
        expect(document.title).toEqual("Achievements | Jimmy's Personal Website");
    });

    it('Should render text to screen', async () => {
        expect(rendered.getByText("Timeline and Achievements")).toBeInTheDocument();
    });

    it.each([2019, 2020, 2021, 2022])(
        'Should have year %i in timeline',
        (expectedYear: number) => {
            expect(rendered.getByText(expectedYear)).toBeInTheDocument();
        },
    );

    it('Should have hyperlinks with href', async () => {
        const links: Array<HTMLElement> = await rendered.findAllByRole('link');
        for (const link of links) {
            expect(link).toHaveAttribute("href");
        }
    });
});
