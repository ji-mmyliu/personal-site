/**
 * @jest-environment jsdom
 */

import * as React from "react";

import '@testing-library/jest-dom'
import { RenderResult, act, cleanup, fireEvent, getByDisplayValue, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Notes } from '.';
import { BrowserRouter } from "react-router-dom";

let rendered: RenderResult;
const mockedUsedNavigate: jest.Mock = jest.fn();

// @ts-expect-error
global.fetch = jest.fn(() => Promise.resolve({ ok: true }));

afterEach(cleanup);
beforeEach(() => {
    rendered = render(<Notes />, { wrapper: BrowserRouter });
});

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate,
    useParams: () => {
        return { id: "stats" }
    },
}));

jest.mock("../../util/routes", () => ({
    Routes: {
        BASE_URL: "https://jimmyliu.dev"
    }
}));

describe('Notes Page', () => {
    it('Should update Lesson Number Input to be 1 by default', async () => {
        const lessonNumInput = rendered.getByLabelText("Lesson Number");
        expect(lessonNumInput).toHaveAttribute("value", "1");
    });

    it('Should allow lesson number editing', async () => {
        const lessonNumInput = rendered.getByTestId("lessonNumInput");
        await act(async () => {
            await fireEvent.change(lessonNumInput, { target: { value: "2" } })
            const notesContentIframe = rendered.getByTestId("notesContent")!;
            expect(notesContentIframe).toHaveAttribute("src", "https://jimmyliu.dev/notes/stats/lesson2.html")
        });
    });
});
