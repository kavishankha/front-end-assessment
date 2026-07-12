import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { store } from "../../src/app/store";

export function renderWithProviders(ui: React.ReactElement) {
    return render(
        <Provider store={store}>
            {ui}
        </Provider>
    );
}