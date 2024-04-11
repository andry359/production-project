import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    describe('Sidebar', () => {
        test('test render', () => {
            componentRender(<Sidebar />);
            expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        });

        test('test toggle', () => {
            componentRender(<Sidebar />);
            const toggleButton = screen.getByTestId('sidebar-toggle');
            expect(screen.getByTestId('sidebar')).toBeInTheDocument();
            fireEvent.click(toggleButton);
            expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        });
    });
});