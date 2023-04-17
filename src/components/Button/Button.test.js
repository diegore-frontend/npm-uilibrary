import React from 'react';
// import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';


test("Render con React-test", ()=> {
	render(<Button label="Aló"/>);
	const buttonElement = screen.getByRole("ui-button");
	expect(buttonElement).toHaveTextContent("Aló");
	expect(buttonElement).toHaveAttribute("role", "ui-button")
})


// it('Renders correctly', () => {
// 	const tree = renderer
// 		.create(<Button label="Aló"/>)
// 		.toJSON();
	
// 	expect(tree.props.type).toBe("button");
// 	expect(tree).toMatchSnapshot();
// })


// it("Changes when is hovered", () => {
// 	const component = renderer.create(
//     <Button label="Hello"/>,
//   );
//   let tree = component.toJSON();

// 	console.log(tree);

//   expect(tree).toMatchSnapshot();

// 	renderer.act(() => {
//     tree.props.onMouseEnter();
//   });
// 	tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

// 	renderer.act(() => {
//     tree.props.onMouseLeave();
//   });
// 	tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// })